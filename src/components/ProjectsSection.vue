<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal.vue";
import gsap from "gsap";
import { ICONS } from "../data/icons";

const { t, locale } = useI18n();
const root = ref(null);
const cardRefs = ref([]);
const activeProject = ref(null);
const isOpen = ref(false);

const open = (p) => {
  activeProject.value = p;
  isOpen.value = true;
  document.body.style.overflow = "hidden";
};

const close = () => {
  isOpen.value = false;
  setTimeout(() => {
    activeProject.value = null;
  }, 450);
  document.body.style.overflow = "";
};

onMounted(() => {
  cardRefs.value.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 82%" },
      },
    );
  });
});

// 3D tilt
const tilt = (e, i) => {
  const card = cardRefs.value[i];
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  gsap.to(card, {
    rotateX: -y * 12,
    rotateY: x * 12,
    scale: 1.015,
    duration: 0.2,
    ease: "none",
    transformPerspective: 1000,
  });
};

const untilt = (i) => {
  gsap.to(cardRefs.value[i], {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    duration: 0.7,
    ease: "elastic.out(1, 0.5)",
    transformPerspective: 1000,
  });
};
</script>

<template>
  <section id="projects" class="projects-section" ref="root">
    <div class="container">
      <span class="section-pill">{{ t("projects_label") }}</span>
      <h2 class="section-heading pre">{{ t("projects_heading") }}</h2>

      <div class="projects-grid">
        <div
          v-for="(proj, i) in projects"
          :key="i"
          class="proj-card card"
          ref="cardRefs"
          @mousemove="tilt($event, i)"
          @mouseleave="untilt(i)"
          @click="open(proj)"
        >
          <div class="proj-img">
            <img :src="proj.image" :alt="proj.title" />
            <div
              class="proj-overlay"
              :style="{ background: proj.accent + '1a' }"
            >
              <span class="view-label">
                {{ t("see_more") }}
                <span class="view-arrow" v-html="ICONS.arrow"></span>
              </span>
            </div>
          </div>
          <div class="proj-meta">
            <div>
              <h3 class="proj-title">{{ proj.title }}</h3>
              <p class="proj-date">{{ proj.date[locale] }}</p>
            </div>
            <div class="proj-dot" :style="{ background: proj.accent }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ProjectModal :project="activeProject" :isOpen="isOpen" @close="close" />
</template>

<style scoped>
.projects-section {
  padding: 140px 0;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 56px;
  white-space: pre-line;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.proj-card {
  cursor: pointer;
  will-change: transform;
  transform-style: preserve-3d;
  opacity: 0;
  border-radius: var(--radius);
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black); /* Fix for Safari/Chrome dropping border radius on transform */
  mask-image: radial-gradient(white, black);
  isolation: isolate; /* Additional fix */
}

.proj-img {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.proj-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.5s ease,
    filter 0.4s;
  filter: brightness(0.85);
}

.proj-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s;
}

.view-label {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: #fff;
  letter-spacing: 0.04em;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-arrow {
  width: 16px;
  height: 16px;
}

.proj-card:hover .proj-img img {
  transform: scale(1.06);
  filter: brightness(1);
}

.proj-card:hover .proj-overlay {
  opacity: 1;
}

.proj-meta {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
}

.proj-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.proj-date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--fg-3);
}

.proj-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px currentColor;
}

.pre {
  white-space: pre-line;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

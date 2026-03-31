<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ICONS } from "../data/icons";

const { t } = useI18n();
const root = ref(null);

const reveal = (targets, from = {}, stagger = 0) => {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 30, ...from },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: { trigger: root.value, start: "top 72%" },
    },
  );
};

onMounted(() => {
  reveal(root.value.querySelectorAll(".bento-card"), {}, 0.1);
});
</script>

<template>
  <section id="about" class="about-section" ref="root">
    <div class="container">
      <div class="section-label-row">
        <span class="section-pill">{{ t("about_label") }}</span>
      </div>

      <!-- Bento Grid -->
      <div class="bento">
        <!-- Main bio card -->
        <div class="bento-card bio-card card">
          <h2 class="section-heading pre">{{ t("about_heading") }}</h2>
          <p class="bio-text">{{ t("about_desc") }}</p>
        </div>

        <!-- Avatar / visual card -->
        <div class="bento-card avatar-card card">
          <div class="avatar-wrap">
            <img src="/assets/avatar.jfif" alt="Pedro Barone" class="avatar" />
            <div class="avatar-overlay">
              <span class="av-tag">Pedro Barone</span>
            </div>
          </div>
        </div>

        <!-- Stats cards (3 small) -->
        <div class="bento-card stat-card card">
          <span class="stat-num">5+</span>
          <span class="stat-desc">{{ t("about_exp") }}</span>
        </div>

        <div class="bento-card stat-card card">
          <span class="stat-icon" v-html="ICONS.bolt"></span>
          <span class="stat-desc">{{ t("about_focus") }}</span>
        </div>

        <div class="bento-card stat-card card location-card">
          <span class="stat-icon" v-html="ICONS.mapPin"></span>
          <span class="stat-desc">{{ t("about_location") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 140px 0;
}

.section-label-row {
  margin-bottom: 0;
}

.pre {
  white-space: pre-line;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 24px;
}

/* Bento grid */
.bento {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 16px;
  margin-top: 24px;
}

.bento-card {
  opacity: 0;
}

/* Bio card: spans row 1-2 col 1 */
.bio-card {
  grid-column: 1;
  grid-row: 1 / 2;
  padding: 44px 44px;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--fg-2);
  max-width: 600px;
}

/* Avatar card: col 2, row 1-2 */
.avatar-card {
  grid-column: 2;
  grid-row: 1 / 3;
  min-height: 360px;
  overflow: hidden;
  position: relative;
}

.avatar-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 360px;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(70%) contrast(1.1);
  transition: filter 0.5s;
}

.avatar-card:hover .avatar {
  filter: grayscale(0%) contrast(1);
}

.avatar-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(8, 9, 12, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-hover);
  border-radius: 8px;
  padding: 8px 16px;
}

.av-tag {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--green);
}

/* 3 stat cards: row 3 */
.stat-card {
  grid-row: 3;
  padding: 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card:nth-child(3) {
  grid-column: 1;
}
/* Actually distribute via auto */
.bento-card:nth-child(3) {
  grid-column: 1;
  grid-row: 2;
}
.bento-card:nth-child(4) {
  grid-column: 1;
  grid-row: 3;
}
.bento-card:nth-child(5) {
  grid-column: 2;
  grid-row: 3;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--green);
  line-height: 1;
}

.stat-icon {
  width: 28px;
  height: 28px;
  color: var(--green);
}

.stat-desc {
  font-size: 0.88rem;
  color: var(--fg-2);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .bento {
    grid-template-columns: 1fr;
  }
  .bio-card,
  .avatar-card,
  .bento-card:nth-child(3),
  .bento-card:nth-child(4),
  .bento-card:nth-child(5) {
    grid-column: 1;
    grid-row: auto;
  }
  .avatar-card {
    min-height: 280px;
  }
}
</style>

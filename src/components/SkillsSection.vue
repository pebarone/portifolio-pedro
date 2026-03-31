<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";

const { t } = useI18n();
const root = ref(null);
import { techIcons } from "../data/techIcons";

const skills = [
  {
    name: "JavaScript",
    icon: techIcons.JavaScript,
    years: "5yr",
  },
  {
    name: "Python",
    icon: techIcons.Python,
    years: "5yr",
  },
  {
    name: "Node.js",
    icon: techIcons.NodeJS,
    years: "5yr",
  },
  {
    name: "React",
    icon: techIcons.React,
    years: "5yr",
  },
  {
    name: "HTML5",
    icon: techIcons.HTML5,
    years: "5yr",
  },
  {
    name: "CSS3",
    icon: techIcons.CSS3,
    years: "5yr",
  },
  {
    name: "Git",
    icon: techIcons.Git,
    years: "5yr",
  },
  {
    name: "SQL",
    icon: techIcons.SQL,
    years: "4yr",
  },
  {
    name: "Docker",
    icon: techIcons.Docker,
    years: "2yr",
  },
  {
    name: "Sass",
    icon: techIcons.Sass,
    years: "2yr",
  },
  {
    name: "Vue.js",
    icon: techIcons.Vue,
    years: "1yr",
  },
  {
    name: "Kubernetes",
    icon: techIcons.Kubernetes,
    years: "1yr",
  },
];

onMounted(() => {
  gsap.fromTo(
    root.value.querySelectorAll(".skill-item"),
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: "back.out(1.5)",
      scrollTrigger: { trigger: root.value, start: "top 70%" },
    },
  );
});

const hover = (e) => {
  gsap.to(e.currentTarget, {
    y: -4,
    duration: 0.35,
    ease: "power2.out",
  });
};

const leave = (e) => {
  gsap.to(e.currentTarget, { y: 0, duration: 0.4, ease: "power2.out" });
};
</script>

<template>
  <section id="skills" class="skills-section" ref="root">
    <div class="container">
      <span class="section-pill">{{ t("skills_label") }}</span>

      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-item card"
          @mouseenter="hover($event)"
          @mouseleave="leave($event)"
        >
          <div class="skill-icon" v-html="skill.icon"></div>
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-years">{{ skill.years }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 40px 0;
  background: var(--surface);
  position: relative;
}

.skills-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent,
    var(--surface) 5%,
    var(--surface) 95%,
    transparent
  );
}

 /* Deleted .section-heading */ 
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  position: relative;
}

.skill-item {
  padding: 28px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: default;
  position: relative;
  transition:
    border-color 0.3s,
    background 0.3s;
  opacity: 0;
}

.skill-item:hover {
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.03);
  box-shadow: 0 0 24px rgba(0, 255, 135, 0.05);
}

.skill-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg-2);
  transition: color 0.3s;
}

.skill-item:hover .skill-icon {
  color: var(--green);
}

.skill-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.skill-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  flex: 1;
}

.skill-years {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--fg-3);
  padding: 2px 8px;
  border: 1px solid var(--border);
  border-radius: 100px;
  white-space: nowrap;
  flex-shrink: 0;
}

.pre {
  white-space: pre-line;
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

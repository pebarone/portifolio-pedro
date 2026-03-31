<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";

import { ICONS } from "../data/icons";

const { t } = useI18n();
const root = ref(null);

const contacts = [
  {
    labelKey: "email_label",
    value: "pedrobarone2709@gmail.com",
    link: "mailto:pedrobarone2709@gmail.com",
    icon: ICONS.mail,
  },
  {
    labelKey: "phone_label",
    value: "+55 (11) 97296-9552",
    link: "https://api.whatsapp.com/send?phone=5511972969552",
    icon: ICONS.smartphone,
  },
  {
    labelKey: "linkedin_label",
    value: "linkedin.com/in/pedro-barone",
    link: "https://www.linkedin.com/in/pedro-barone/",
    icon: ICONS.linkedin,
  },
  {
    labelKey: "github_label",
    value: "github.com/pebarone",
    link: "https://github.com/pebarone",
    icon: ICONS.github,
  },
];

onMounted(() => {
  gsap.fromTo(
    root.value.querySelectorAll(".contact-item"),
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: root.value, start: "top 72%" },
    },
  );
});
</script>

<template>
  <section id="contact" class="contact-section" ref="root">
    <div class="container">
      <span class="section-pill">{{ t("contact_label") }}</span>
      <h2 class="section-heading pre">{{ t("contact_heading") }}</h2>
      <p class="contact-sub">{{ t("contact_sub") }}</p>

      <div class="contact-grid">
        <a
          v-for="(c, i) in contacts"
          :key="i"
          :href="c.link"
          target="_blank"
          class="contact-item card"
        >
          <div class="contact-icon" v-html="c.icon"></div>
          <div class="contact-info">
            <p class="contact-label">{{ t(c.labelKey) }}</p>
            <p class="contact-value">{{ c.value }}</p>
          </div>
          <span class="arrow" v-html="ICONS.external"></span>
        </a>
      </div>
    </div>

    <footer class="footer">
      <div class="container footer-inner">
        <span class="footer-copy">{{ t("footer_copy") }}</span>
        <span class="footer-line">—</span>
        <span class="footer-year">2026</span>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 140px 0 0;
  background: var(--surface);
  position: relative;
}

.contact-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(0, 255, 135, 0.05),
    transparent 60%
  );
  pointer-events: none;
}

.section-heading {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 16px;
  white-space: pre-line;
}

.contact-sub {
  font-size: 1.1rem;
  color: var(--fg-2);
  margin-bottom: 56px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  transition: all 0.3s;
  position: relative;
  opacity: 0;
  overflow: hidden;
}

.contact-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 255, 135, 0.04), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.contact-item:hover {
  border-color: rgba(0, 255, 135, 0.2);
  transform: translateY(-4px);
}

.contact-item:hover::before {
  opacity: 1;
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  transition: all 0.3s;
}

.contact-icon.mono {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--fg-2);
}

.contact-item:hover .contact-icon {
  background: rgba(0, 255, 135, 0.1);
  border-color: rgba(0, 255, 135, 0.3);
}

.contact-info {
  flex: 1;
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--green);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 3px;
}

.contact-value {
  font-size: 0.95rem;
  color: var(--fg-2);
}

.arrow {
  font-size: 1.2rem;
  color: var(--fg-3);
  transition:
    color 0.2s,
    transform 0.3s;
}

.contact-item:hover .arrow {
  color: var(--green);
  transform: translate(4px, -4px);
}

.pre {
  white-space: pre-line;
}

/* Footer */
.footer {
  margin-top: 100px;
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--fg-3);
}

.footer-line {
  opacity: 0.3;
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>

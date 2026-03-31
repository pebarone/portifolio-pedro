<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";

const { t, locale } = useI18n();
const scrolled = ref(false);
const menuOpen = ref(false);

const navLinks = ["nav_about", "nav_skills", "nav_projects", "nav_contact"];
const hrefs = ["#about", "#skills", "#projects", "#contact"];

const checkScroll = () => {
  scrolled.value = window.scrollY > 40;
};
onMounted(() => window.addEventListener("scroll", checkScroll));
onUnmounted(() => window.removeEventListener("scroll", checkScroll));

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

const close = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

const toggleLang = () => {
  locale.value = locale.value === "en" ? "pt" : "en";
  localStorage.setItem("lang", locale.value);
};

const scrollTo = (href) => {
  close();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner container">
      <a href="#hero" class="logo" @click.prevent="scrollTo('#hero')">
        <span class="logo-text">{{ t("portfolio") }}</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="(key, i) in navLinks" :key="key">
          <a :href="hrefs[i]" @click.prevent="scrollTo(hrefs[i])">{{
            t(key)
          }}</a>
        </li>
      </ul>

      <div class="nav-right">
        <button class="lang-btn" @click="toggleLang">
          {{ locale === "en" ? "PT" : "EN" }}
        </button>
        <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen">
          <span :class="{ open: menuOpen }"></span>
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="(key, i) in navLinks" :key="key">
          <a :href="hrefs[i]" @click.prevent="scrollTo(hrefs[i])">{{
            t(key)
          }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  transition:
    background 0.4s,
    border-color 0.4s;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(8, 9, 12, 0.85);
  backdrop-filter: blur(16px);
  border-color: var(--border);
}

.nav-inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green);
  letter-spacing: -0.02em;
}

.nav-links {
  display: none;
  gap: 40px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    align-items: center;
  }
}

.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--fg-2);
  letter-spacing: 0.02em;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--green);
  transition: width 0.3s;
}

.nav-links a:hover {
  color: var(--fg);
}
.nav-links a:hover::after {
  width: 100%;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--fg-2);
  padding: 4px 10px;
  border: 1px solid var(--border-hover);
  border-radius: 100px;
  transition: all 0.25s;
}

.lang-btn:hover {
  color: var(--green);
  border-color: var(--green);
}

.hamburger {
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

.hamburger span {
  display: block;
  height: 1.5px;
  background: var(--fg);
  border-radius: 2px;
  transition:
    transform 0.35s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.35s;
  transform-origin: left center;
}

.hamburger span.open:first-child {
  transform: rotate(38deg) translateY(-2px);
}

.hamburger span.open:last-child {
  transform: rotate(-38deg) translateY(2px);
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.4s,
    clip-path 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  clip-path: circle(0% at 90% 4%);
  z-index: -1;
}

.mobile-menu.open {
  pointer-events: all;
  opacity: 1;
  clip-path: circle(150% at 90% 4%);
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.mobile-menu a {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--fg-2);
  transition: color 0.2s;
}

.mobile-menu a:hover {
  color: var(--green);
}
</style>

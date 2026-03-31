<script setup>
import AppNavbar from "./components/AppNavbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <div class="app">
    <AppNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.app {
  position: relative;
}
main {
  position: relative;
  z-index: 1;
}
</style>

<script setup>
import { watch, ref, nextTick, computed } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ICONS } from "../data/icons";

const props = defineProps({
  project: { type: Object, default: null },
  isOpen: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);
const { t, locale } = useI18n();
const overlay = ref(null);
const panel = ref(null);
const currentSlide = ref(0);
const fullscreenImage = ref(null);

const screenshots = computed(() => {
  if (!props.project) return [];
  return props.project.screenshots || [];
});

watch(
  () => props.isOpen,
  async (v) => {
    await nextTick();
    if (v) {
      currentSlide.value = 0;
      fullscreenImage.value = null; // reset fullscreen on open
      gsap.fromTo(overlay.value, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        panel.value,
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      );
    } else if (panel.value) {
      gsap.to(panel.value, { y: 20, opacity: 0, duration: 0.25 });
      gsap.to(overlay.value, { opacity: 0, duration: 0.3, delay: 0.1 });
    }
  },
);

const handleClose = () => emit("close");

const nextSlide = () => {
  if (screenshots.value.length > 0) {
    currentSlide.value = (currentSlide.value + 1) % screenshots.value.length;
  }
};

const prevSlide = () => {
  if (screenshots.value.length > 0) {
    currentSlide.value =
      (currentSlide.value - 1 + screenshots.value.length) % screenshots.value.length;
  }
};

const goToSlide = (i) => {
  currentSlide.value = i;
};

const openFullscreen = (src) => {
  fullscreenImage.value = src;
};

const closeFullscreen = () => {
  fullscreenImage.value = null;
};
</script>

<template>
  <Teleport to="body">
    <div
      class="overlay"
      v-show="isOpen"
      ref="overlay"
      @click.self="handleClose"
    >
      <div class="panel" ref="panel" v-if="project">
        <!-- Header bar -->
        <div class="panel-header">
          <div class="panel-title">
            <span class="panel-name">{{ project.title[locale] }}</span>
            <span class="panel-date">{{ project.date[locale] }}</span>
          </div>
          <button
            class="close-btn"
            @click="handleClose"
            :aria-label="t('close')"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="panel-body">
          <!-- Gallery -->
          <div class="gallery-wrap" v-if="screenshots.length > 0">
            <div class="gallery-viewport">
              <img
                :src="screenshots[currentSlide]"
                :alt="project.title[locale] + ' screenshot ' + (currentSlide + 1)"
                class="gallery-img"
                @click="openFullscreen(screenshots[currentSlide])"
                title="Click to view fullscreen"
              />
            </div>

            <!-- Controls -->
            <button
              v-if="screenshots.length > 1"
              class="gallery-nav prev"
              @click.stop="prevSlide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              v-if="screenshots.length > 1"
              class="gallery-nav next"
              @click.stop="nextSlide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            <!-- Dots -->
            <div class="gallery-dots" v-if="screenshots.length > 1">
              <button
                v-for="(_, i) in screenshots"
                :key="i"
                class="dot"
                :class="{ active: i === currentSlide }"
                @click.stop="goToSlide(i)"
              ></button>
            </div>

            <!-- Counter -->
            <div class="gallery-counter" v-if="screenshots.length > 1">
              {{ currentSlide + 1 }} / {{ screenshots.length }}
            </div>
          </div>

          <!-- Fallback: project thumbnail -->
          <div class="gallery-wrap gallery-fallback" v-else>
            <img
              :src="project.image"
              :alt="project.title[locale]"
              class="gallery-img"
              @click="openFullscreen(project.image)"
              title="Click to view fullscreen"
            />
          </div>

          <!-- Info -->
          <div class="info-wrap">
            <div class="desc" v-html="project.description[locale]"></div>

            <div class="modal-actions">
              <a
                v-if="project.site"
                :href="project.site"
                target="_blank"
                class="action-btn primary"
                :style="{ background: project.accent }"
              >
                {{ t("access_project") }}
                <span class="modal-arrow" v-html="ICONS.external"></span>
              </a>
              <a
                v-if="project.repository"
                :href="project.repository"
                target="_blank"
                class="action-btn ghost"
              >
                {{ t("access_repository") }}
                <span class="modal-arrow" v-html="ICONS.arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Fullscreen Image Viewer -->
      <div 
        class="fullscreen-overlay" 
        v-if="fullscreenImage" 
        @click="closeFullscreen"
      >
        <button class="fullscreen-close" @click="closeFullscreen" aria-label="Close fullscreen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <img :src="fullscreenImage" class="fullscreen-img" @click.stop />
      </div>

    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 8, 0.88);
  backdrop-filter: blur(12px);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.panel {
  background: rgba(14, 17, 23, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 1100px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow:
    0 60px 120px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255,255,255,0.05) inset;
}

/* Header */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: rgba(20, 25, 35, 0.6);
  flex-shrink: 0;
}

.panel-title {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.panel-name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
}

.panel-date {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--fg-3);
}

.close-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--fg-2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  background: rgba(255,255,255,0.03);
}

.close-btn:hover {
  background: rgba(255,255,255,0.08);
  color: var(--fg);
  border-color: var(--border-hover);
}

/* Body */
.panel-body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  overflow: hidden;
  flex: 1;
}

/* Gallery */
.gallery-wrap {
  position: relative;
  background: #09090b;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-fallback {
  padding: 0;
}

.gallery-viewport {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* ensures complete image is visible */
  transition: opacity 0.3s ease;
  padding: 16px; /* spacing so it doesn't touch the borders immediately */
  cursor: zoom-in;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
  z-index: 2;
}

.gallery-nav svg {
  width: 20px;
  height: 20px;
}

.gallery-nav:hover {
  background: rgba(0, 0, 0, 0.75);
  border-color: rgba(255,255,255,0.3);
  transform: translateY(-50%) scale(1.1);
}

.gallery-nav.prev { left: 12px; }
.gallery-nav.next { right: 12px; }

.gallery-dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
  border: none;
  cursor: pointer;
  transition: all 0.25s;
}

.dot.active {
  background: #fff;
  transform: scale(1.3);
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
}

.dot:hover:not(.active) {
  background: rgba(255,255,255,0.6);
}

.gallery-counter {
  position: absolute;
  top: 14px;
  right: 14px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(255,255,255,0.7);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.1);
  z-index: 2;
}

/* Info panel */
.info-wrap {
  padding: 32px 28px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-left: 1px solid rgba(255,255,255,0.06);
}

/* Fullscreen Viewer */
.fullscreen-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(5px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: zoom-out;
}

.fullscreen-img {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  cursor: default;
}

.fullscreen-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10001;
}

.fullscreen-close:hover {
  background: rgba(255,255,255,0.2);
  transform: scale(1.05);
}

.desc {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--fg-2);
  flex: 1;
}

.desc :deep(b),
.desc :deep(strong) {
  color: var(--fg);
}

.desc :deep(code) {
  font-family: var(--font-mono);
  background: var(--surface-3);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.88em;
  color: var(--green);
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition:
    opacity 0.25s,
    transform 0.25s;
}

.modal-arrow {
  width: 16px;
  height: 16px;
}

.action-btn.primary {
  color: #000;
}

.action-btn.primary:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.action-btn.ghost {
  border: 1px solid var(--border-hover);
  color: var(--fg-2);
}

.action-btn.ghost:hover {
  background: var(--surface-2);
  color: var(--fg);
  transform: translateY(-2px);
}

/* Scrollbar inside panel */
.info-wrap::-webkit-scrollbar {
  width: 3px;
}
.info-wrap::-webkit-scrollbar-thumb {
  background: var(--surface-3);
}
.info-wrap::-webkit-scrollbar-thumb:hover {
  background: var(--green);
}

@media (max-width: 768px) {
  .panel-body {
    grid-template-columns: 1fr;
  }
  .gallery-wrap {
    height: 240px;
    position: relative;
  }
  .info-wrap {
    border-left: none;
    border-top: 1px solid var(--border);
  }
}
</style>

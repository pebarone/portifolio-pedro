<script setup>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";

const { t, locale } = useI18n();

const line1 = ref(null);
const line2 = ref(null);
const line3 = ref(null);
const pill = ref(null);
const sub = ref(null);
const actions = ref(null);
const rightPanel = ref(null);

const runEntrance = () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(
    pill.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 },
  )
    .fromTo(
      [line1.value, line2.value, line3.value],
      { y: "110%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.9, stagger: 0.1 },
      "-=0.2",
    )
    .fromTo(
      sub.value,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.4",
    )
    .fromTo(
      actions.value.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
      "-=0.4",
    )
    .fromTo(
      rightPanel.value,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
      "-=0.8",
    );
};

onMounted(() => {
  setTimeout(runEntrance, 100);
});

watch(locale, () => {
  setTimeout(() => {
    // just re-run a soft fade after language change
    gsap.fromTo(
      [line1.value, line2.value, line3.value],
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
    );
  }, 50);
});
</script>

<template>
  <section id="hero" class="hero">
    <!-- Terminal / code decoration -->
    <div class="bg-grid"></div>
    <div class="bg-glow"></div>

    <div class="container hero-layout">
      <!-- LEFT: headline -->
      <div class="hero-left">
        <div class="status-pill" ref="pill">
          <span class="dot"></span>
          {{ t("hero_status") }}
        </div>

        <h1 class="hero-heading">
          <span class="line-wrap"
            ><span ref="line1" class="line">{{ t("hero_title_1") }}</span></span
          >
          <span class="line-wrap accent"
            ><span ref="line2" class="line accent-text">{{
              t("hero_title_2")
            }}</span></span
          >
          <span class="line-wrap"
            ><span ref="line3" class="line">{{ t("hero_title_3") }}</span></span
          >
        </h1>

        <p class="hero-sub" ref="sub">{{ t("hero_sub") }}</p>

        <div class="hero-actions" ref="actions">
          <a
            href="/assets/cv/1Pedro_Barone_Software_Engineer.pdf"
            download
            class="btn-primary"
          >
            {{ t("download_cv") }}
          </a>
          <a href="mailto:pedrobarone2709@gmail.com" class="btn-ghost">
            {{ t("contact_btn") }}
          </a>
        </div>
      </div>

      <!-- RIGHT: code card -->
      <div class="hero-right" ref="rightPanel">
        <div class="code-card">
          <div class="code-header">
            <div class="dots">
              <span class="red"></span>
              <span class="yellow"></span>
              <span class="green"></span>
            </div>
            <span class="filename">pedro.profile.ts</span>
          </div>
          <pre
            class="code-body"
          ><code><span class="token-kw">const</span> <span class="token-var">engineer</span> <span class="token-op">=</span> <span class="token-bracket">{</span>
  name<span class="token-op">:</span>       <span class="token-str">"Pedro Barone"</span><span class="token-punc">,</span>
  role<span class="token-op">:</span>       <span class="token-str">"Fullstack Dev"</span><span class="token-punc">,</span>
  location<span class="token-op">:</span>  <span class="token-str">"São Paulo, BR"</span><span class="token-punc">,</span>
  stack<span class="token-op">:</span> <span class="token-bracket">[</span>
    <span class="token-str">"JavaScript"</span><span class="token-punc">,</span> <span class="token-str">"Python"</span><span class="token-punc">,</span>
    <span class="token-str">"Node.js"</span><span class="token-punc">,</span>    <span class="token-str">"SQL"</span><span class="token-punc">,</span>
    <span class="token-str">"React"</span><span class="token-punc">,</span>      <span class="token-str">"Vue"</span>
  <span class="token-bracket">]</span><span class="token-punc">,</span>
  focus<span class="token-op">:</span>     <span class="token-str">"Automation &amp; APIs"</span><span class="token-punc">,</span>
  available<span class="token-op">:</span> <span class="token-kw">true</span>
<span class="token-bracket">}</span>
</code></pre>
          <div class="code-footer">
            <span class="code-status"><span class="blink">█</span> ready</span>
          </div>
        </div>

        <!-- stat chips -->
        <div class="stat-chips">
          <div class="chip">
            <span class="chip-num">6+</span>
            <span class="chip-label">Projects shipped</span>
          </div>
          <div class="chip">
            <span class="chip-num">5+</span>
            <span class="chip-label">Years experience</span>
          </div>
          <div class="chip">
            <span class="chip-num">∞</span>
            <span class="chip-label">Curiosity</span>
          </div>
        </div>
      </div>
    </div>

    <!-- scroll indicator -->
    <div class="scroll-indicator">
      <span>scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  overflow: hidden;
}

/* Backgrounds */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(
    ellipse 80% 60% at 50% 40%,
    black 30%,
    transparent 100%
  );
  pointer-events: none;
}

.bg-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 255, 135, 0.06) 0%,
    transparent 70%
  );
  top: -200px;
  right: -100px;
  pointer-events: none;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 100px;
}

/* Status pill */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 16px;
  border: 1px solid rgba(0, 255, 135, 0.3);
  border-radius: 100px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  width: fit-content;
}

.dot {
  width: 7px;
  height: 7px;
  background: var(--green);
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
  box-shadow: 0 0 8px var(--green);
}

/* Hero heading */
.hero-heading {
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
}

.line-wrap {
  display: block;
  overflow: hidden;
}

.line {
  display: block;
}

.accent-text {
  background: linear-gradient(135deg, var(--green) 20%, var(--blue) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.2rem;
  line-height: 1.65;
  color: var(--fg-2);
  max-width: 500px;
  margin-bottom: 44px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 13px 28px;
  background: var(--green);
  color: var(--bg);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.btn-primary:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.btn-ghost {
  padding: 13px 28px;
  border: 1px solid var(--border-hover);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--fg-2);
  transition: all 0.25s;
}
.btn-ghost:hover {
  color: var(--fg);
  border-color: var(--fg-2);
  transform: translateY(-2px);
}

/* Code card */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.code-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}

.dots {
  display: flex;
  gap: 7px;
}
.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dots .red {
  background: #f87171;
}
.dots .yellow {
  background: #fbbf24;
}
.dots .green {
  background: #4ade80;
}

.filename {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--fg-3);
}

.code-body {
  padding: 28px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.8;
}

.token-kw {
  color: var(--purple);
}
.token-var {
  color: var(--blue);
}
.token-str {
  color: var(--green);
}
.token-op {
  color: var(--fg-3);
}
.token-punc {
  color: var(--fg-3);
}
.token-bracket {
  color: var(--fg-2);
}

.code-footer {
  padding: 10px 28px;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
}

.code-status {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--green);
}

.blink {
  animation: blink 1.2s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Stat chips */
.stat-chips {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.chip {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    border-color 0.3s,
    background 0.3s;
}

.chip:hover {
  border-color: rgba(0, 255, 135, 0.3);
  background: var(--surface-2);
}

.chip-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--green);
  line-height: 1;
}

.chip-label {
  font-size: 0.78rem;
  color: var(--fg-3);
  line-height: 1.3;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--fg-3);
  letter-spacing: 0.08em;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--fg-3), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scaleY(1);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.2);
  }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .hero-right {
    display: none;
  }
}
</style>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  initTemplateScripts,
  cleanupTemplateScripts,
} from '@/utils/initScripts'

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})
</script>

<template>
  <!-- Hero Section -->
  <section class="gallery-hero-section">
    <div class="gallery-hero-bg">
      <!-- Floating decorations in hero -->
      <div class="hero-deco hero-deco-star1">&#9733;</div>
      <div class="hero-deco hero-deco-star2">&#9733;</div>
      <div class="hero-deco hero-deco-balloon">&#127880;</div>
      <div class="hero-deco hero-deco-cloud">&#9729;</div>
      <div class="container">
        <div class="gallery-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">{{
              $t('gallery.breadcrumb.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('gallery.breadcrumb.current')
            }}</span>
          </nav>
          <div class="hero-badge">
            <i class="fas fa-camera-retro badge-icon"></i>
            <span>{{ $t('gallery.hero.badge') }}</span>
          </div>
          <h1 class="gallery-hero-title">
            {{ $t('gallery.hero.titlePrefix') }}
            <span class="gradient-text-light d-block">{{
              $t('gallery.hero.titleHighlight')
            }}</span>
          </h1>
          <p class="gallery-hero-subtitle">{{ $t('gallery.hero.subtitle') }}</p>
        </div>
      </div>
    </div>
    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#FFF9F0"
        />
      </svg>
    </div>
  </section>

  <!-- Gallery Section -->
  <div class="kids-gallery-section">
    <!-- Floating decorations -->
    <div class="floating-deco deco-star1">&#9733;</div>
    <div class="floating-deco deco-star2">&#9733;</div>
    <div class="floating-deco deco-star3">&#9733;</div>
    <div class="floating-deco deco-butterfly1">&#129419;</div>
    <div class="floating-deco deco-butterfly2">&#129419;</div>
    <div class="floating-deco deco-balloon1">&#127880;</div>
    <div class="floating-deco deco-balloon2">&#127880;</div>
    <div class="floating-deco deco-cloud1">&#9729;</div>
    <div class="floating-deco deco-cloud2">&#127752;</div>

    <div class="container">
      <!-- Filter Buttons -->
      <div class="kids-filter-menu text-center mb-40 filter-menu-active">
        <button data-filter="*" class="filter-pill active">
          <i class="fas fa-th"></i> {{ $t('gallery.filter.all') }}
        </button>
        <button data-filter=".cat-1" class="filter-pill pill-green">
          <i class="fas fa-tree"></i> {{ $t('gallery.filter.outdoor') }}
        </button>
        <button data-filter=".cat-2" class="filter-pill pill-pink">
          <i class="fas fa-birthday-cake"></i> {{ $t('gallery.filter.party') }}
        </button>
        <button data-filter=".cat-3" class="filter-pill pill-yellow">
          <i class="fas fa-baby"></i> {{ $t('gallery.filter.toddler') }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-30 justify-content-center filter-active">
        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-1.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-1.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.outdoorFun') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-2.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-2.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.partyTime') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-3.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-3.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">
              {{ $t('gallery.labels.littleStars') }}
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1 cat-2">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-4.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-4.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.happyDays') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-5.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-5.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">
              {{ $t('gallery.labels.celebrations') }}
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-6.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-6.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">
              {{ $t('gallery.labels.tinyExplorers') }}
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-7.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-7.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.partyMagic') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-8.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-8.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.giggles') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-9.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-9.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.playtime') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-10.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-10.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">{{ $t('gallery.labels.adventures') }}</div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-11.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-11.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">
              {{ $t('gallery.labels.joyLaughter') }}
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
          <div class="photo-frame">
            <div class="tape-deco"></div>
            <div class="frame-inner">
              <img
                src="/assets/img/project/p-12.jpg"
                :alt="$t('gallery.imageAlt')"
              />
              <a
                href="/assets/img/project/p-12.jpg"
                class="frame-overlay popup-image"
              >
                <i class="fas fa-search-plus"></i>
              </a>
            </div>
            <div class="frame-label">
              {{ $t('gallery.labels.preciousMoments') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========================================
   Hero Section
   ======================================== */
.gallery-hero-section {
  position: relative;
  overflow: hidden;
  z-index: 10;
}

.gallery-hero-bg {
  background: linear-gradient(135deg, #6c5ce7 0%, #e91e8c 50%, #ffb800 100%);
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.gallery-hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Hero Floating Decorations */
.hero-deco {
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  pointer-events: none;
}

.hero-deco-star1 {
  top: 15%;
  left: 8%;
  font-size: 40px;
  color: #ffb800;
  animation: spinSlow 8s linear infinite;
}

.hero-deco-star2 {
  bottom: 25%;
  right: 10%;
  font-size: 28px;
  color: #fff;
  animation: spinSlow 12s linear infinite reverse;
}

.hero-deco-balloon {
  top: 20%;
  right: 15%;
  font-size: 48px;
  animation: floatUp 6s ease-in-out infinite;
}

.hero-deco-cloud {
  bottom: 30%;
  left: 12%;
  font-size: 50px;
  color: #fff;
  animation: driftRight 10s ease-in-out infinite;
}

/* Breadcrumb */
.modern-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.breadcrumb-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.breadcrumb-link:hover {
  color: #fff;
  transform: translateX(-2px);
}

.modern-breadcrumb i {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
}

/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

.badge-icon {
  font-size: 20px;
  color: #fff;
}

.hero-badge span {
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
}

/* Hero Title */
.gallery-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

.gradient-text-light {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-hero-subtitle {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Wave Bottom */
.hero-wave-bottom {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.hero-wave-bottom svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* ========================================
   Gallery Section
   ======================================== */
.kids-gallery-section {
  background: #fff9f0;
  padding: 60px 0 100px;
  position: relative;
  overflow: hidden;
}

/* ========================================
   Floating Decorations
   ======================================== */
.floating-deco {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
  font-size: 40px;
}

.deco-star1 {
  top: 5%;
  left: 3%;
  color: #6c5ce7;
  font-size: 36px;
  animation: spinSlow 10s linear infinite;
}

.deco-star2 {
  top: 40%;
  right: 2%;
  color: #ffb800;
  font-size: 28px;
  animation: spinSlow 14s linear infinite reverse;
}

.deco-star3 {
  bottom: 15%;
  left: 5%;
  color: #e91e8c;
  font-size: 32px;
  animation: spinSlow 8s linear infinite;
}

.deco-butterfly1 {
  top: 12%;
  right: 6%;
  font-size: 34px;
  animation: flutter 5s ease-in-out infinite;
}

.deco-butterfly2 {
  bottom: 25%;
  left: 4%;
  font-size: 28px;
  animation: flutter 7s ease-in-out infinite reverse;
}

.deco-balloon1 {
  top: 25%;
  left: 2%;
  font-size: 42px;
  animation: floatUp 8s ease-in-out infinite;
}

.deco-balloon2 {
  bottom: 10%;
  right: 4%;
  font-size: 36px;
  animation: floatUp 6s ease-in-out infinite 2s;
}

.deco-cloud1 {
  top: 8%;
  left: 15%;
  font-size: 50px;
  color: #6c5ce7;
  animation: driftRight 12s ease-in-out infinite;
}

.deco-cloud2 {
  bottom: 20%;
  right: 10%;
  font-size: 44px;
  animation: driftRight 15s ease-in-out infinite reverse;
}

/* ========================================
   Filter Buttons - Colorful Pills
   ======================================== */
.kids-filter-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
  position: relative;
  z-index: 5;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border: 3px solid #6c5ce7;
  background: #fff;
  color: #6c5ce7;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 5;
}

.filter-pill i {
  font-size: 16px;
  pointer-events: none;
}

.filter-pill:hover {
  box-shadow: 0 8px 25px rgba(108, 92, 231, 0.3);
}

.filter-pill.active {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff;
  border-color: #6c5ce7;
  box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}

.filter-pill.pill-green {
  border-color: #00b894;
  color: #00b894;
}

.filter-pill.pill-green:hover {
  box-shadow: 0 8px 25px rgba(0, 184, 148, 0.3);
}

.filter-pill.pill-green.active {
  background: linear-gradient(135deg, #00b894, #55efc4);
  color: #fff;
  border-color: #00b894;
  box-shadow: 0 6px 20px rgba(0, 184, 148, 0.4);
}

.filter-pill.pill-pink {
  border-color: #fd79a8;
  color: #e91e8c;
}

.filter-pill.pill-pink:hover {
  box-shadow: 0 8px 25px rgba(253, 121, 168, 0.3);
}

.filter-pill.pill-pink.active {
  background: linear-gradient(135deg, #e91e8c, #fd79a8);
  color: #fff;
  border-color: #e91e8c;
  box-shadow: 0 6px 20px rgba(233, 30, 140, 0.4);
}

.filter-pill.pill-yellow {
  border-color: #ffb800;
  color: #e6a600;
}

.filter-pill.pill-yellow:hover {
  box-shadow: 0 8px 25px rgba(255, 184, 0, 0.3);
}

.filter-pill.pill-yellow.active {
  background: linear-gradient(135deg, #ffb800, #ffd166);
  color: #fff;
  border-color: #ffb800;
  box-shadow: 0 6px 20px rgba(255, 184, 0, 0.4);
}

/* ========================================
   Photo Frames - Corkboard Style
   ======================================== */
.photo-frame {
  background: #fff;
  border-radius: 12px;
  padding: 12px 12px 8px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
}

/* Color rotation via nth-child — purple, pink, green, yellow */
.filter-item:nth-child(4n + 1) .photo-frame {
  border: 4px solid #6c5ce7;
  transform: rotate(-2deg);
}

.filter-item:nth-child(4n + 2) .photo-frame {
  border: 4px solid #fd79a8;
  transform: rotate(1deg);
}

.filter-item:nth-child(4n + 3) .photo-frame {
  border: 4px solid #00b894;
  transform: rotate(-1deg);
}

.filter-item:nth-child(4n + 4) .photo-frame {
  border: 4px solid #ffb800;
  transform: rotate(2deg);
}

/* Hover: straighten, scale, bouncy shadow */
.photo-frame:hover {
  transform: rotate(0deg) scale(1.05) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  z-index: 10;
}

/* Tape / Pin decoration at top */
.tape-deco {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 20px;
  border-radius: 3px;
  z-index: 2;
  opacity: 0.85;
}

.filter-item:nth-child(4n + 1) .tape-deco {
  background: linear-gradient(135deg, #a29bfe, #6c5ce7);
}

.filter-item:nth-child(4n + 2) .tape-deco {
  background: linear-gradient(135deg, #fd79a8, #e91e8c);
}

.filter-item:nth-child(4n + 3) .tape-deco {
  background: linear-gradient(135deg, #55efc4, #00b894);
}

.filter-item:nth-child(4n + 4) .tape-deco {
  background: linear-gradient(135deg, #ffd166, #ffb800);
}

/* Frame inner — image container */
.frame-inner {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.frame-inner img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.photo-frame:hover .frame-inner img {
  transform: scale(1.08);
}

/* Overlay on hover */
.frame-overlay {
  position: absolute;
  inset: 0;
  background: rgba(108, 92, 231, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-decoration: none;
}

.frame-overlay i {
  color: #fff;
  font-size: 28px;
  background: rgba(255, 255, 255, 0.25);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transform: scale(0.7);
  transition: transform 0.3s ease;
}

.photo-frame:hover .frame-overlay {
  opacity: 1;
}

.photo-frame:hover .frame-overlay i {
  transform: scale(1);
}

/* Overlay color matches frame border */
.filter-item:nth-child(4n + 2) .frame-overlay {
  background: rgba(233, 30, 140, 0.4);
}

.filter-item:nth-child(4n + 3) .frame-overlay {
  background: rgba(0, 184, 148, 0.4);
}

.filter-item:nth-child(4n + 4) .frame-overlay {
  background: rgba(255, 184, 0, 0.4);
}

/* Frame label */
.frame-label {
  text-align: center;
  padding: 8px 4px 4px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
}

.filter-item:nth-child(4n + 1) .frame-label {
  color: #6c5ce7;
}

.filter-item:nth-child(4n + 2) .frame-label {
  color: #e91e8c;
}

.filter-item:nth-child(4n + 3) .frame-label {
  color: #00b894;
}

.filter-item:nth-child(4n + 4) .frame-label {
  color: #e6a600;
}

/* ========================================
   Animations
   ======================================== */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes floatUp {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes spinSlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes flutter {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(8px, -12px) rotate(10deg);
  }
  50% {
    transform: translate(0, -6px) rotate(-5deg);
  }
  75% {
    transform: translate(-8px, -14px) rotate(8deg);
  }
}

@keyframes driftRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
}

/* ========================================
   Responsive
   ======================================== */
@media (max-width: 991px) {
  .gallery-hero-bg {
    padding: 100px 0 60px;
  }

  .gallery-hero-title {
    font-size: 42px;
  }

  .gallery-hero-subtitle {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 60px;
  }

  .frame-inner img {
    height: 200px;
  }
}

@media (max-width: 767px) {
  .gallery-hero-bg {
    padding: 80px 0 50px;
  }

  .gallery-hero-title {
    font-size: 36px;
  }

  .gallery-hero-subtitle {
    font-size: 16px;
    padding: 0 15px;
  }

  .modern-breadcrumb {
    padding: 8px 20px;
    gap: 10px;
    font-size: 14px;
  }

  .hero-badge {
    padding: 10px 24px;
    font-size: 14px;
  }

  .badge-icon {
    font-size: 18px;
  }

  .hero-wave-bottom svg {
    height: 50px;
  }

  .kids-gallery-section {
    padding: 40px 0 70px;
  }

  .filter-pill {
    padding: 10px 20px;
    font-size: 13px;
  }

  .frame-inner img {
    height: 180px;
  }

  /* Reduce tilt on mobile for cleaner look */
  .filter-item:nth-child(4n + 1) .photo-frame {
    transform: rotate(-1deg);
  }
  .filter-item:nth-child(4n + 2) .photo-frame {
    transform: rotate(0.5deg);
  }
  .filter-item:nth-child(4n + 3) .photo-frame {
    transform: rotate(-0.5deg);
  }
  .filter-item:nth-child(4n + 4) .photo-frame {
    transform: rotate(1deg);
  }

  .floating-deco {
    display: none;
  }
}

@media (max-width: 575px) {
  .gallery-hero-bg {
    padding: 70px 0 40px;
  }

  .gallery-hero-title {
    font-size: 32px;
  }

  .gallery-hero-subtitle {
    font-size: 15px;
  }

  .hero-wave-bottom svg {
    height: 40px;
  }

  .kids-filter-menu {
    gap: 8px;
    margin-bottom: 30px;
  }

  .filter-pill {
    padding: 8px 16px;
    font-size: 12px;
    gap: 6px;
  }

  .frame-inner img {
    height: 200px;
  }

  .hero-deco {
    display: none;
  }
}
</style>

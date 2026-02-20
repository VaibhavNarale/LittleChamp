<script setup>
import authLogo from '@/assets/auth-logo.png'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  features: {
    type: Array,
    default: () => [],
  },
  hideStats: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="col-lg-6 d-none d-lg-flex auth-branding">
    <!-- Background Video -->
    <video class="auth-video-bg" autoplay muted loop playsinline>
      <source src="/assets/video/auth-bg.mp4" type="video/mp4" />
    </video>
    <div class="auth-video-overlay"></div>

    <div class="auth-logo-top">
      <img :src="authLogo" alt="Mind Growup Jr" class="auth-logo" />
    </div>

    <div class="branding-content">
      <h1 class="display-4 text-white fw-bold mb-3">
        {{ title }}
      </h1>

      <p v-if="description" class="lead text-white opacity-90 mb-5">
        {{ description }}
      </p>

      <!-- Stats Grid (default when no features provided) -->
      <div v-if="features.length === 0 && !hideStats" class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">Indian</div>
          <div class="stat-label">Kids Learning</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Games</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100+</div>
          <div class="stat-label">Teachers</div>
        </div>
      </div>

      <!-- Custom Features -->
      <div v-else class="security-features">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item"
        >
          <i :class="feature.icon"></i>
          <div>
            <strong>{{ feature.title }}</strong>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Auth Branding */
.auth-branding {
  background: #1b1464;
  position: relative;
  overflow: hidden;
  padding: 60px;
  align-items: center;
  justify-content: center;
}

/* Background Video */
.auth-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.auth-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(74, 139, 63, 0.45) 0%,
    rgba(27, 20, 100, 0.4) 100%
  );
  z-index: 2;
}

.branding-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.auth-logo-top {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  text-align: center;
}

.auth-logo {
  max-width: 200px;
  height: auto;
  display: block;
  image-rendering: -webkit-optimize-contrast;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

/* Security Features */
.security-features {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: white;
}

.feature-item i {
  font-size: 28px;
  color: #ffe5b4;
  flex-shrink: 0;
  margin-top: 5px;
}

.feature-item strong {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.feature-item p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

/* Floating shapes removed — replaced by video background */
</style>

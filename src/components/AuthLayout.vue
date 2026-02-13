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
})
</script>

<template>
  <div class="col-lg-6 d-none d-lg-flex auth-branding">
    <!-- Floating Shapes (moved outside branding-content to cover entire left side) -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="branding-content">
      <h1 class="display-4 text-white fw-bold mb-3">
        {{ title }}
      </h1>
      <img :src="authLogo" alt="Mind Growup Jr" class="auth-logo mb-4" />

      <p v-if="description" class="lead text-white opacity-90 mb-5">
        {{ description }}
      </p>

      <!-- Stats Grid (default when no features provided) -->
      <div v-if="features.length === 0" class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">50M+</div>
          <div class="stat-label">Kids Learning</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4000+</div>
          <div class="stat-label">Games</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100K+</div>
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
  background: linear-gradient(135deg, #5ea750 0%, #7bc46a 100%);
  position: relative;
  overflow: hidden;
  padding: 60px;
  align-items: center;
  justify-content: center;
}

.branding-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
}

.auth-logo {
  max-width: 240px;
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

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 20%;
  animation-delay: 10s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}
</style>

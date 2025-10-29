<script setup>
import tigerImage from '@/assets/tiger.png'

defineProps({
  variant: {
    type: String,
    default: 'default', // 'default' or 'white'
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
  }
})

const sizeClasses = {
  small: 'logo-small',
  medium: 'logo-medium',
  large: 'logo-large'
}
</script>

<template>
  <div class="mind-jr-logo" :class="[sizeClasses[size], `logo-${variant}`]">
    <div class="logo-mascot">
      <img :src="tigerImage" alt="Mind Jr Group Tiger Mascot" class="mascot-image">
    </div>
    <div class="logo-text">
      <div class="brand-name">
        <span class="mind">Mind</span>
        <span class="jr">Jr</span>
      </div>
      <div class="brand-tagline">Group</div>
    </div>
  </div>
</template>

<style scoped>
.mind-jr-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.mind-jr-logo:hover {
  transform: scale(1.05);
}

/* Mascot Styling */
.logo-mascot {
  position: relative;
  flex-shrink: 0;
  min-width: 86px;
  min-height: 86px;
}

.mascot-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

/* Text Styling */
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.brand-name .mind {
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-name .jr {
  background: linear-gradient(135deg, #FF6584, #FD79A8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-tagline {
  font-weight: 600;
  margin-top: -2px;
  letter-spacing: 0.5px;
}

/* Default Variant (for light backgrounds) */
.logo-default .brand-tagline {
  color: #2D3436;
}

/* White Variant (for dark backgrounds) */
.logo-white .brand-name .mind,
.logo-white .brand-name .jr {
  -webkit-text-fill-color: white !important;
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
}

.logo-white .brand-tagline {
  color: white;
}

/* Size Variations */
.logo-small .logo-mascot {
  width: 86px;
  height: 86px;
}

.logo-small .brand-name {
  font-size: 28px;
}

.logo-small .brand-tagline {
  font-size: 26px;
}

.logo-medium .logo-mascot {
  width: 86px;
  height: 86px;
}

.logo-medium .brand-name {
  font-size: 41px;
}

.logo-medium .brand-tagline {
  font-size: 26px;
}

.logo-large .logo-mascot {
  width: 100px;
  height: 100px;
}

.logo-large .brand-name {
  font-size: 38px;
}

.logo-large .brand-tagline {
  font-size: 26px;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-medium .logo-mascot {
    width: 86px;
    height: 86px;
  }
}
</style>

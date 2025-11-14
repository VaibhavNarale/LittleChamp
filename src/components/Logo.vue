<script setup>
import newLogo from '@/assets/new-logo.png'

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
    <div class="logo-container">
      <img :src="newLogo" alt="Mind Growup Jr Logo" class="logo-image">
    </div>
  </div>
</template>

<style scoped>
.mind-jr-logo {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.mind-jr-logo:hover {
  transform: scale(1.05);
}

/* Logo Container */
.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Size Variations */
.logo-small .logo-container {
  height: 200px;
  width: auto;
}

.logo-medium .logo-container {
  height: 260px;
  width: auto;
}

.logo-large .logo-container {
  height: 320px;
  width: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-medium .logo-container {
    height: 200px;
  }

  .logo-large .logo-container {
    height: 240px;
  }
}

@media (max-width: 480px) {
  .logo-small .logo-container {
    height: 150px;
  }

  .logo-medium .logo-container {
    height: 170px;
  }

  .logo-large .logo-container {
    height: 200px;
  }
}
</style>

<script setup>
import logoUrl from '@/assets/little-champ-logo.png'

// Props kept for API compatibility with existing callers.
// The logo image is full-colour and reads on both light and dark
// backgrounds, so `variant` no longer changes the artwork.
defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
  },
})

const sizeClasses = {
  small: 'logo-small',
  medium: 'logo-medium',
  large: 'logo-large',
}
</script>

<template>
  <img
    :src="logoUrl"
    class="kg-logo"
    :class="sizeClasses[size]"
    alt="Little Champ"
    decoding="async"
  />
</template>

<style scoped>
.kg-logo {
  display: inline-block;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;
  vertical-align: middle;
}

.kg-logo:hover {
  transform: scale(1.04);
}

/* Height drives the lockup; width follows the ~2.2:1 aspect ratio. */
.logo-small {
  height: 50px;
}
.logo-medium {
  height: 74px;
}
.logo-large {
  height: 84px;
}

/* Responsive */
@media (max-width: 768px) {
  .logo-medium {
    height: 62px;
  }
  .logo-large {
    height: 66px;
  }
}

@media (max-width: 480px) {
  .logo-small {
    height: 44px;
  }
  .logo-medium {
    height: 54px;
  }
  .logo-large {
    height: 56px;
  }
}
</style>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

onMounted(() => {
  const { success, token, user, permissions, error } = route.query

  if (success === 'true' && token) {
    try {
      // Decode user data and permissions
      const userData = JSON.parse(atob(user))
      const permissionsData = JSON.parse(atob(permissions))

      // Update Pinia store (automatically persists to localStorage)
      authStore.setToken(token)
      authStore.setUser(userData)
      authStore.setPermissions(permissionsData)

      // Show success notification
      console.log('Successfully logged in with social auth')

      // Redirect to home page
      setTimeout(() => {
        router.push('/')
      }, 1000)
    } catch (err) {
      console.error('Error processing auth callback:', err)
      // Redirect to login with error
      router.push('/login?error=auth_failed')
    }
  } else {
    // Handle error case
    console.error('OAuth error:', error)
    router.push(
      '/login?error=' + encodeURIComponent(error || 'authentication_failed')
    )
  }
})
</script>

<template>
  <div class="auth-callback-container">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>{{ $t('authCallback.completing') }}</p>
    </div>
  </div>
</template>

<style scoped>
.auth-callback-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.loading-spinner {
  text-align: center;
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner p {
  font-size: 18px;
  font-weight: 500;
}
</style>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SideMenu from './components/SideMenu.vue'
import MobileMenuNew from './components/MobileMenuNew.vue'
import Preloader from './components/Preloader.vue'
import ChatWidget from './components/ChatWidget.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const showPreloader = ref(true)
const showSideMenu = ref(false)
const showMobileMenu = ref(false)

// Hide header/footer on auth pages (login, register, forgot-password)
const hideNavigation = computed(() => {
  return (
    route.path === '/login' ||
    route.path === '/register' ||
    route.path === '/forgot-password' ||
    route.path === '/auth/callback'
  )
})

// Add/remove auth-page class to body tag
watch(
  hideNavigation,
  (isAuthPage) => {
    if (isAuthPage) {
      document.body.classList.add('auth-page')
    } else {
      document.body.classList.remove('auth-page')
    }
  },
  { immediate: true }
)

onMounted(async () => {
  // Verify user session on page load/reload
  // If user has a token, validate it with the backend
  // This will automatically log out users who have been deleted from the database
  if (authStore.token) {
    const previousAuthState = authStore.authenticated
    await authStore.attempt(authStore.token)

    // If user was authenticated but now isn't (deleted from database)
    // and not on auth pages, redirect to login
    if (
      previousAuthState &&
      !authStore.authenticated &&
      !hideNavigation.value
    ) {
      router.push('/login?error=session_expired')
    }
  }

  // Hide preloader after a short delay
  setTimeout(() => {
    showPreloader.value = false
  }, 1000)
})

const toggleSideMenu = () => {
  showSideMenu.value = !showSideMenu.value
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<template>
  <div id="app" :class="{ 'auth-page': hideNavigation }">
    <Preloader :loading="showPreloader" @close="showPreloader = false" />

    <div class="popup-search-box d-none d-lg-block">
      <button class="searchClose border-theme text-theme">
        <i class="fal fa-times"></i>
      </button>
      <form action="#">
        <input
          type="text"
          class="border-theme"
          placeholder="What are you looking for"
        />
        <button type="submit"><i class="fal fa-search"></i></button>
      </form>
    </div>

    <template v-if="!hideNavigation">
      <SideMenu :show="showSideMenu" @close="showSideMenu = false" />
      <MobileMenuNew :show="showMobileMenu" @close="showMobileMenu = false" />
      <Header
        @toggle-side-menu="toggleSideMenu"
        @toggle-mobile-menu="toggleMobileMenu"
      />
    </template>

    <router-view />

    <Footer v-if="!hideNavigation" />

    <!-- Scroll To Top -->
    <a v-if="!hideNavigation" href="#" class="scrollToTop scroll-btn"
      ><i class="far fa-arrow-up"></i
    ></a>

    <!-- AI Chat Widget (hidden on auth pages) -->
    <ChatWidget v-if="!hideNavigation" />
  </div>
</template>

<style>
/* Import demo CSS files */
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Remove body padding-top on auth pages (login, register, forgot-password) */
body.auth-page {
  padding-top: 0 !important;
}

/* Ensure auth pages take full viewport */
body.auth-page .login-page,
body.auth-page .register-page,
body.auth-page .forgot-password-page {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Lift the scroll-to-top button above the AI chat launcher so they don't overlap */
.scrollToTop.show {
  bottom: 100px !important;
}
@media (max-width: 480px) {
  .scrollToTop.show {
    bottom: 88px !important;
  }
}
</style>

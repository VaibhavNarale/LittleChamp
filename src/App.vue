<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SideMenu from './components/SideMenu.vue'
import MobileMenuNew from './components/MobileMenuNew.vue'
import Preloader from './components/Preloader.vue'

const showPreloader = ref(true)
const showSideMenu = ref(false)
const showMobileMenu = ref(false)

onMounted(() => {
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
  <div id="app">
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

    <SideMenu :show="showSideMenu" @close="showSideMenu = false" />
    <MobileMenuNew :show="showMobileMenu" @close="showMobileMenu = false" />
    <Header
      @toggle-side-menu="toggleSideMenu"
      @toggle-mobile-menu="toggleMobileMenu"
    />

    <router-view />

    <Footer />

    <!-- Scroll To Top -->
    <a href="#" class="scrollToTop scroll-btn"
      ><i class="far fa-arrow-up"></i
    ></a>
  </div>
</template>

<style>
/* Import demo CSS files */
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>

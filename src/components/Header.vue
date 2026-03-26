<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Logo from './Logo.vue'

const authStore = useAuthStore()
const showSearch = ref(false)
const searchQuery = ref('')
const showUserMenu = ref(false)

// Admin Client URL for sign up/login links
const adminClientUrl =
  import.meta.env.VITE_ADMIN_CLIENT_URL || 'http://localhost:5174'

defineEmits(['toggle-mobile-menu', 'toggle-side-menu'])

const isLoggedIn = computed(() => authStore.authenticated)
const userName = computed(() => {
  if (!authStore.user || !authStore.user.first_name) return 'User'
  return `${authStore.user.first_name} ${authStore.user.last_name || ''}`
})
const userInitials = computed(() => {
  if (!authStore.user || !authStore.user.first_name) return 'U'
  const first = authStore.user.first_name?.charAt(0) || ''
  const last = authStore.user.last_name?.charAt(0) || ''
  return `${first}${last}`.toUpperCase()
})

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const handleSearch = () => {
  console.log('Search for:', searchQuery.value)
  // Implement search functionality
}

const goToDashboard = () => {
  // Pass token in URL so admin panel can authenticate without re-login
  const token = authStore.token
  if (token) {
    window.location.href = `${adminClientUrl}?token=${encodeURIComponent(token)}`
  } else {
    window.location.href = adminClientUrl
  }
}

const handleLogout = async () => {
  await authStore.logOut()
  showUserMenu.value = false
  window.location.href = '/'
}
</script>

<template>
  <div>
    <!-- Header -->
    <header class="vs-header">
      <!-- Header Top Area - Commented out to reduce page height -->
      <!-- <div class="header-top-area d-none d-lg-block">
        <v-container>
          <v-row align="center" justify="space-between">
            <v-col cols="auto">
              <div class="header-links">
                <ul>
                  <li><i class="fal fa-envelope"></i><a href="mailto:support@mindjrgroup.com">support@mindjrgroup.com</a></li>
                  <li><i class="fal fa-phone"></i><a href="tel:+18005551234">+1 (800) 555-1234</a></li>
                  <li><i class="fal fa-users"></i>Trusted by Indian Kids Worldwide</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="auto">
              <div class="header-social">
                <ul>
                  <li><a href="https://facebook.com/mindjrgroup" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/mindjrgroup" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/mindjrgroup" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://linkedin.com/company/mindjrgroup" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://youtube.com/@mindjrgroup" target="_blank" rel="noopener"><i class="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div> -->

      <!-- Main Menu Area -->
      <div class="sticky-wrapper">
        <div class="sticky-active">
          <div class="header-menu-area">
            <v-container class="position-relative pa-0">
              <v-row
                class="gx-20 align-center justify-space-between flex-nowrap"
              >
                <v-col cols="auto" class="flex-shrink-0">
                  <div class="header-logo">
                    <router-link to="/">
                      <Logo size="medium" variant="default" />
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="auto" class="flex-grow-1 d-flex justify-end">
                  <nav class="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <router-link to="/">Home</router-link>
                      </li>
                      <li class="menu-item-has-children">
                        <router-link to="/subjects">Subjects</router-link>
                        <ul class="sub-menu">
                          <li>
                            <router-link to="/subjects"
                              >All Subjects</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/subjects/math"
                              >Mathematics</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/subjects/reading"
                              >Your AI-Buddy</router-link
                            >
                          </li>
                          <!-- <li><router-link to="/subjects/science">Science</router-link></li> -->
                          <li>
                            <router-link to="/subjects/craft-drawing"
                              >Craft &amp; Drawing</router-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <router-link to="/features">Features</router-link>
                      </li>
                      <li>
                        <router-link to="/pricing">Pricing</router-link>
                      </li>
                      <li class="menu-item-has-children">
                        <a href="#">For You</a>
                        <ul class="sub-menu">
                          <li>
                            <router-link to="/for-parents"
                              >For Parents</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/for-teachers"
                              >For Teachers</router-link
                            >
                          </li>
                          <li>
                            <router-link to="/for-schools"
                              >For Schools</router-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <router-link to="/blog">Blog</router-link>
                      </li>
                      <li>
                        <router-link to="/about">About</router-link>
                      </li>
                      <li>
                        <router-link to="/gallery">Gallery</router-link>
                      </li>
                      <li>
                        <router-link to="/contact">Contact</router-link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    class="vs-menu-toggle d-block d-lg-none"
                    @click="$emit('toggle-mobile-menu')"
                  >
                    <i class="far fa-bars"></i> Menu
                  </button>
                </v-col>
                <v-col cols="auto" class="d-none d-lg-block flex-shrink-0">
                  <div class="header-button d-flex align-items-center gap-2">
                    <!-- Show when NOT logged in -->
                    <template v-if="!isLoggedIn">
                      <router-link to="/login" class="btn-login">
                        <i class="fas fa-sign-in-alt"></i>
                        <span class="btn-text">Login</span>
                      </router-link>
                      <router-link to="/register" class="btn-signup">
                        <i class="fas fa-rocket"></i>
                        <span class="btn-text">Book Free AI Strategy Call</span>
                      </router-link>
                    </template>

                    <!-- Show when logged in -->
                    <template v-else>
                      <button
                        type="button"
                        class="btn-dashboard"
                        @click="goToDashboard"
                      >
                        <i class="fas fa-th-large"></i>
                        <span class="btn-text">Dashboard</span>
                      </button>
                      <div class="user-dropdown">
                        <button
                          type="button"
                          class="user-btn"
                          @click="showUserMenu = !showUserMenu"
                        >
                          <div class="user-avatar">{{ userInitials }}</div>
                          <span class="user-name">{{ userName }}</span>
                          <i class="fas fa-chevron-down"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          :class="{ show: showUserMenu }"
                        >
                          <button class="dropdown-item" @click="goToDashboard">
                            <i class="fas fa-th-large"></i>
                            <span>Dashboard</span>
                          </button>
                          <button
                            class="dropdown-item logout"
                            @click="handleLogout"
                          >
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </template>

                    <button
                      type="button"
                      class="icon-btn-modern"
                      @click="toggleSearch"
                    >
                      <i class="far fa-search"></i>
                    </button>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </header>

    <!-- Search Box -->
    <div
      class="popup-search-box d-none d-lg-block"
      :class="{ show: showSearch }"
    >
      <button class="searchClose border-theme text-theme" @click="toggleSearch">
        <i class="fal fa-times"></i>
      </button>
      <form @submit.prevent="handleSearch">
        <input
          v-model="searchQuery"
          type="text"
          class="border-theme"
          placeholder="What are you looking for"
        />
        <button type="submit"><i class="fal fa-search"></i></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.popup-search-box.show {
  display: block !important;
}

/* Modern Button Styles */
.btn-login {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #4a8b3f;
  color: #4a8b3f;
  background: white;
}

.btn-login:hover {
  background: #4a8b3f;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(74, 139, 63, 0.3);
}

.btn-signup {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(74, 139, 63, 0.3);
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.4);
  background: linear-gradient(135deg, #3a7032, #4a8b3f);
}

.btn-signup i {
  animation: rocket 2s ease-in-out infinite;
}

@keyframes rocket {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Dashboard Button */
.btn-dashboard {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #4a8b3f;
  color: #4a8b3f;
  background: white;
  cursor: pointer;
}

.btn-dashboard:hover {
  background: #4a8b3f;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(74, 139, 63, 0.3);
}

/* User Dropdown */
.user-dropdown {
  position: relative;
}

.user-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px 6px 6px;
  border-radius: 50px;
  border: 2px solid #e0e0e0;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-btn:hover {
  border-color: #e91e8c;
  box-shadow: 0 4px 15px rgba(233, 30, 140, 0.2);
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.user-name {
  font-weight: 600;
  font-size: 14px;
  color: #2d3436;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-btn i {
  font-size: 12px;
  color: #636e72;
  transition: transform 0.3s;
}

.user-dropdown .dropdown-menu.show + .user-btn i {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  border-radius: 8px;
  color: #2d3436;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.dropdown-item:hover {
  background: #f7f8fa;
  color: #e91e8c;
}

.dropdown-item.logout:hover {
  background: #fee;
  color: #c00;
}

.dropdown-item i {
  width: 18px;
  font-size: 16px;
}

.icon-btn-modern {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: none;
  background: #f7f8fa;
  color: #2d3436;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-btn-modern:hover {
  background: #4a8b3f;
  color: white;
  transform: translateY(-2px);
}

.vs-menu-toggle {
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(74, 139, 63, 0.3);
  font-size: 15px;
  white-space: nowrap;
}

.vs-menu-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 139, 63, 0.4);
}

.vs-menu-toggle i {
  font-size: 18px;
  flex-shrink: 0;
}
</style>

<style>
/* Global Header Fixed Styles (non-scoped) */
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
}

.vs-header {
  position: relative;
  z-index: 999;
}

.vs-header .sticky-wrapper {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 9999 !important;
  background: white !important;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease;
  overflow: visible;
  height: 85px;
}

.vs-header .sticky-active {
  position: relative;
  z-index: 9999;
  height: 85px;
  overflow: visible;
  background: white;
}

.vs-header .sticky-active.active {
  background: white !important;
}

.vs-header .header-menu-area {
  background: white;
  padding: 8px 0 !important;
  overflow: visible;
  height: 85px;
  display: flex;
  align-items: center;
}

.vs-header .header-menu-area .v-container {
  overflow: visible;
  max-width: 100% !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  margin: 0 auto;
}

.vs-header .header-menu-area .v-row {
  flex-wrap: nowrap !important;
  gap: 10px;
  max-width: 100%;
  align-items: center !important;
  height: 100%;
}

.vs-header .header-menu-area .v-col {
  flex-shrink: 0;
  display: flex;
}

.vs-header .header-menu-area .v-col.flex-grow-1 {
  flex-shrink: 1;
  min-width: 0;
  overflow: visible;
}

.vs-header .header-logo {
  padding: 2px 0;
  transform: scale(0.92);
  transform-origin: left center;
  flex-shrink: 0;
  margin-left: -50px;
}

/* Nav menu spacing */
.vs-header .main-menu {
  overflow: visible;
  height: 100%;
  display: flex;
  align-items: center;
}

.vs-header .main-menu > ul {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

.vs-header .main-menu > ul > li {
  margin: 0 13px !important;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  position: relative;
}

.vs-header .main-menu > ul > li > a {
  padding: 8px 0 !important;
  line-height: 1.2 !important;
  position: relative;
  transition: color 0.3s ease;
  font-size: 15px !important;
  white-space: nowrap;
  display: inline-block;
}

/* Modern hover effect with underline */
.vs-header .main-menu > ul > li > a::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(135deg, #e91e8c, #f04da3);
  transition: width 0.3s ease;
  border-radius: 2px;
  margin-top: 2px;
}

.vs-header .main-menu > ul > li > a:hover {
  color: #e91e8c !important;
  background: transparent !important;
}

.vs-header .main-menu > ul > li > a:hover::after {
  width: 100%;
}

/* Active menu item */
.vs-header .main-menu > ul > li.active > a,
.vs-header .main-menu > ul > li > a.router-link-active {
  color: #e91e8c !important;
  background: transparent !important;
}

.vs-header .main-menu > ul > li.active > a::after,
.vs-header .main-menu > ul > li > a.router-link-active::after {
  width: 100%;
}

/* Dropdown menu hover */
.vs-header .main-menu > ul > li.menu-item-has-children:hover > a {
  color: #e91e8c !important;
  background: transparent !important;
}

/* Submenu styling */
.vs-header .main-menu .sub-menu {
  border-radius: 12px !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  outline: none !important;
  padding: 10px !important;
  margin-top: 0px !important;
  top: 100% !important;
  left: 0 !important;
  background: white !important;
  z-index: 100000 !important;
  position: absolute !important;
  min-width: 200px !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transform: translateY(-10px) !important;
  transition: all 0.3s ease !important;
  list-style-type: none !important;
  list-style: none !important;
  pointer-events: none !important;
}

.vs-header .main-menu > ul > li.menu-item-has-children {
  position: relative !important;
  display: block !important;
}

.vs-header .main-menu > ul > li.menu-item-has-children > a {
  display: block !important;
}

.vs-header .main-menu > ul > li.menu-item-has-children:hover > .sub-menu,
.vs-header .main-menu > ul > li.menu-item-has-children > .sub-menu:hover {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) !important;
  pointer-events: auto !important;
}

.vs-header .main-menu .sub-menu li {
  padding: 0 !important;
  margin: 0 !important;
  list-style-type: none !important;
  list-style: none !important;
  position: relative !important;
}

.vs-header .main-menu .sub-menu li::before,
.vs-header .main-menu .sub-menu li::after {
  display: none !important;
  content: none !important;
}

.vs-header .main-menu .sub-menu li a {
  padding: 10px 16px !important;
  transition: all 0.3s ease !important;
  border-radius: 8px !important;
  display: block !important;
  color: #2d3436 !important;
  background: transparent !important;
  font-size: 14px !important;
  white-space: nowrap !important;
  text-decoration: none !important;
  position: relative !important;
}

.vs-header .main-menu .sub-menu li a::before,
.vs-header .main-menu .sub-menu li a::after {
  display: none !important;
  content: none !important;
}

.vs-header .main-menu .sub-menu li a:hover {
  background: linear-gradient(
    135deg,
    rgba(233, 30, 140, 0.08),
    rgba(240, 77, 163, 0.08)
  ) !important;
  color: #e91e8c !important;
  padding-left: 20px !important;
}

.vs-header .main-menu .sub-menu li:first-child a {
  border-radius: 8px !important;
}

.vs-header .main-menu .sub-menu li:last-child a {
  border-radius: 8px !important;
}

/* Button sizes */
.vs-header .header-button {
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.vs-header .btn-login,
.vs-header .btn-signup,
.vs-header .btn-dashboard {
  padding: 8px 16px !important;
  font-size: 13px !important;
  line-height: 1.2 !important;
  flex-shrink: 0;
}

.vs-header .icon-btn-modern {
  width: 36px !important;
  height: 36px !important;
  flex-shrink: 0;
}

.vs-header .user-btn {
  font-size: 13px !important;
  line-height: 1.2 !important;
  flex-shrink: 0;
}

.vs-header .user-avatar {
  width: 32px !important;
  height: 32px !important;
  font-size: 12px !important;
  flex-shrink: 0;
}

.vs-header .vs-menu-toggle {
  padding: 10px 20px !important;
}

/* Header bottom curved edge with CSS */
.vs-header .sticky-wrapper::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: white;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}

/* Add padding to body to prevent content from hiding under fixed header */
body {
  padding-top: 85px;
}

/* Desktop optimization for better single-line layout */
@media (min-width: 992px) and (max-width: 1399px) {
  .vs-header .main-menu > ul > li {
    margin: 0 9px !important;
  }

  .vs-header .main-menu > ul > li > a {
    font-size: 14px !important;
  }

  .vs-header .header-logo {
    transform: scale(1);
    margin-left: -52px;
  }

  .vs-header .btn-login,
  .vs-header .btn-signup,
  .vs-header .btn-dashboard {
    padding: 7px 14px !important;
    font-size: 12px !important;
  }

  .vs-header .header-button {
    gap: 6px !important;
  }

  .vs-header .icon-btn-modern {
    width: 34px !important;
    height: 34px !important;
  }
}

/* Large desktop - comfortable spacing */
@media (min-width: 1400px) {
  .vs-header .main-menu > ul > li {
    margin: 0 16px !important;
  }

  .vs-header .header-logo {
    transform: scale(1);
    margin-left: -45px;
  }

  .vs-header .btn-login,
  .vs-header .btn-signup,
  .vs-header .btn-dashboard {
    padding: 9px 18px !important;
  }
}

@media (max-width: 991px) {
  body {
    padding-top: 85px;
  }

  .vs-header .header-logo {
    transform: scale(1.2);
    margin-left: -60px;
  }

  .vs-header .sticky-wrapper,
  .vs-header .sticky-active,
  .vs-header .header-menu-area {
    height: 85px;
  }

  .vs-header .header-menu-area {
    padding: 8px 0 !important;
  }

  /* Reset flex layout for tablet/mobile */
  .vs-header .header-menu-area .v-row {
    flex-wrap: nowrap !important;
    justify-content: space-between !important;
    gap: 10px !important;
    align-items: center !important;
  }

  /* Logo takes minimal space */
  .vs-header .header-menu-area .v-col:first-child {
    flex: 0 0 auto !important;
  }

  /* Middle column (nav/menu button) takes remaining space and aligns right */
  .vs-header .header-menu-area .v-col:nth-child(2) {
    flex: 1 1 auto !important;
    display: flex !important;
    justify-content: flex-end !important;
  }

  /* Right column (buttons) is hidden on mobile/tablet */
  .vs-header .header-menu-area .v-col:last-child {
    display: none !important;
  }

  .vs-header .vs-menu-toggle {
    padding: 10px 18px !important;
    font-size: 14px !important;
  }
}

/* Tablet: Show compact icon-only auth buttons */
@media (min-width: 768px) and (max-width: 991px) {
  .vs-header .header-menu-area .v-col:last-child {
    display: flex !important;
  }

  .vs-header .header-button {
    gap: 6px !important;
  }

  .vs-header .btn-login .btn-text,
  .vs-header .btn-signup .btn-text,
  .vs-header .btn-dashboard .btn-text {
    display: none;
  }

  .vs-header .btn-login,
  .vs-header .btn-signup,
  .vs-header .btn-dashboard {
    padding: 10px 12px !important;
    min-width: 42px;
  }

  .vs-header .user-dropdown {
    display: flex;
  }

  .vs-header .user-name {
    display: none !important;
  }

  .vs-header .user-btn {
    padding: 6px !important;
  }

  .vs-header .user-btn i {
    display: none;
  }

  .vs-header .icon-btn-modern {
    width: 38px !important;
    height: 38px !important;
  }
}

@media (max-width: 767px) {
  body {
    padding-top: 90px;
  }

  .vs-header .header-logo {
    transform: scale(1);
    margin-left: -60px;
  }

  .vs-header .sticky-wrapper,
  .vs-header .sticky-active,
  .vs-header .header-menu-area {
    height: 90px;
  }

  .vs-header .header-menu-area {
    padding: 8px 0 !important;
  }

  .vs-header .vs-menu-toggle {
    padding: 8px 16px !important;
    font-size: 13px !important;
  }

  .vs-header .vs-menu-toggle i {
    font-size: 16px;
  }
}

@media (max-width: 575px) {
  body {
    padding-top: 85px;
  }
  .vs-header .header-menu-area .v-container {
    padding: 0px !important;
  }
  .vs-header .header-menu-area .v-col:nth-child(2) {
    padding-right: 0px !important;
  }

  .vs-header .header-logo {
    transform: scale(1.2);
    transform-origin: left center;
    margin-left: -39px;
  }

  .vs-header .sticky-wrapper,
  .vs-header .sticky-active,
  .vs-header .header-menu-area {
    height: 85px;
  }

  .vs-header .header-menu-area {
    padding: 6px 0 !important;
  }

  .vs-header .header-menu-area .v-row {
    gap: 8px !important;
  }

  .vs-header .vs-menu-toggle {
    padding: 6px 12px !important;
    font-size: 12px !important;
    white-space: nowrap;
    min-width: 0;
  }

  .vs-header .vs-menu-toggle i {
    font-size: 14px;
  }
}

/* Landscape mobile - Extra compact */
@media (max-width: 767px) and (orientation: landscape) {
  .vs-header .header-logo {
    transform: scale(1);
    margin-left: -60px;
  }

  .vs-header .sticky-wrapper,
  .vs-header .sticky-active,
  .vs-header .header-menu-area {
    height: 75px;
  }

  .vs-header .header-menu-area {
    padding: 5px 0 !important;
  }

  .vs-header .header-menu-area .v-row {
    gap: 6px !important;
  }

  .vs-header .vs-menu-toggle {
    padding: 6px 10px !important;
    font-size: 11px !important;
  }

  body {
    padding-top: 75px;
  }
}
</style>

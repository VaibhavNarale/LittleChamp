<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Logo from './Logo.vue'

const authStore = useAuthStore()
const showSearch = ref(false)
const searchQuery = ref('')
const showUserMenu = ref(false)

// Admin Client URL for sign up/login links
const adminClientUrl = import.meta.env.VITE_ADMIN_CLIENT_URL || 'http://localhost:5174'

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
                  <li><i class="fal fa-users"></i>Trusted by 50M+ Kids Worldwide</li>
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
              <v-row class="gx-20 align-center justify-space-between flex-nowrap">
                <v-col cols="auto" class="flex-shrink-0">
                  <div class="header-logo">
                    <router-link to="/">
                      <Logo size="medium" variant="default" />
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="auto" class="flex-grow-1 d-flex justify-center">
                  <nav class="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <router-link to="/">Home</router-link>
                      </li>
                      <li class="menu-item-has-children">
                        <router-link to="/subjects">Subjects</router-link>
                        <ul class="sub-menu">
                          <li><router-link to="/subjects">All Subjects</router-link></li>
                          <li><router-link to="/subjects/math">Mathematics</router-link></li>
                          <li><router-link to="/subjects/reading">Reading & ELA</router-link></li>
                          <li><router-link to="/subjects/science">Science</router-link></li>
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
                          <li><router-link to="/for-parents">For Parents</router-link></li>
                          <li><router-link to="/for-teachers">For Teachers</router-link></li>
                          <li><router-link to="/for-schools">For Schools</router-link></li>
                        </ul>
                      </li>
                      <li>
                        <router-link to="/blog">Blog</router-link>
                      </li>
                      <li>
                        <router-link to="/about">About</router-link>
                      </li>
                      <li>
                        <router-link to="/contact">Contact</router-link>
                      </li>
                    </ul>
                  </nav>
                  <button type="button" class="vs-menu-toggle d-block d-lg-none" @click="$emit('toggle-mobile-menu')">
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
                        <span class="btn-text">Start Free Trial</span>
                      </router-link>
                    </template>

                    <!-- Show when logged in -->
                    <template v-else>
                      <button type="button" class="btn-dashboard" @click="goToDashboard">
                        <i class="fas fa-th-large"></i>
                        <span class="btn-text">Dashboard</span>
                      </button>
                      <div class="user-dropdown">
                        <button type="button" class="user-btn" @click="showUserMenu = !showUserMenu">
                          <div class="user-avatar">{{ userInitials }}</div>
                          <span class="user-name">{{ userName }}</span>
                          <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu" :class="{ show: showUserMenu }">
                          <button @click="goToDashboard" class="dropdown-item">
                            <i class="fas fa-th-large"></i>
                            <span>Dashboard</span>
                          </button>
                          <button @click="handleLogout" class="dropdown-item logout">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </template>

                    <button type="button" class="icon-btn-modern" @click="toggleSearch">
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
    <div class="popup-search-box d-none d-lg-block" :class="{ 'show': showSearch }">
      <button class="searchClose border-theme text-theme" @click="toggleSearch">
        <i class="fal fa-times"></i>
      </button>
      <form @submit.prevent="handleSearch">
        <input type="text" class="border-theme" placeholder="What are you looking for" v-model="searchQuery">
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
  border: 2px solid #6C63FF;
  color: #6C63FF;
  background: white;
}

.btn-login:hover {
  background: #6C63FF;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(108, 99, 255, 0.3);
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
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
  background: linear-gradient(135deg, #5A52D5, #6C63FF);
}

.btn-signup i {
  animation: rocket 2s ease-in-out infinite;
}

@keyframes rocket {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
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
  border: 2px solid #6C63FF;
  color: #6C63FF;
  background: white;
  cursor: pointer;
}

.btn-dashboard:hover {
  background: #6C63FF;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(108, 99, 255, 0.3);
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
  border: 2px solid #E0E0E0;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-btn:hover {
  border-color: #6C63FF;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.2);
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
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
  color: #2D3436;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-btn i {
  font-size: 12px;
  color: #636E72;
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
  color: #2D3436;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.dropdown-item:hover {
  background: #F7F8FA;
  color: #6C63FF;
}

.dropdown-item.logout:hover {
  background: #FEE;
  color: #C00;
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
  background: #F7F8FA;
  color: #2D3436;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-btn-modern:hover {
  background: #6C63FF;
  color: white;
  transform: translateY(-2px);
}

.vs-menu-toggle {
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
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
  box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
  font-size: 15px;
  white-space: nowrap;
}

.vs-menu-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
}

.vs-menu-toggle i {
  font-size: 18px;
  flex-shrink: 0;
}
</style>

<style>
/* Global Header Fixed Styles (non-scoped) */
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
}

.vs-header .sticky-active {
  position: relative;
  z-index: 9999;
}

.vs-header .header-menu-area {
  background: white;
  padding: 10px 0 !important;
}

.vs-header .header-menu-area .v-row {
  flex-wrap: nowrap !important;
  gap: 15px;
}

.vs-header .header-menu-area .v-col {
  flex-shrink: 0;
}

.vs-header .header-menu-area .v-col.flex-grow-1 {
  flex-shrink: 1;
  min-width: 0;
}

.vs-header .header-logo {
  padding: 4px 0;
  transform: scale(0.75);
  transform-origin: left center;
}

/* Nav menu spacing */
.vs-header .main-menu > ul > li {
  margin: 0 10px !important;
}

.vs-header .main-menu > ul > li > a {
  padding: 10px 0 !important;
  line-height: 1.4 !important;
  position: relative;
  transition: color 0.3s ease;
}

/* Modern hover effect with underline */
.vs-header .main-menu > ul > li > a::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  transition: width 0.3s ease;
  border-radius: 2px;
  margin-top: 2px;
}

.vs-header .main-menu > ul > li > a:hover {
  color: #6C63FF !important;
  background: transparent !important;
}

.vs-header .main-menu > ul > li > a:hover::after {
  width: 100%;
}

/* Active menu item */
.vs-header .main-menu > ul > li.active > a,
.vs-header .main-menu > ul > li > a.router-link-active {
  color: #6C63FF !important;
  background: transparent !important;
}

.vs-header .main-menu > ul > li.active > a::after,
.vs-header .main-menu > ul > li > a.router-link-active::after {
  width: 100%;
}

/* Dropdown menu hover */
.vs-header .main-menu > ul > li.menu-item-has-children:hover > a {
  color: #6C63FF !important;
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
  margin-top: 0 !important;
  top: 100% !important;
  left: 0 !important;
  background: white !important;
  z-index: 9999 !important;
  position: absolute !important;
  min-width: 200px !important;
  opacity: 0 !important;
  visibility: hidden  !important;
  transform: translateY(-10px) !important;
  transition: all 0.3s ease !important;
  list-style-type: none !important;
  list-style: none !important;
}

.vs-header .main-menu > ul > li.menu-item-has-children {
  position: relative !important;
}

.vs-header .main-menu > ul > li.menu-item-has-children:hover > .sub-menu {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) !important;
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
  color: #2D3436 !important;
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
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.08), rgba(162, 155, 254, 0.08)) !important;
  color: #6C63FF !important;
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
  padding: 4px 0;
}

.vs-header .btn-login,
.vs-header .btn-signup {
  padding: 10px 20px !important;
  font-size: 14px !important;
}

.vs-header .icon-btn-modern {
  width: 42px !important;
  height: 42px !important;
}

.vs-header .vs-menu-toggle {
  padding: 10px 20px !important;
}

/* Add padding to body to prevent content from hiding under fixed header */
body {
  padding-top: 70px;
}

@media (max-width: 991px) {
  body {
    padding-top: 65px;
  }

  .vs-header .header-logo {
    transform: scale(0.7);
  }

  .vs-header .header-menu-area {
    padding: 12px 0 !important;
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
    align-items: center !important;
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

@media (max-width: 767px) {
  body {
    padding-top: 60px;
  }

  .vs-header .header-logo {
    transform: scale(0.65);
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
    padding-top: 55px;
  }

  .vs-header .header-logo {
    transform: scale(0.6);
  }

  .vs-header .header-menu-area {
    padding: 8px 0 !important;
  }

  .vs-header .vs-menu-toggle {
    padding: 6px 12px !important;
    font-size: 12px !important;
  }

  .vs-header .vs-menu-toggle i {
    font-size: 14px;
  }
}
</style>

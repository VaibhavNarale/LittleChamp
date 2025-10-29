<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Logo from './Logo.vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])
const router = useRouter()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.authenticated)
const userName = computed(() => {
  if (!authStore.user || !authStore.user.first_name) return 'User'
  return `${authStore.user.first_name} ${authStore.user.last_name || ''}`
})

// Track which submenu is open
const activeSubmenu = ref(null)

const toggleSubmenu = (menuName) => {
  activeSubmenu.value = activeSubmenu.value === menuName ? null : menuName
}

const goToDashboard = () => {
  const token = authStore.token
  const adminClientUrl = import.meta.env.VITE_ADMIN_CLIENT_URL || 'http://localhost:5174'
  if (token) {
    window.location.href = `${adminClientUrl}?token=${encodeURIComponent(token)}`
  } else {
    window.location.href = adminClientUrl
  }
  emit('close')
}

const handleLogout = async () => {
  await authStore.logOut()
  emit('close')
  router.push('/')
}

const handleLinkClick = () => {
  emit('close')
  activeSubmenu.value = null
}
</script>

<template>
  <!-- Backdrop Overlay -->
  <div v-if="show" class="mobile-menu-backdrop" @click="emit('close')"></div>

  <!-- Menu Panel -->
  <div class="mobile-menu-panel" :class="{ 'is-open': show }">
    <!-- Close Button -->
    <!-- <button class="close-btn" @click="emit('close')" type="button">
      <i class="fas fa-times"></i>
    </button> -->


    <!-- Auth Section -->
    <div class="auth-section mt-3">
      <template v-if="!isLoggedIn">
        <router-link to="/login" class="auth-btn login-btn" @click="handleLinkClick">
          <i class="fas fa-sign-in-alt"></i>
          <span>Login</span>
        </router-link>
        <router-link to="/register" class="auth-btn signup-btn" @click="handleLinkClick">
          <i class="fas fa-rocket"></i>
          <span>Start Free Trial</span>
        </router-link>
      </template>
      <template v-else>
        <div class="user-info">
          <i class="fas fa-user-circle"></i>
          <span>{{ userName }}</span>
        </div>
        <button @click="goToDashboard" class="auth-btn dashboard-btn" type="button">
          <i class="fas fa-th-large"></i>
          <span>Dashboard</span>
        </button>
        <button @click="handleLogout" class="auth-btn logout-btn" type="button">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </template>
    </div>

    <!-- Navigation Menu -->
    <nav class="mobile-nav">
      <ul>
        <li>
          <router-link to="/" @click="handleLinkClick">Home</router-link>
        </li>

        <li>
          <button @click="toggleSubmenu('subjects')" type="button" class="menu-toggle">
            <span>Subjects</span>
            <i class="fas fa-chevron-down" :class="{ 'rotate': activeSubmenu === 'subjects' }"></i>
          </button>
          <ul v-show="activeSubmenu === 'subjects'" class="submenu">
            <li><router-link to="/subjects" @click="handleLinkClick">All Subjects</router-link></li>
            <li><router-link to="/subjects/math" @click="handleLinkClick">Mathematics</router-link></li>
            <li><router-link to="/subjects/reading" @click="handleLinkClick">Reading & ELA</router-link></li>
            <li><router-link to="/subjects/science" @click="handleLinkClick">Science</router-link></li>
          </ul>
        </li>

        <li>
          <router-link to="/features" @click="handleLinkClick">Features</router-link>
        </li>

        <li>
          <router-link to="/pricing" @click="handleLinkClick">Pricing</router-link>
        </li>

        <li>
          <button @click="toggleSubmenu('foryou')" type="button" class="menu-toggle">
            <span>For You</span>
            <i class="fas fa-chevron-down" :class="{ 'rotate': activeSubmenu === 'foryou' }"></i>
          </button>
          <ul v-show="activeSubmenu === 'foryou'" class="submenu">
            <li><router-link to="/for-parents" @click="handleLinkClick">For Parents</router-link></li>
            <li><router-link to="/for-teachers" @click="handleLinkClick">For Teachers</router-link></li>
            <li><router-link to="/for-schools" @click="handleLinkClick">For Schools</router-link></li>
          </ul>
        </li>

        <li>
          <router-link to="/blog" @click="handleLinkClick">Blog</router-link>
        </li>

        <li>
          <router-link to="/about" @click="handleLinkClick">About</router-link>
        </li>

        <li>
          <router-link to="/contact" @click="handleLinkClick">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
/* Backdrop */
.mobile-menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Menu Panel */
.mobile-menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: linear-gradient(180deg, #6C63FF 0%, #A29BFE 100%);
  z-index: 9999;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  padding: 20px;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
}

.mobile-menu-panel.is-open {
  transform: translateX(0);
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

/* Logo */
.menu-logo {
  padding: 15px;
  margin-bottom: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-logo a {
  display: flex;
  align-items: center;
}

/* Auth Section */
.auth-section {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: white;
  margin-bottom: 12px;
  font-weight: 600;
}

.user-info i {
  font-size: 24px;
}

.auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 10px;
  text-decoration: none;
}

.login-btn {
  background: white;
  color: #6C63FF;
}

.login-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.signup-btn {
  background: rgba(255, 255, 255, 0.25);
  color: white;
  border: 2px solid white;
}

.signup-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}

.dashboard-btn {
  background: white;
  color: #6C63FF;
}

.dashboard-btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

.logout-btn {
  background: rgba(255, 77, 77, 0.2);
  color: white;
  border: 1px solid rgba(255, 77, 77, 0.5);
}

.logout-btn:hover {
  background: rgba(255, 77, 77, 0.3);
}

/* Navigation */
.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav > ul > li {
  margin-bottom: 8px;
}

.mobile-nav a {
  display: block;
  padding: 12px 15px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  padding-left: 20px;
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 15px;
  background: none;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s;
  text-align: left;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.menu-toggle i {
  font-size: 12px;
  transition: transform 0.3s;
}

.menu-toggle i.rotate {
  transform: rotate(180deg);
}

/* Submenu */
.submenu {
  list-style: none;
  padding: 5px 0 5px 20px;
  margin: 0;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.submenu li {
  margin-bottom: 5px;
}

.submenu a {
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
}

.submenu a:hover,
.submenu a.router-link-active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

/* Scrollbar */
.mobile-menu-panel::-webkit-scrollbar {
  width: 6px;
}

.mobile-menu-panel::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-panel::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.mobile-menu-panel::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>

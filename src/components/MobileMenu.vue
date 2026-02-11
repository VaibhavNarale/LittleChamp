<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Logo from './Logo.vue'

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const router = useRouter()
const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.authenticated)
const userName = computed(() => {
  if (!authStore.user || !authStore.user.first_name) return 'User'
  return `${authStore.user.first_name} ${authStore.user.last_name || ''}`
})

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
</script>

<template>
  <div v-if="show" class="vs-menu-wrapper show" @click.self="$emit('close')">
    <div class="vs-menu-area">
      <button class="vs-menu-toggle" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <div class="mobile-logo">
        <router-link to="/" @click="$emit('close')">
          <Logo size="small" variant="default" />
        </router-link>
      </div>

      <!-- Auth Buttons for Mobile -->
      <div class="mobile-auth-buttons">
        <template v-if="!isLoggedIn">
          <router-link to="/login" class="mobile-btn btn-login" @click="$emit('close')">
            <i class="fas fa-sign-in-alt"></i> Login
          </router-link>
          <router-link to="/register" class="mobile-btn btn-signup" @click="$emit('close')">
            <i class="fas fa-rocket"></i> Start Free Trial
          </router-link>
        </template>
        <template v-else>
          <div class="mobile-user-info">
            <i class="fas fa-user-circle"></i>
            <span>{{ userName }}</span>
          </div>
          <button @click="goToDashboard" class="mobile-btn btn-dashboard">
            <i class="fas fa-th-large"></i> Dashboard
          </button>
          <button @click="handleLogout" class="mobile-btn btn-logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </template>
      </div>

      <div class="vs-mobile-menu">
        <ul>
          <li>
            <router-link to="/" @click="$emit('close')">Home</router-link>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Subjects</a>
            <ul class="sub-menu">
              <li><router-link to="/subjects" @click="$emit('close')">All Subjects</router-link></li>
              <li><router-link to="/subjects/math" @click="$emit('close')">Mathematics</router-link></li>
              <li><router-link to="/subjects/reading" @click="$emit('close')">Reading & ELA</router-link></li>
              <li><router-link to="/subjects/science" @click="$emit('close')">Science</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/features" @click="$emit('close')">Features</router-link>
          </li>
          <li>
            <router-link to="/pricing" @click="$emit('close')">Pricing</router-link>
          </li>
          <li class="menu-item-has-children">
            <a href="#">For You</a>
            <ul class="sub-menu">
              <li><router-link to="/for-parents" @click="$emit('close')">For Parents</router-link></li>
              <li><router-link to="/for-teachers" @click="$emit('close')">For Teachers</router-link></li>
              <li><router-link to="/for-schools" @click="$emit('close')">For Schools</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/blog" @click="$emit('close')">Blog</router-link>
          </li>
          <li>
            <router-link to="/about" @click="$emit('close')">About</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="$emit('close')">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
/* Mobile Menu Wrapper */
.vs-menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99999;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
}

.vs-menu-area {
  width: 320px;
  max-width: 85vw;
  height: 100vh;
  background: linear-gradient(135deg, #4A8B3F 0%, #5EA750 100%);
  padding: 60px 20px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Close Button */
.vs-menu-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.vs-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

/* Mobile Logo */
.mobile-logo {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-logo a {
  display: inline-block;
}

/* Mobile Menu Navigation */
.vs-mobile-menu {
  margin-top: 20px;
}

.vs-mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vs-mobile-menu > ul > li {
  margin-bottom: 5px;
}

.vs-mobile-menu > ul > li > a,
.vs-mobile-menu > ul > li > a {
  display: block;
  padding: 12px 15px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.vs-mobile-menu > ul > li > a:hover {
  background: rgba(255, 255, 255, 0.15);
  padding-left: 20px;
}

/* Submenu */
.vs-mobile-menu .sub-menu {
  list-style: none;
  padding: 0;
  margin: 5px 0 5px 15px;
  display: none;
}

.vs-mobile-menu .menu-item-has-children.active .sub-menu {
  display: block;
}

.vs-mobile-menu .sub-menu li {
  margin-bottom: 3px;
}

.vs-mobile-menu .sub-menu li a {
  display: block;
  padding: 8px 15px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.vs-mobile-menu .sub-menu li a:hover {
  background: rgba(255, 255, 255, 0.1);
  padding-left: 20px;
  color: white;
}

.vs-mobile-menu .menu-item-has-children > a {
  position: relative;
}

.vs-mobile-menu .menu-item-has-children > a::after {
  content: '\f107';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

.vs-mobile-menu .menu-item-has-children.active > a::after {
  transform: translateY(-50%) rotate(180deg);
}

.mobile-auth-buttons {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
}

.mobile-user-info i {
  font-size: 24px;
}

.mobile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;
}

.btn-login {
  background: white;
  color: #4A8B3F;
  border: 2px solid white;
}

.btn-login:hover {
  background: rgba(255, 255, 255, 0.9);
}

.btn-signup {
  background: linear-gradient(135deg, #4A8B3F, #5EA750);
  color: white;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
}

.btn-dashboard {
  background: white;
  color: #4A8B3F;
  border: 2px solid white;
}

.btn-dashboard:hover {
  background: rgba(255, 255, 255, 0.9);
}

.btn-logout {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-logout:hover {
  background: rgba(255, 77, 77, 0.2);
  border-color: #ff4d4d;
}
</style>

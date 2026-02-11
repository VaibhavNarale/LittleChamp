import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Main Pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Register from '../views/Register.vue'
import AuthCallback from '../views/AuthCallback.vue'

// Learning Content (Subjects)
import Subjects from '../views/Subjects.vue'
import ClassDetails from '../views/ClassDetails.vue' // Will be renamed to SubjectDetails later

// Features
import Features from '../views/Features.vue'
import ServiceDetails from '../views/ServiceDetails.vue' // For details if needed

// For You Pages
import ForParents from '../views/ForParents.vue'
import ForTeachers from '../views/ForTeachers.vue'
import ForSchools from '../views/ForSchools.vue'

// Pricing
import Pricing from '../views/Pricing.vue'
import EventDetails from '../views/EventDetails.vue' // For comparison if needed

// Content
import Blog from '../views/Blog.vue'
import BlogDetails from '../views/BlogDetails.vue'
import Gallery from '../views/Gallery.vue' // Will become Screenshots

// Other
import TeamDetails from '../views/TeamDetails.vue'
import Error from '../views/Error.vue'

const routes = [
  // Main Pages
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/auth/callback', name: 'AuthCallback', component: AuthCallback },

  // Subjects (Learning Content)
  { path: '/subjects', name: 'Subjects', component: Subjects },
  { path: '/subjects/:subject', name: 'SubjectDetails', component: ClassDetails },

  // Features
  { path: '/features', name: 'Features', component: Features },

  // Pricing
  { path: '/pricing', name: 'Pricing', component: Pricing },

  // For Parents, Teachers, Schools
  { path: '/for-parents', name: 'ForParents', component: ForParents },
  { path: '/for-teachers', name: 'ForTeachers', component: ForTeachers },
  { path: '/for-schools', name: 'ForSchools', component: ForSchools },

  // Content
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogDetails', component: BlogDetails },
  { path: '/screenshots', name: 'Screenshots', component: Gallery },

  // Other
  { path: '/testimonials', name: 'Testimonials', component: TeamDetails },

  // Error
  { path: '/error', name: 'Error', component: Error },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Check if user is authenticated - same as admin panel approach
  const authStore = useAuthStore()
  const isAuthenticated = authStore.authenticated
  // If user is logged in and trying to access login/register, redirect to admin panel
  if (isAuthenticated && (to.name === 'Login' || to.name === 'Register' || to.name === 'ForgotPassword')) {
    // Pass token in URL for cross-domain authentication
    next({ name: 'Home'})
    return
  }

  // If route requires authentication and user is not logged in
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
    return
  }

  next()
})

export default router

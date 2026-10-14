import { createRouter, createWebHistory } from 'vue-router'

// Main Pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

// Learning Content (Subjects)
import Subjects from '../views/Subjects.vue'
import ClassDetails from '../views/ClassDetails.vue' // Will be renamed to SubjectDetails later

// Features
import Features from '../views/Features.vue'

// For You Pages
import ForParents from '../views/ForParents.vue'
import ForTeachers from '../views/ForTeachers.vue'
import ForSchools from '../views/ForSchools.vue'

// Content
import Blog from '../views/Blog.vue'
import BlogDetails from '../views/BlogDetails.vue'
import Gallery from '../views/Gallery.vue'

// Other
import TeamDetails from '../views/TeamDetails.vue'
import Error from '../views/Error.vue'

const routes = [
  // Main Pages
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },

  // Subjects (Learning Content)
  { path: '/subjects', name: 'Subjects', component: Subjects },
  {
    path: '/subjects/:subject',
    name: 'SubjectDetails',
    component: ClassDetails,
  },

  // Features
  { path: '/features', name: 'Features', component: Features },

  // For Parents, Teachers, Schools
  { path: '/for-parents', name: 'ForParents', component: ForParents },
  { path: '/for-teachers', name: 'ForTeachers', component: ForTeachers },
  { path: '/for-schools', name: 'ForSchools', component: ForSchools },

  // Content
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogDetails', component: BlogDetails },
  { path: '/gallery', name: 'Gallery', component: Gallery },

  // Other
  { path: '/testimonials', name: 'Testimonials', component: TeamDetails },

  // Error
  { path: '/error', name: 'Error', component: Error },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router

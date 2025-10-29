import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

// Set up axios base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'ngrok-skip-browser-warning': 'true' // Skip ngrok browser warning for API calls
  }
})

// Request interceptor - add auth token
api.interceptors.request.use(
  (config) => {
    // Get token directly from auth store - same as admin panel
    const accessToken = useAuthStore().token
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    // Add company-id header if company exists - same as admin panel
    const authStore = useAuthStore()
    if (authStore.company && authStore.company.id) {
      config.headers['company-id'] = authStore.company.id
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - logout and redirect to login
      const authStore = useAuthStore()
      authStore.logOut()

      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api

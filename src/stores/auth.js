import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/utils/api'

export const useAuthStore = defineStore('auth', () => {
  // State - Same structure as admin panel
  const token = ref('')
  const user = ref({})
  const company = ref({})
  const permissions = ref([])

  // Getters - Same as admin panel
  const authenticated = computed(() => !!token.value)

  const roleName = computed(() => {
    return user.value && user.value.roles && user.value.roles.length > 0
      ? user.value.roles[0].name
      : ''
  })

  // Actions
  function setToken(data) {
    if (data) {
      token.value = data
    } else {
      token.value = null
    }
  }

  function setUser(data) {
    user.value = data
    const userCompanies = data ? data.companies : ''
    company.value = userCompanies.length ? userCompanies[0] : {}
  }

  function setCompany(companyData) {
    company.value = companyData
  }

  function setPermissions(permissionsData) {
    permissions.value = permissionsData || []
  }

  async function logIn(credentials) {
    try {
      const response = await api.post('/login', credentials)

      if (response.data && response.data.token) {
        await attempt(response.data.token)
        return { data: response.data, error: null }
      } else {
        throw new Error(response.data?.['sub-title'] || 'Login failed')
      }
    } catch (error) {
      return { data: null, error: error.response?.data || error }
    }
  }

  async function register(userData) {
    try {
      const response = await api.post('/register', userData)

      if (response.data && response.data.success) {
        return { data: response.data, error: null }
      } else {
        throw new Error(response.data?.['sub-title'] || 'Registration failed')
      }
    } catch (error) {
      return { data: null, error: error.response?.data || error }
    }
  }

  async function attempt(authToken) {
    if (authToken) {
      setToken(authToken)
    }

    if (!token.value) return

    try {
      const response = await api.get('/me')

      if (response.data && response.data.data) {
        setUser(response.data.data)

        // Set permissions from /me API response
        setPermissions(response.data.permissions || [])

        const storedCompany = localStorage.getItem('company')
        if (storedCompany) {
          setCompany(JSON.parse(storedCompany))
        }
      } else {
        throw new Error('Failed to fetch user')
      }
    } catch (e) {
      setToken(null)
      setUser(null)
      setCompany(null)
      setPermissions([])
    }
  }

  function logOut() {
    setToken(null)
    setUser(null)
    setCompany(null)
    setPermissions([])
  }

  return {
    // State
    token,
    user,
    company,
    permissions,

    // Getters
    authenticated,
    roleName,

    // Actions
    setToken,
    setUser,
    setCompany,
    setPermissions,
    logIn,
    register,
    attempt,
    logOut,
  }
}, {
  persist: true, // Enable automatic localStorage persistence - same as admin panel
})

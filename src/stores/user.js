import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Guest')
  const email = ref('')
  const isLoggedIn = ref(false)

  const displayName = computed(() => {
    return isLoggedIn.value ? name.value : 'Guest'
  })

  function login(userName, userEmail) {
    name.value = userName
    email.value = userEmail
    isLoggedIn.value = true
  }

  function logout() {
    name.value = 'Guest'
    email.value = ''
    isLoggedIn.value = false
  }

  return {
    name,
    email,
    isLoggedIn,
    displayName,
    login,
    logout,
  }
})

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import api from '@/utils/api'
import AuthLayout from '@/components/AuthLayout.vue'
import SocialLoginButtons from '@/components/SocialLoginButtons.vue'

const router = useRouter()
const authStore = useAuthStore()

// Audio
const bgAudio = ref(null)
const isPlaying = ref(false)

const toggleAudio = () => {
  if (!bgAudio.value) return
  if (isPlaying.value) {
    bgAudio.value.pause()
    isPlaying.value = false
  } else {
    bgAudio.value.volume = 0.5
    bgAudio.value
      .play()
      .then(() => {
        isPlaying.value = true
      })
      .catch(() => {})
  }
}

onBeforeUnmount(() => {
  if (bgAudio.value) {
    bgAudio.value.pause()
    bgAudio.value.currentTime = 0
  }
})

// Form state
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const accountType = ref('parent') // 'parent', 'teacher', 'school'
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const agreeTerms = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Positions from API
const positions = ref([])
const positionsMap = ref({})

// Admin Client URL

// Fetch positions on component mount
onMounted(async () => {
  try {
    const response = await api.get('/positions/public')
    if (response.data.success) {
      positions.value = response.data.data

      // Create map of position name to ID
      positions.value.forEach((pos) => {
        const posName = pos.name.toLowerCase()
        if (posName === 'parent') {
          positionsMap.value.parent = pos.id
        } else if (posName === 'teacher') {
          positionsMap.value.teacher = pos.id
        } else if (posName === 'school_admin') {
          positionsMap.value.school = pos.id
        }
      })
    }
  } catch (err) {
    console.error('Failed to fetch positions:', err)
  }
})

const handleRegister = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validation
  if (
    !fullName.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters long'
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value =
      'Please agree to the Terms of Service and Privacy Policy'
    return
  }

  // Get position ID
  const positionId = positionsMap.value[accountType.value]
  if (!positionId) {
    errorMessage.value = 'Invalid account type selected'
    return
  }

  loading.value = true

  try {
    // Split full name into first and last name
    const nameParts = fullName.value.trim().split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    const result = await authStore.register({
      first_name: firstName,
      last_name: lastName || firstName, // Use firstName as lastName if not provided
      email: email.value,
      password: password.value,
      position_id: positionId,
    })

    if (result.data && result.data.success) {
      successMessage.value =
        'Account created successfully! Redirecting to login...'

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } else {
      errorMessage.value =
        result.error?.message ||
        result.error?.['sub-title'] ||
        'Registration failed'
    }
  } catch (err) {
    errorMessage.value = err.message || 'An error occurred during registration'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="register-page">
    <!-- Background Audio -->
    <audio ref="bgAudio" loop preload="auto">
      <source src="/assets/audio/login-bg.mp3" type="audio/mpeg" />
    </audio>
    <button
      class="audio-toggle"
      :class="{ playing: isPlaying }"
      @click="toggleAudio"
    >
      <i :class="isPlaying ? 'fas fa-volume-up' : 'fas fa-volume-mute'"></i>
    </button>
    <div class="register-container">
      <div class="row g-0 h-100">
        <!-- Left Side - Branding -->
        <AuthLayout
          title="Join the Learning"
          subtitle="Revolution!"
          description="Start your 30-day free trial today. All payments required. Cancel anytime."
        />

        <!-- Right Side - Register Form -->
        <div class="col-lg-6 register-form-section">
          <div class="form-container">
            <!-- Back to Home Link -->
            <router-link to="/" class="back-link">
              <i class="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </router-link>

            <div class="form-header">
              <h2 class="form-title">Create Account</h2>
              <p class="form-subtitle">
                Start your free trial and explore 500+ games
              </p>
            </div>

            <!-- Social Login Buttons -->
            <SocialLoginButtons />

            <!-- Success Message -->
            <div v-if="successMessage" class="alert alert-success">
              <i class="fas fa-check-circle me-2"></i>
              {{ successMessage }}
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger">
              <i class="fas fa-exclamation-circle me-2"></i>
              {{ errorMessage }}
            </div>

            <!-- Account Type Selector -->
            <div class="account-type-selector">
              <label class="account-type-label">I am a...</label>
              <div class="account-types">
                <button
                  type="button"
                  class="type-btn"
                  :class="{ active: accountType === 'parent' }"
                  @click="accountType = 'parent'"
                >
                  <i class="fas fa-users"></i>
                  <span>Parent</span>
                </button>
                <button
                  type="button"
                  class="type-btn"
                  :class="{ active: accountType === 'teacher' }"
                  @click="accountType = 'teacher'"
                >
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>Teacher</span>
                </button>
                <button
                  type="button"
                  class="type-btn"
                  :class="{ active: accountType === 'school' }"
                  @click="accountType = 'school'"
                >
                  <i class="fas fa-school"></i>
                  <span>School</span>
                </button>
              </div>
            </div>

            <!-- Register Form -->
            <form class="register-form" @submit.prevent="handleRegister">
              <div class="form-group">
                <label for="fullName" class="form-label">
                  <i class="fas fa-user me-2"></i>Full Name
                </label>
                <input
                  id="fullName"
                  v-model="fullName"
                  type="text"
                  class="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">
                  <i class="fas fa-envelope me-2"></i>Email Address
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div class="form-group">
                <label for="password" class="form-label">
                  <i class="fas fa-lock me-2"></i>Password
                </label>
                <div class="password-input-wrapper">
                  <input
                    id="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    placeholder="Create a password (min. 8 characters)"
                    required
                  />
                  <button
                    type="button"
                    class="password-toggle"
                    @click="showPassword = !showPassword"
                  >
                    <i
                      :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                    ></i>
                  </button>
                </div>
                <div class="password-strength">
                  <div class="strength-bar">
                    <div
                      class="strength-fill"
                      :class="{
                        weak: password.length > 0 && password.length < 8,
                        medium: password.length >= 8 && password.length < 12,
                        strong: password.length >= 12,
                      }"
                    ></div>
                  </div>
                  <span v-if="password.length > 0" class="strength-text">
                    {{
                      password.length < 8
                        ? 'Weak'
                        : password.length < 12
                          ? 'Medium'
                          : 'Strong'
                    }}
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label for="confirmPassword" class="form-label">
                  <i class="fas fa-lock me-2"></i>Confirm Password
                </label>
                <div class="password-input-wrapper">
                  <input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    class="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    class="password-toggle"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <i
                      :class="
                        showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                      "
                    ></i>
                  </button>
                </div>
              </div>

              <div class="terms-agreement">
                <label class="custom-checkbox">
                  <input v-model="agreeTerms" type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="checkbox-label">
                    I agree to the
                    <router-link to="/terms" class="link"
                      >Terms of Service</router-link
                    >
                    and
                    <router-link to="/privacy" class="link"
                      >Privacy Policy</router-link
                    >
                  </span>
                </label>
              </div>

              <button type="submit" class="btn-submit" :disabled="loading">
                <span v-if="!loading">
                  <i class="fas fa-rocket me-2"></i>Start Free Trial
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin me-2"></i>Creating Account...
                </span>
              </button>
            </form>

            <!-- Sign In Link -->
            <div class="signin-link">
              <p>
                Already have an account?
                <router-link to="/login" class="signin-cta"
                  >Sign In</router-link
                >
              </p>
            </div>

            <!-- Features Banner -->
            <div class="features-banner">
              <div class="feature-badge">
                <i class="fas fa-check-circle"></i>
                <span>30-Day Free Trial</span>
              </div>
              <div class="feature-badge">
                <i class="fas fa-check-circle"></i>
                <span>All Payments Required</span>
              </div>
              <div class="feature-badge">
                <i class="fas fa-check-circle"></i>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #f7f8fa;
}

.register-container {
  height: 100vh;
  background: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.register-container .row {
  height: 100vh;
  overflow: hidden;
}

/* Right Side - Form */
.register-form-section {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
}

.register-form-section::-webkit-scrollbar {
  width: 8px;
}

.register-form-section::-webkit-scrollbar-track {
  background: #f7f8fa;
}

.register-form-section::-webkit-scrollbar-thumb {
  background: #4a8b3f;
  border-radius: 4px;
}

.register-form-section::-webkit-scrollbar-thumb:hover {
  background: #3a7032;
}

.form-container {
  width: 100%;
  max-width: 520px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4a8b3f;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: all 0.3s;
}

.back-link:hover {
  color: #3a7032;
  gap: 12px;
}

.form-header {
  margin-bottom: 30px;
  text-align: center;
}

.form-title {
  font-size: 32px;
  font-weight: 800;
  color: #2d3436;
  margin-bottom: 10px;
}

.form-subtitle {
  color: #636e72;
  font-size: 16px;
}

/* Account Type Selector */
.account-type-selector {
  margin-bottom: 25px;
}

.account-type-label {
  display: block;
  margin-bottom: 12px;
  color: #2d3436;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}

.account-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.type-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 10px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  color: #636e72;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s;
}

.type-btn i {
  font-size: 24px;
}

.type-btn:hover {
  border-color: #4a8b3f;
  transform: translateY(-2px);
}

.type-btn.active {
  border-color: #4a8b3f;
  background: linear-gradient(135deg, #4a8b3f 0%, #5ea750 100%);
  color: white;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #2d3436;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #4a8b3f;
  box-shadow: 0 0 0 3px rgba(74, 139, 63, 0.1);
}

.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #636e72;
  cursor: pointer;
  padding: 5px;
}

.password-toggle:hover {
  color: #4a8b3f;
}

/* Password Strength */
.password-strength {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.strength-bar {
  flex: 1;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s;
  border-radius: 2px;
}

.strength-fill.weak {
  width: 33%;
  background: #ff6b6b;
}

.strength-fill.medium {
  width: 66%;
  background: #ffa502;
}

.strength-fill.strong {
  width: 100%;
  background: #26de81;
}

.strength-text {
  font-size: 12px;
  font-weight: 600;
  color: #636e72;
  white-space: nowrap;
}

/* Terms Agreement */
.terms-agreement {
  margin: 20px 0;
}

.custom-checkbox {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: 2px;
  position: relative;
  transition: all 0.3s;
}

.custom-checkbox input:checked ~ .checkmark {
  background: #4a8b3f;
  border-color: #4a8b3f;
}

.custom-checkbox input:checked ~ .checkmark::after {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
}

.checkbox-label {
  font-size: 13px;
  color: #636e72;
  line-height: 1.5;
}

.checkbox-label .link {
  color: #4a8b3f;
  text-decoration: none;
  font-weight: 600;
}

.checkbox-label .link:hover {
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(74, 139, 63, 0.3);
  margin-top: 10px;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.signin-link {
  text-align: center;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #e0e0e0;
}

.signin-link p {
  color: #636e72;
  margin: 0;
}

.signin-cta {
  color: #4a8b3f;
  font-weight: 700;
  text-decoration: none;
}

.signin-cta:hover {
  color: #3a7032;
  text-decoration: underline;
}

/* Features Banner */
.features-banner {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 25px;
  padding: 20px;
  background: #f7f8fa;
  border-radius: 10px;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #2d3436;
  font-size: 13px;
  font-weight: 600;
}

.feature-badge i {
  color: #26de81;
  font-size: 14px;
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.alert-danger {
  background: #fee;
  color: #c00;
  border: 1px solid #fcc;
}

.alert-success {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
}

/* Responsive */
@media (max-width: 991px) {
  .register-form-section {
    padding: 20px;
  }

  .form-container {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .account-types {
    grid-template-columns: 1fr;
  }

  .features-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* Audio Toggle Button */
.audio-toggle {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(74, 139, 63, 0.4);
  transition: all 0.3s;
}

.audio-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(74, 139, 63, 0.5);
}

.audio-toggle.playing {
  animation: pulse-audio 2s ease-in-out infinite;
}

@keyframes pulse-audio {
  0%,
  100% {
    box-shadow: 0 4px 15px rgba(74, 139, 63, 0.4);
  }
  50% {
    box-shadow:
      0 4px 25px rgba(74, 139, 63, 0.7),
      0 0 0 10px rgba(74, 139, 63, 0.1);
  }
}
</style>

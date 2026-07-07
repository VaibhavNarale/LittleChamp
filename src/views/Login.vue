<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')

// Admin Client URL

const handleLogin = async () => {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  loading.value = true

  try {
    const result = await authStore.logIn({
      email: email.value,
      password: password.value,
    })

    if (result.data && result.data.token) {
      // Login successful - redirect to admin panel with token
      router.push('/')
    } else {
      errorMessage.value =
        result.error?.['sub-title'] || result.error?.message || 'Login failed'
    }
  } catch (err) {
    errorMessage.value = err.message || 'An error occurred during login'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">
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

    <div class="login-container">
      <div class="row g-0 h-100">
        <!-- Left Side - Branding -->
        <AuthLayout
          title="Welcome Back to"
          subtitle="Little Champ!"
          description="Continue your child's learning journey with 500+ interactive games and activities."
          :features="[]"
          :hide-stats="true"
        />

        <!-- Right Side - Login Form -->
        <div class="col-lg-6 login-form-section">
          <div class="form-container">
            <!-- Back to Home Link -->
            <router-link to="/" class="back-link">
              <i class="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </router-link>

            <div class="form-header">
              <h2 class="form-title">Sign In</h2>
              <p class="form-subtitle">Access your Little Champ account</p>
            </div>

            <!-- Social Login Buttons -->
            <SocialLoginButtons />

            <!-- Error Message -->
            <div v-if="errorMessage" class="alert alert-danger">
              <i class="fas fa-exclamation-circle me-2"></i>
              {{ errorMessage }}
            </div>

            <!-- Login Form -->
            <form class="login-form" @submit.prevent="handleLogin">
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
                    placeholder="Enter your password"
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
              </div>

              <div class="form-options">
                <label class="custom-checkbox">
                  <input v-model="rememberMe" type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="checkbox-label">Remember me</span>
                </label>
                <router-link to="/forgot-password" class="forgot-link">
                  Forgot Password?
                </router-link>
              </div>

              <button type="submit" class="btn-submit" :disabled="loading">
                <span v-if="!loading">
                  <i class="fas fa-sign-in-alt me-2"></i>Sign In
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin me-2"></i>Signing In...
                </span>
              </button>
            </form>

            <!-- Teacher Sign Up -->
            <div class="teacher-banner">
              <i class="fas fa-graduation-cap"></i>
              <div>
                <strong>Are you a teacher?</strong>
                <p>Get a free account with premium features!</p>
              </div>
              <router-link to="/for-teachers" class="teacher-btn"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #f7f8fa;
}

.login-container {
  min-height: 100vh;
  background: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}

.login-container .row {
  min-height: 100vh;
}

/* Right Side - Form */
.login-form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.form-container {
  width: 100%;
  max-width: 480px;
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

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
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
  font-size: 14px;
  color: #2d3436;
}

.forgot-link {
  color: #4a8b3f;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}

.forgot-link:hover {
  color: #3a7032;
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
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 139, 63, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.signup-link {
  text-align: center;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #e0e0e0;
}

.signup-link p {
  color: #636e72;
  margin: 0;
}

.signup-cta {
  color: #4a8b3f;
  font-weight: 700;
  text-decoration: none;
}

.signup-cta:hover {
  color: #3a7032;
  text-decoration: underline;
}

/* Teacher Banner */
.teacher-banner {
  display: flex;
  align-items: center;
  gap: 15px;
  background: linear-gradient(135deg, #00d2a0, #00b894);
  padding: 20px;
  border-radius: 12px;
  margin-top: 30px;
  color: white;
}

.teacher-banner i {
  font-size: 32px;
}

.teacher-banner strong {
  display: block;
  font-size: 16px;
  margin-bottom: 3px;
}

.teacher-banner p {
  margin: 0;
  font-size: 13px;
  opacity: 0.9;
}

.teacher-btn {
  background: white;
  color: #00b894;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s;
}

.teacher-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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

/* Responsive */
@media (max-width: 991px) {
  .login-form-section {
    padding: 20px;
  }

  .form-container {
    max-width: 100%;
  }
}
</style>

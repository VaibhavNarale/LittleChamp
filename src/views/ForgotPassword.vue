<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '@/components/AuthLayout.vue'

const router = useRouter()

// Auth layout props
const authFeatures = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Secure Process',
    description: 'Your data is protected with encryption'
  },
  {
    icon: 'fas fa-clock',
    title: 'Quick Recovery',
    description: 'Reset link expires in 60 minutes'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email Notification',
    description: 'Check your inbox and spam folder'
  }
]

// Form state
const email = ref('')
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const emailSent = ref(false)

// Admin Client URL

const handleResetPassword = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value) {
    errorMessage.value = 'Please enter your email address'
    return
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address'
    return
  }

  loading.value = true

  // Simulate password reset request - In production, this would call your API
  setTimeout(() => {
    loading.value = false
    emailSent.value = true
    successMessage.value = `We've sent a password reset link to ${email.value}. Please check your inbox.`
  }, 1500)
}

const goBackToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="forgot-password-page">
    <div class="forgot-password-container">
      <div class="row g-0 h-100">

        <!-- Left Side - Branding -->
        <AuthLayout
          title="Don't Worry!"
          subtitle="We'll Help You"
          description="Forgot your password? No problem! Just enter your email address and we'll send you a link to reset it."
          :features="authFeatures"
        />

        <!-- Right Side - Reset Password Form -->
        <div class="col-lg-6 forgot-password-form-section">
          <div class="form-container">

            <!-- Back to Login Link -->
            <router-link to="/login" class="back-link">
              <i class="fas fa-arrow-left"></i>
              <span>Back to Login</span>
            </router-link>

            <div v-if="!emailSent">
              <div class="form-header">
                <div class="icon-wrapper mb-4">
                  <i class="fas fa-lock"></i>
                </div>
                <h2 class="form-title">Forgot Password?</h2>
                <p class="form-subtitle">Enter your email address and we'll send you a link to reset your password</p>
              </div>

              <!-- Error Message -->
              <div v-if="errorMessage" class="alert alert-danger">
                <i class="fas fa-exclamation-circle me-2"></i>
                {{ errorMessage }}
              </div>

              <!-- Reset Password Form -->
              <form @submit.prevent="handleResetPassword" class="reset-form">
                <div class="form-group">
                  <label for="email" class="form-label">
                    <i class="fas fa-envelope me-2"></i>Email Address
                  </label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Enter your registered email"
                    required
                  />
                </div>

                <button type="submit" class="btn-submit" :disabled="loading">
                  <span v-if="!loading">
                    <i class="fas fa-paper-plane me-2"></i>Send Reset Link
                  </span>
                  <span v-else>
                    <i class="fas fa-spinner fa-spin me-2"></i>Sending...
                  </span>
                </button>
              </form>

              <!-- Alternative Options -->
              <div class="alternative-options">
                <p class="text-center mb-3">Need more help?</p>
                <div class="help-links">
                  <router-link to="/register" class="help-link">
                    <i class="fas fa-user-plus"></i>
                    <span>Create New Account</span>
                  </router-link>
                  <router-link to="/contact" class="help-link">
                    <i class="fas fa-headset"></i>
                    <span>Contact Support</span>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Success State -->
            <div v-else class="success-state">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3 class="success-title">Check Your Email!</h3>

              <!-- Success Message -->
              <div class="alert alert-success">
                <i class="fas fa-envelope me-2"></i>
                {{ successMessage }}
              </div>

              <div class="instructions">
                <h4>What's Next?</h4>
                <ol>
                  <li>Check your email inbox for a message from Mind Growup Jr</li>
                  <li>Click the password reset link in the email</li>
                  <li>Create a new password for your account</li>
                  <li>Sign in with your new password</li>
                </ol>
              </div>

              <div class="additional-help">
                <p><strong>Didn't receive the email?</strong></p>
                <ul>
                  <li>Check your spam or junk folder</li>
                  <li>Make sure you entered the correct email address</li>
                  <li>Wait a few minutes and check again</li>
                </ul>
                <button @click="emailSent = false; successMessage = ''" class="btn-secondary">
                  <i class="fas fa-redo me-2"></i>Try Again
                </button>
              </div>

              <button @click="goBackToLogin" class="btn-submit mt-4">
                <i class="fas fa-arrow-left me-2"></i>Back to Login
              </button>
            </div>

            <!-- Security Note -->
            <div class="security-note">
              <i class="fas fa-shield-check"></i>
              <p>Your security is our priority. We'll never ask for your password via email.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style scoped>
.forgot-password-page {
  min-height: 100vh;
  background: #F7F8FA;
}

.forgot-password-container {
  min-height: 100vh;
  background: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}

.forgot-password-container .row {
  min-height: 100vh;
}

/* Left Side - Branding */
.forgot-password-branding {
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%);
  position: relative;
  overflow: hidden;
  padding: 60px;
  align-items: center;
  justify-content: center;
}

.branding-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
}

.gradient-text-light {
  background: linear-gradient(135deg, #FFE5B4, #FFDAB9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.security-features {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: white;
}

.feature-item i {
  font-size: 28px;
  color: #FFE5B4;
  flex-shrink: 0;
  margin-top: 5px;
}

.feature-item strong {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.feature-item p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 20%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}

/* Right Side - Form */
.forgot-password-form-section {
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
  color: #6C63FF;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: all 0.3s;
}

.back-link:hover {
  color: #5A52D5;
  gap: 12px;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6C63FF 0%, #A29BFE 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon-wrapper i {
  font-size: 36px;
  color: white;
}

.form-header {
  margin-bottom: 30px;
  text-align: center;
}

.form-title {
  font-size: 32px;
  font-weight: 800;
  color: #2D3436;
  margin-bottom: 10px;
}

.form-subtitle {
  color: #636E72;
  font-size: 16px;
  line-height: 1.6;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #2D3436;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #E0E0E0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s;
}

.form-control:focus {
  outline: none;
  border-color: #6C63FF;
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #6C63FF, #A29BFE);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-secondary {
  padding: 10px 20px;
  background: white;
  color: #6C63FF;
  border: 2px solid #6C63FF;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #6C63FF;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.alert-danger {
  background: #FEE;
  color: #C00;
  border: 1px solid #FCC;
}

.alert-success {
  background: #E8F5E9;
  color: #2E7D32;
  border: 1px solid #A5D6A7;
}

/* Alternative Options */
.alternative-options {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #E0E0E0;
}

.alternative-options p {
  color: #636E72;
  font-weight: 600;
}

.help-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.help-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  border: 2px solid #E0E0E0;
  border-radius: 10px;
  text-decoration: none;
  color: #2D3436;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;
}

.help-link:hover {
  border-color: #6C63FF;
  background: #F7F8FA;
  transform: translateY(-2px);
}

.help-link i {
  font-size: 24px;
  color: #6C63FF;
}

/* Success State */
.success-state {
  text-align: center;
}

.success-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00D2A0, #00B894);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  animation: scaleIn 0.5s ease;
}

.success-icon i {
  font-size: 48px;
  color: white;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.success-title {
  font-size: 28px;
  font-weight: 800;
  color: #2D3436;
  margin-bottom: 20px;
}

.instructions {
  text-align: left;
  background: #F7F8FA;
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
}

.instructions h4 {
  font-size: 18px;
  font-weight: 700;
  color: #2D3436;
  margin-bottom: 15px;
}

.instructions ol {
  padding-left: 20px;
  margin: 0;
}

.instructions li {
  color: #636E72;
  margin-bottom: 10px;
  line-height: 1.6;
}

.additional-help {
  text-align: left;
  background: #FFF9E6;
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
  border: 1px solid #FFE5B4;
}

.additional-help p {
  color: #2D3436;
  font-weight: 600;
  margin-bottom: 10px;
}

.additional-help ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.additional-help li {
  color: #636E72;
  margin-bottom: 8px;
  line-height: 1.5;
}

/* Security Note */
.security-note {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #F7F8FA;
  padding: 15px;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid #E0E0E0;
}

.security-note i {
  font-size: 20px;
  color: #00D2A0;
  flex-shrink: 0;
  margin-top: 2px;
}

.security-note p {
  margin: 0;
  color: #636E72;
  font-size: 13px;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 991px) {
  .forgot-password-form-section {
    padding: 20px;
  }

  .form-container {
    max-width: 100%;
  }

  .help-links {
    grid-template-columns: 1fr;
  }
}
</style>

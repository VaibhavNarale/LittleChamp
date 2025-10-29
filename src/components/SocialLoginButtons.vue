<script setup>
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const loginWithGoogle = () => {
  // Redirect to backend OAuth endpoint
  window.location.href = `${API_BASE_URL}/auth/google`
}

const loginWithFacebook = () => {
  // Redirect to backend OAuth endpoint
  window.location.href = `${API_BASE_URL}/auth/facebook`
}
</script>

<template>
  <div class="social-login">
    <button type="button" class="social-btn google-btn" @click="loginWithGoogle">
      <div class="social-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8055 10.2292C19.8055 9.55056 19.7501 8.86667 19.6338 8.19556H10.2V12.0489H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0878V17.5866H16.825C18.7172 15.8444 19.8055 13.2722 19.8055 10.2292Z" fill="#4285F4"/>
          <path d="M10.2 20C12.9503 20 15.2728 19.1044 16.825 17.5867L13.6025 15.0878C12.7033 15.6978 11.5544 16.0422 10.2 16.0422C7.54832 16.0422 5.30193 14.2822 4.52087 11.9111H1.18555V14.4822C2.77225 17.6533 6.32886 20 10.2 20Z" fill="#34A853"/>
          <path d="M4.52087 11.9111C4.09098 10.6689 4.09098 9.33333 4.52087 8.09111V5.52H1.18555C-0.401816 8.66889 -0.401816 12.3311 1.18555 15.48L4.52087 11.9111Z" fill="#FBBC04"/>
          <path d="M10.2 3.95778C11.6339 3.936 13.0179 4.47111 14.0522 5.45778L16.8935 2.61667C15.1882 0.991111 12.9353 0.0933333 10.2 0.116667C6.32886 0.116667 2.77225 2.46333 1.18555 5.63444L4.52087 8.20556C5.30193 5.83444 7.54832 3.95778 10.2 3.95778Z" fill="#EA4335"/>
        </svg>
      </div>
      <span>Continue with Google</span>
    </button>

    <button type="button" class="social-btn facebook-btn" @click="loginWithFacebook">
      <div class="social-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
        </svg>
      </div>
      <span>Continue with Facebook</span>
    </button>
  </div>

  <div class="divider">
    <span>Or continue with email</span>
  </div>
</template>

<style scoped>
/* Social Login */
.social-login {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 20px;
  border-radius: 12px;
  border: 2px solid #E0E0E0;
  background: white;
  color: #2D3436;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
  transition: width 0.3s ease;
}

.social-btn:hover::before {
  width: 100%;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.social-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.social-icon svg {
  width: 100%;
  height: 100%;
}

.social-btn span {
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

.google-btn:hover {
  border-color: #4285F4;
  background: #F8FBFF;
}

.facebook-btn:hover {
  border-color: #1877F2;
  background: #F7FAFF;
}

.divider {
  text-align: center;
  margin: 30px 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 33%;
  height: 1px;
  background: #E0E0E0;
}

.divider::before { left: 0; }
.divider::after { right: 0; }

.divider span {
  background: white;
  padding: 0 15px;
  color: #636E72;
  font-size: 14px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .social-login {
    grid-template-columns: 1fr;
  }

  .social-btn span {
    font-size: 14px;
  }
}
</style>

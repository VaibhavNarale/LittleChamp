<script setup>
import { ref } from 'vue'
import api from '@/utils/api'
import DocumentUploadBox from '@/components/DocumentUploadBox.vue'
import RegistrationInfo from '@/components/RegistrationInfo.vue'

// "How the doctor program works" — shown above the form
const doctorInfoCards = [
  {
    variant: 'green',
    icon: 'fas fa-calendar-check',
    step: 'Twice Every Month',
    title: 'Monthly Meet-Ups',
    text: 'Meet families through two friendly sessions every month — for guidance, check-ins and ongoing support.',
  },
  {
    variant: 'whatsapp',
    icon: 'fab fa-whatsapp',
    step: 'Anytime',
    title: 'WhatsApp Support',
    text: 'Parents can message you directly on WhatsApp for quick questions and timely, caring advice.',
  },
  {
    variant: 'navy',
    icon: 'fas fa-hospital',
    step: 'In Person',
    title: 'Visit Your Branch',
    text: 'Parents and children can visit your branch for warm, face-to-face consultations whenever needed.',
  },
]

// Form fields
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  specialization: '',
  registrationNumber: '',
  experience: '',
  clinic: '',
  city: '',
  about: '',
})

// Document uploads
const identityProof = ref(null)
const certificateDoc = ref(null)

const agreeTerms = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const specializations = [
  'Pediatrician',
  'Child Psychologist',
  'Speech Therapist',
  'Occupational Therapist',
  'Developmental Specialist',
  'General Physician',
  'Other',
]

const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validation
  if (
    !form.value.fullName ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.specialization ||
    !form.value.registrationNumber
  ) {
    errorMessage.value = 'Please fill in all the required fields.'
    return
  }

  if (!identityProof.value) {
    errorMessage.value = 'Please upload your Identity Proof.'
    return
  }

  if (!certificateDoc.value) {
    errorMessage.value =
      'Please upload your Medical Certificate / Registration Document.'
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value = 'Please agree to the Terms of Service to continue.'
    return
  }

  loading.value = true

  try {
    const payload = new FormData()
    payload.append('full_name', form.value.fullName)
    payload.append('email', form.value.email)
    payload.append('phone', form.value.phone)
    payload.append('specialization', form.value.specialization)
    payload.append('registration_number', form.value.registrationNumber)
    payload.append('experience_years', form.value.experience)
    payload.append('clinic_name', form.value.clinic)
    payload.append('city', form.value.city)
    payload.append('about', form.value.about)
    payload.append('identity_proof', identityProof.value)
    payload.append('certificate_document', certificateDoc.value)

    await api.post('/doctor/register', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    successMessage.value =
      'Thank you! Your doctor registration has been submitted. Our team will review your documents and get back to you soon. 🎉'
    resetForm()
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message ||
      err.response?.data?.['sub-title'] ||
      'Something went wrong while submitting. Please try again.'
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  form.value = {
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    registrationNumber: '',
    experience: '',
    clinic: '',
    city: '',
    about: '',
  }
  identityProof.value = null
  certificateDoc.value = null
  agreeTerms.value = false
}
</script>

<template>
  <!--======== Hero Section ========-->
  <section class="reg-hero-section">
    <div class="reg-hero-bg reg-hero-bg--doctor">
      <div class="reg-hero-particles">
        <span
          v-for="n in 6"
          :key="n"
          class="particle"
          :style="{ animationDelay: `${n * 0.5}s` }"
        ></span>
      </div>
      <div class="container">
        <div class="reg-hero-content">
          <nav class="modern-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">Doctor Registration</span>
          </nav>

          <div class="hero-badge">
            <i class="fas fa-user-md"></i>
            <span>For Health Professionals</span>
          </div>

          <h1 class="reg-hero-title">
            Join Our Circle of
            <span class="gradient-text-light d-block">Caring Doctors</span>
          </h1>

          <p class="reg-hero-description">
            Partner with Little Champ to support children's growth and
            well-being. Register below and upload your documents to get started!
          </p>
        </div>
      </div>
    </div>

    <div class="hero-wave-bottom">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </section>

  <!--======== How the Program Works ========-->
  <RegistrationInfo
    eyebrow="How Our Doctor Program Works"
    eyebrow-icon="fas fa-stethoscope"
    title-lead="Three Ways You'll"
    title-accent="Care for Families"
    subtitle="Before you register, here's what being a Little Champ partner doctor looks like."
    :cards="doctorInfoCards"
  />

  <!--======== Form Section ========-->
  <section class="reg-section">
    <div class="container">
      <div class="reg-wrapper">
        <div class="row g-0">
          <!-- Left Info Panel -->
          <div class="col-lg-5">
            <div class="reg-panel reg-panel--doctor">
              <div class="panel-mascot">
                <i class="fas fa-stethoscope"></i>
              </div>
              <h2 class="panel-title">Become a<br />Partner Doctor</h2>
              <p class="panel-desc">
                Help us make learning safe, joyful and healthy for every child.
              </p>

              <ul class="panel-perks">
                <li>
                  <i class="fas fa-heart"></i> Support children's development
                </li>
                <li>
                  <i class="fas fa-shield-alt"></i> Verified & trusted profile
                </li>
                <li>
                  <i class="fas fa-calendar-check"></i> Flexible engagement
                </li>
                <li>
                  <i class="fas fa-users"></i> Connect with caring families
                </li>
              </ul>

              <div class="panel-decor panel-decor--1"></div>
              <div class="panel-decor panel-decor--2"></div>
            </div>
          </div>

          <!-- Right Form Panel -->
          <div class="col-lg-7">
            <div class="reg-form-panel">
              <h2 class="form-panel-title">Doctor Registration Form</h2>
              <p class="form-panel-desc">
                Fields marked with <span class="req-star">*</span> are required.
              </p>

              <div v-if="successMessage" class="alert alert-success">
                <i class="fas fa-check-circle me-2"></i>{{ successMessage }}
              </div>
              <div v-if="errorMessage" class="alert alert-danger">
                <i class="fas fa-exclamation-circle me-2"></i>{{ errorMessage }}
              </div>

              <form @submit.prevent="handleSubmit">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="field-label"
                      >Full Name <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.fullName"
                      type="text"
                      class="field-input"
                      placeholder="Dr. Aarav Sharma"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Email Address <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.email"
                      type="email"
                      class="field-input"
                      placeholder="doctor@example.com"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Phone Number <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="field-input"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Specialization <span class="req-star">*</span></label
                    >
                    <select v-model="form.specialization" class="field-input">
                      <option value="" disabled>Select specialization</option>
                      <option v-for="s in specializations" :key="s" :value="s">
                        {{ s }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Medical Registration No.
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.registrationNumber"
                      type="text"
                      class="field-input"
                      placeholder="e.g. MH-123456"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Years of Experience</label>
                    <input
                      v-model="form.experience"
                      type="number"
                      min="0"
                      class="field-input"
                      placeholder="e.g. 8"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Clinic / Hospital Name</label>
                    <input
                      v-model="form.clinic"
                      type="text"
                      class="field-input"
                      placeholder="Sunshine Children's Clinic"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">City</label>
                    <input
                      v-model="form.city"
                      type="text"
                      class="field-input"
                      placeholder="Mumbai"
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">About You</label>
                    <textarea
                      v-model="form.about"
                      class="field-input field-textarea"
                      rows="4"
                      placeholder="Tell us a little about your practice and how you'd like to help..."
                    ></textarea>
                  </div>

                  <!-- Documents Upload Section -->
                  <div class="col-12">
                    <div class="docs-section">
                      <div class="docs-header">
                        <div class="docs-header-icon">
                          <i class="fas fa-folder-open"></i>
                        </div>
                        <div>
                          <h3 class="docs-title">Documents Upload</h3>
                          <p class="docs-subtitle">
                            Please upload clear copies of the documents below.
                          </p>
                        </div>
                      </div>

                      <div class="row g-3">
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="identityProof"
                            label="Identity Proof"
                            icon="fas fa-id-card"
                            hint="Aadhaar / Passport / PAN — PNG, JPG or PDF (max 5 MB)"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="certificateDoc"
                            label="Medical Certificate / Registration Document"
                            icon="fas fa-file-medical"
                            hint="Degree / Council Registration — PNG, JPG or PDF (max 5 MB)"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Terms -->
                  <div class="col-12">
                    <label class="reg-checkbox">
                      <input v-model="agreeTerms" type="checkbox" />
                      <span class="checkmark"></span>
                      <span class="checkbox-label">
                        I confirm the information provided is accurate and I
                        agree to the
                        <router-link to="/terms" class="link"
                          >Terms of Service</router-link
                        >
                        and
                        <router-link to="/privacy" class="link"
                          >Privacy Policy</router-link
                        >.
                      </span>
                    </label>
                  </div>

                  <div class="col-12 mt-2">
                    <button
                      type="submit"
                      class="submit-btn"
                      :disabled="loading"
                    >
                      <span v-if="!loading">
                        Submit Registration
                        <i class="fas fa-paper-plane ms-2"></i>
                      </span>
                      <span v-else>
                        <i class="fas fa-spinner fa-spin me-2"></i>Submitting...
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/styles/registration-forms.css';

.reg-hero-bg--doctor {
  background: linear-gradient(135deg, #4a8b3f 0%, #3a7a30 40%, #1b1464 100%);
}

.reg-panel--doctor {
  background: linear-gradient(160deg, #4a8b3f 0%, #2f6e29 100%);
}
</style>

<script setup>
import { ref } from 'vue'
import api from '@/utils/api'
import DocumentUploadBox from '@/components/DocumentUploadBox.vue'
import RegistrationInfo from '@/components/RegistrationInfo.vue'

// "What joining brings to your playgroup" — shown above the form
const playgroupInfoCards = [
  {
    variant: 'pink',
    icon: 'fas fa-gamepad',
    step: '500+ Games',
    title: 'Playful Learning',
    text: 'Little learners explore Maths, reading and craft through joyful, age-appropriate games they love.',
  },
  {
    variant: 'amber',
    icon: 'fas fa-chart-line',
    step: 'Stay In The Loop',
    title: 'Parent Updates',
    text: 'Parents receive regular progress updates, so every little milestone gets celebrated together.',
  },
  {
    variant: 'navy',
    icon: 'fas fa-shield-alt',
    step: '100% Safe',
    title: 'Safe & Guided',
    text: 'An ad-free, monitored space with teacher dashboards to gently guide every child through the day.',
  },
]

// Form fields
const form = ref({
  playgroupName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  playgroupType: '',
  registrationNumber: '',
  childCount: '',
  city: '',
  address: '',
  about: '',
})

// Document uploads
const identityProof = ref(null)
const registrationDoc = ref(null)

const agreeTerms = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const playgroupTypes = [
  'Playgroup',
  'Pre-Nursery',
  'Nursery',
  'LKG / UKG',
  'Daycare / Crèche',
  'Other',
]

const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (
    !form.value.playgroupName ||
    !form.value.contactPerson ||
    !form.value.email ||
    !form.value.phone ||
    !form.value.playgroupType
  ) {
    errorMessage.value = 'Please fill in all the required fields.'
    return
  }

  if (!identityProof.value) {
    errorMessage.value = "Please upload the authorized person's Identity Proof."
    return
  }

  if (!registrationDoc.value) {
    errorMessage.value =
      'Please upload the Playgroup Registration / License Document.'
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value = 'Please agree to the Terms of Service to continue.'
    return
  }

  loading.value = true

  try {
    const payload = new FormData()
    payload.append('playgroup_name', form.value.playgroupName)
    payload.append('contact_person', form.value.contactPerson)
    payload.append('designation', form.value.designation)
    payload.append('email', form.value.email)
    payload.append('phone', form.value.phone)
    payload.append('playgroup_type', form.value.playgroupType)
    payload.append('registration_number', form.value.registrationNumber)
    payload.append('child_count', form.value.childCount)
    payload.append('city', form.value.city)
    payload.append('address', form.value.address)
    payload.append('about', form.value.about)
    payload.append('identity_proof', identityProof.value)
    payload.append('registration_document', registrationDoc.value)

    await api.post('/playgroup/register', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    successMessage.value =
      'Thank you! Your playgroup registration has been submitted. Our team will verify your documents and reach out soon. 🎉'
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
    playgroupName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    playgroupType: '',
    registrationNumber: '',
    childCount: '',
    city: '',
    address: '',
    about: '',
  }
  identityProof.value = null
  registrationDoc.value = null
  agreeTerms.value = false
}
</script>

<template>
  <!--======== Hero Section ========-->
  <section class="reg-hero-section">
    <div class="reg-hero-bg reg-hero-bg--school">
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
            <span class="breadcrumb-current">Playgroup Registration</span>
          </nav>

          <div class="hero-badge">
            <i class="fas fa-child"></i>
            <span>For Playgroups &amp; Pre-Schools</span>
          </div>

          <h1 class="reg-hero-title">
            Bring Joyful Learning to
            <span class="gradient-text-light d-block">Your Little Ones</span>
          </h1>

          <p class="reg-hero-description">
            Register your playgroup with Little Champ and give every little
            learner access to interactive, gamified fun. Upload your documents
            to begin!
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
    eyebrow="How Our Playgroup Program Works"
    eyebrow-icon="fas fa-child"
    title-lead="Everything Your Little Ones"
    title-accent="Need to Thrive"
    subtitle="Before you register, here's what joining Little Champ brings to your playgroup."
    theme="pink"
    :cards="playgroupInfoCards"
  />

  <!--======== Form Section ========-->
  <section class="reg-section">
    <div class="container">
      <div class="reg-wrapper">
        <div class="row g-0">
          <!-- Left Info Panel -->
          <div class="col-lg-5">
            <div class="reg-panel reg-panel--school">
              <div class="panel-mascot">
                <i class="fas fa-child"></i>
              </div>
              <h2 class="panel-title">Register Your<br />Playgroup</h2>
              <p class="panel-desc">
                Join a growing community of playgroups making early learning
                playful and effective.
              </p>

              <ul class="panel-perks">
                <li>
                  <i class="fas fa-gamepad"></i> 500+ interactive learning games
                </li>
                <li>
                  <i class="fas fa-chart-line"></i> Teacher &amp; class
                  dashboards
                </li>
                <li><i class="fas fa-award"></i> Age-appropriate content</li>
                <li>
                  <i class="fas fa-headset"></i> Dedicated support manager
                </li>
              </ul>

              <div class="panel-decor panel-decor--1"></div>
              <div class="panel-decor panel-decor--2"></div>
            </div>
          </div>

          <!-- Right Form Panel -->
          <div class="col-lg-7">
            <div class="reg-form-panel">
              <h2 class="form-panel-title">Playgroup Registration Form</h2>
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
                  <div class="col-12">
                    <label class="field-label"
                      >Playgroup Name <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.playgroupName"
                      type="text"
                      class="field-input"
                      placeholder="Little Stars Playgroup"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Contact Person <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.contactPerson"
                      type="text"
                      class="field-input"
                      placeholder="Principal / Coordinator name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Designation</label>
                    <input
                      v-model="form.designation"
                      type="text"
                      class="field-input"
                      placeholder="e.g. Principal"
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
                      placeholder="playgroup@example.com"
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
                      >Playgroup Type <span class="req-star">*</span></label
                    >
                    <select v-model="form.playgroupType" class="field-input">
                      <option value="" disabled>Select type</option>
                      <option v-for="t in playgroupTypes" :key="t" :value="t">
                        {{ t }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >Registration / License No.</label
                    >
                    <input
                      v-model="form.registrationNumber"
                      type="text"
                      class="field-input"
                      placeholder="e.g. REG-123456"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">Number of Children</label>
                    <input
                      v-model="form.childCount"
                      type="number"
                      min="0"
                      class="field-input"
                      placeholder="e.g. 45"
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
                    <label class="field-label">Playgroup Address</label>
                    <input
                      v-model="form.address"
                      type="text"
                      class="field-input"
                      placeholder="Street, area, pin code"
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">About the Playgroup</label>
                    <textarea
                      v-model="form.about"
                      class="field-input field-textarea"
                      rows="4"
                      placeholder="Tell us about your playgroup and what you're looking for..."
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
                            label="Identity Proof (Authorized Person)"
                            icon="fas fa-id-card"
                            hint="Aadhaar / Passport / PAN — PNG, JPG or PDF (max 5 MB)"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="registrationDoc"
                            label="Playgroup Registration / License Document"
                            icon="fas fa-certificate"
                            hint="Registration / License certificate — PNG, JPG or PDF (max 5 MB)"
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

.reg-hero-bg--school {
  background: linear-gradient(135deg, #e91e8c 0%, #b5179e 45%, #1b1464 100%);
}

.reg-panel--school {
  background: linear-gradient(160deg, #e91e8c 0%, #b5179e 100%);
}
</style>

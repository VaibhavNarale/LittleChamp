<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '@/utils/api'
import DocumentUploadBox from '@/components/DocumentUploadBox.vue'
import RegistrationInfo from '@/components/RegistrationInfo.vue'

const { t } = useI18n()

// "How the doctor program works" — shown above the form
const doctorInfoCards = computed(() => [
  {
    variant: 'green',
    icon: 'fas fa-calendar-check',
    step: t('registrationInfo.doctor.cards.monthly.step'),
    title: t('registrationInfo.doctor.cards.monthly.title'),
    text: t('registrationInfo.doctor.cards.monthly.text'),
  },
  {
    variant: 'whatsapp',
    icon: 'fab fa-whatsapp',
    step: t('registrationInfo.doctor.cards.whatsapp.step'),
    title: t('registrationInfo.doctor.cards.whatsapp.title'),
    text: t('registrationInfo.doctor.cards.whatsapp.text'),
  },
  {
    variant: 'navy',
    icon: 'fas fa-hospital',
    step: t('registrationInfo.doctor.cards.branch.step'),
    title: t('registrationInfo.doctor.cards.branch.title'),
    text: t('registrationInfo.doctor.cards.branch.text'),
  },
])

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

const specializations = computed(() => [
  {
    value: 'Pediatrician',
    label: t('doctorRegistration.specializations.pediatrician'),
  },
  {
    value: 'Child Psychologist',
    label: t('doctorRegistration.specializations.psychologist'),
  },
  {
    value: 'Speech Therapist',
    label: t('doctorRegistration.specializations.speechTherapist'),
  },
  {
    value: 'Occupational Therapist',
    label: t('doctorRegistration.specializations.occupationalTherapist'),
  },
  {
    value: 'Developmental Specialist',
    label: t('doctorRegistration.specializations.developmentalSpecialist'),
  },
  {
    value: 'General Physician',
    label: t('doctorRegistration.specializations.generalPhysician'),
  },
  { value: 'Other', label: t('doctorRegistration.specializations.other') },
])

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
    errorMessage.value = t('doctorRegistration.messages.requiredFields')
    return
  }

  if (!identityProof.value) {
    errorMessage.value = t('doctorRegistration.messages.uploadIdentity')
    return
  }

  if (!certificateDoc.value) {
    errorMessage.value = t('doctorRegistration.messages.uploadCertificate')
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value = t('doctorRegistration.messages.agreeTerms')
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

    successMessage.value = t('doctorRegistration.messages.success')
    resetForm()
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message ||
      err.response?.data?.['sub-title'] ||
      t('doctorRegistration.messages.error')
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
            <router-link to="/" class="breadcrumb-link">{{
              $t('doctorRegistration.hero.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('doctorRegistration.hero.breadcrumb')
            }}</span>
          </nav>

          <div class="hero-badge">
            <i class="fas fa-user-md"></i>
            <span>{{ $t('doctorRegistration.hero.badge') }}</span>
          </div>

          <h1 class="reg-hero-title">
            {{ $t('doctorRegistration.hero.titleLead') }}
            <span class="gradient-text-light d-block">{{
              $t('doctorRegistration.hero.titleAccent')
            }}</span>
          </h1>

          <p class="reg-hero-description">
            {{ $t('doctorRegistration.hero.description') }}
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
    :eyebrow="$t('registrationInfo.doctor.eyebrow')"
    eyebrow-icon="fas fa-stethoscope"
    :title-lead="$t('registrationInfo.doctor.titleLead')"
    :title-accent="$t('registrationInfo.doctor.titleAccent')"
    :subtitle="$t('registrationInfo.doctor.subtitle')"
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
              <h2 class="panel-title">
                {{ $t('doctorRegistration.panel.title1') }}<br />{{
                  $t('doctorRegistration.panel.title2')
                }}
              </h2>
              <p class="panel-desc">
                {{ $t('doctorRegistration.panel.desc') }}
              </p>

              <ul class="panel-perks">
                <li>
                  <i class="fas fa-heart"></i>
                  {{ $t('doctorRegistration.panel.perks.development') }}
                </li>
                <li>
                  <i class="fas fa-shield-alt"></i>
                  {{ $t('doctorRegistration.panel.perks.profile') }}
                </li>
                <li>
                  <i class="fas fa-calendar-check"></i>
                  {{ $t('doctorRegistration.panel.perks.flexible') }}
                </li>
                <li>
                  <i class="fas fa-users"></i>
                  {{ $t('doctorRegistration.panel.perks.families') }}
                </li>
              </ul>

              <div class="panel-decor panel-decor--1"></div>
              <div class="panel-decor panel-decor--2"></div>
            </div>
          </div>

          <!-- Right Form Panel -->
          <div class="col-lg-7">
            <div class="reg-form-panel">
              <h2 class="form-panel-title">
                {{ $t('doctorRegistration.form.title') }}
              </h2>
              <p class="form-panel-desc">
                {{ $t('doctorRegistration.form.requiredBefore') }}
                <span class="req-star">*</span>
                {{ $t('doctorRegistration.form.requiredAfter') }}
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
                      >{{ $t('doctorRegistration.fields.fullName') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.fullName"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.fullNamePlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('doctorRegistration.fields.email') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.email"
                      type="email"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.emailPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('doctorRegistration.fields.phone') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.phonePlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('doctorRegistration.fields.specialization') }}
                      <span class="req-star">*</span></label
                    >
                    <select v-model="form.specialization" class="field-input">
                      <option value="" disabled>
                        {{
                          $t(
                            'doctorRegistration.fields.specializationPlaceholder'
                          )
                        }}
                      </option>
                      <option
                        v-for="s in specializations"
                        :key="s.value"
                        :value="s.value"
                      >
                        {{ s.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('doctorRegistration.fields.registrationNumber') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.registrationNumber"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t(
                          'doctorRegistration.fields.registrationNumberPlaceholder'
                        )
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('doctorRegistration.fields.experience')
                    }}</label>
                    <input
                      v-model="form.experience"
                      type="number"
                      min="0"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.experiencePlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('doctorRegistration.fields.clinic')
                    }}</label>
                    <input
                      v-model="form.clinic"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.clinicPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('doctorRegistration.fields.city')
                    }}</label>
                    <input
                      v-model="form.city"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t('doctorRegistration.fields.cityPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">{{
                      $t('doctorRegistration.fields.about')
                    }}</label>
                    <textarea
                      v-model="form.about"
                      class="field-input field-textarea"
                      rows="4"
                      :placeholder="
                        $t('doctorRegistration.fields.aboutPlaceholder')
                      "
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
                          <h3 class="docs-title">
                            {{ $t('doctorRegistration.docs.title') }}
                          </h3>
                          <p class="docs-subtitle">
                            {{ $t('doctorRegistration.docs.subtitle') }}
                          </p>
                        </div>
                      </div>

                      <div class="row g-3">
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="identityProof"
                            :label="$t('doctorRegistration.docs.identityLabel')"
                            icon="fas fa-id-card"
                            :hint="$t('doctorRegistration.docs.identityHint')"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="certificateDoc"
                            :label="
                              $t('doctorRegistration.docs.certificateLabel')
                            "
                            icon="fas fa-file-medical"
                            :hint="
                              $t('doctorRegistration.docs.certificateHint')
                            "
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
                        {{ $t('doctorRegistration.terms.text') }}
                        <router-link to="/terms" class="link">{{
                          $t('doctorRegistration.terms.termsOfService')
                        }}</router-link>
                        {{ $t('doctorRegistration.terms.and') }}
                        <router-link to="/privacy" class="link">{{
                          $t('doctorRegistration.terms.privacyPolicy')
                        }}</router-link
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
                        {{ $t('doctorRegistration.button.submit') }}
                        <i class="fas fa-paper-plane ms-2"></i>
                      </span>
                      <span v-else>
                        <i class="fas fa-spinner fa-spin me-2"></i
                        >{{ $t('doctorRegistration.button.submitting') }}
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

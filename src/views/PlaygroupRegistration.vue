<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '@/utils/api'
import DocumentUploadBox from '@/components/DocumentUploadBox.vue'
import RegistrationInfo from '@/components/RegistrationInfo.vue'

const { t } = useI18n()

// "What joining brings to your playgroup" — shown above the form
const playgroupInfoCards = computed(() => [
  {
    variant: 'pink',
    icon: 'fas fa-gamepad',
    step: t('registrationInfo.playgroup.cards.games.step'),
    title: t('registrationInfo.playgroup.cards.games.title'),
    text: t('registrationInfo.playgroup.cards.games.text'),
  },
  {
    variant: 'amber',
    icon: 'fas fa-chart-line',
    step: t('registrationInfo.playgroup.cards.updates.step'),
    title: t('registrationInfo.playgroup.cards.updates.title'),
    text: t('registrationInfo.playgroup.cards.updates.text'),
  },
  {
    variant: 'navy',
    icon: 'fas fa-shield-alt',
    step: t('registrationInfo.playgroup.cards.safe.step'),
    title: t('registrationInfo.playgroup.cards.safe.title'),
    text: t('registrationInfo.playgroup.cards.safe.text'),
  },
])

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

const playgroupTypes = computed(() => [
  {
    value: 'Playgroup',
    label: t('playgroupRegistration.playgroupTypes.playgroup'),
  },
  {
    value: 'Pre-Nursery',
    label: t('playgroupRegistration.playgroupTypes.preNursery'),
  },
  {
    value: 'Nursery',
    label: t('playgroupRegistration.playgroupTypes.nursery'),
  },
  {
    value: 'LKG / UKG',
    label: t('playgroupRegistration.playgroupTypes.lkgUkg'),
  },
  {
    value: 'Daycare / Crèche',
    label: t('playgroupRegistration.playgroupTypes.daycare'),
  },
  { value: 'Other', label: t('playgroupRegistration.playgroupTypes.other') },
])

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
    errorMessage.value = t('playgroupRegistration.messages.requiredFields')
    return
  }

  if (!identityProof.value) {
    errorMessage.value = t('playgroupRegistration.messages.uploadIdentity')
    return
  }

  if (!registrationDoc.value) {
    errorMessage.value = t('playgroupRegistration.messages.uploadRegistration')
    return
  }

  if (!agreeTerms.value) {
    errorMessage.value = t('playgroupRegistration.messages.agreeTerms')
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

    successMessage.value = t('playgroupRegistration.messages.success')
    resetForm()
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message ||
      err.response?.data?.['sub-title'] ||
      t('playgroupRegistration.messages.error')
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
            <router-link to="/" class="breadcrumb-link">{{
              $t('playgroupRegistration.hero.home')
            }}</router-link>
            <i class="fas fa-chevron-right"></i>
            <span class="breadcrumb-current">{{
              $t('playgroupRegistration.hero.breadcrumb')
            }}</span>
          </nav>

          <div class="hero-badge">
            <i class="fas fa-child"></i>
            <span>{{ $t('playgroupRegistration.hero.badge') }}</span>
          </div>

          <h1 class="reg-hero-title">
            {{ $t('playgroupRegistration.hero.titleLead') }}
            <span class="gradient-text-light d-block">{{
              $t('playgroupRegistration.hero.titleAccent')
            }}</span>
          </h1>

          <p class="reg-hero-description">
            {{ $t('playgroupRegistration.hero.description') }}
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
    :eyebrow="$t('registrationInfo.playgroup.eyebrow')"
    eyebrow-icon="fas fa-child"
    :title-lead="$t('registrationInfo.playgroup.titleLead')"
    :title-accent="$t('registrationInfo.playgroup.titleAccent')"
    :subtitle="$t('registrationInfo.playgroup.subtitle')"
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
              <h2 class="panel-title">
                {{ $t('playgroupRegistration.panel.title1') }}<br />{{
                  $t('playgroupRegistration.panel.title2')
                }}
              </h2>
              <p class="panel-desc">
                {{ $t('playgroupRegistration.panel.desc') }}
              </p>

              <ul class="panel-perks">
                <li>
                  <i class="fas fa-gamepad"></i>
                  {{ $t('playgroupRegistration.panel.perks.games') }}
                </li>
                <li>
                  <i class="fas fa-chart-line"></i>
                  {{ $t('playgroupRegistration.panel.perks.dashboards') }}
                </li>
                <li>
                  <i class="fas fa-award"></i>
                  {{ $t('playgroupRegistration.panel.perks.content') }}
                </li>
                <li>
                  <i class="fas fa-headset"></i>
                  {{ $t('playgroupRegistration.panel.perks.support') }}
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
                {{ $t('playgroupRegistration.form.title') }}
              </h2>
              <p class="form-panel-desc">
                {{ $t('playgroupRegistration.form.requiredBefore') }}
                <span class="req-star">*</span>
                {{ $t('playgroupRegistration.form.requiredAfter') }}
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
                      >{{ $t('playgroupRegistration.fields.playgroupName') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.playgroupName"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t(
                          'playgroupRegistration.fields.playgroupNamePlaceholder'
                        )
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('playgroupRegistration.fields.contactPerson') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.contactPerson"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t(
                          'playgroupRegistration.fields.contactPersonPlaceholder'
                        )
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.designation')
                    }}</label>
                    <input
                      v-model="form.designation"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t(
                          'playgroupRegistration.fields.designationPlaceholder'
                        )
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('playgroupRegistration.fields.email') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.email"
                      type="email"
                      class="field-input"
                      :placeholder="
                        $t('playgroupRegistration.fields.emailPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('playgroupRegistration.fields.phone') }}
                      <span class="req-star">*</span></label
                    >
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="field-input"
                      :placeholder="
                        $t('playgroupRegistration.fields.phonePlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label"
                      >{{ $t('playgroupRegistration.fields.playgroupType') }}
                      <span class="req-star">*</span></label
                    >
                    <select v-model="form.playgroupType" class="field-input">
                      <option value="" disabled>
                        {{
                          $t(
                            'playgroupRegistration.fields.playgroupTypePlaceholder'
                          )
                        }}
                      </option>
                      <option
                        v-for="pt in playgroupTypes"
                        :key="pt.value"
                        :value="pt.value"
                      >
                        {{ pt.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.registrationNumber')
                    }}</label>
                    <input
                      v-model="form.registrationNumber"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t(
                          'playgroupRegistration.fields.registrationNumberPlaceholder'
                        )
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.childCount')
                    }}</label>
                    <input
                      v-model="form.childCount"
                      type="number"
                      min="0"
                      class="field-input"
                      :placeholder="
                        $t('playgroupRegistration.fields.childCountPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.city')
                    }}</label>
                    <input
                      v-model="form.city"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t('playgroupRegistration.fields.cityPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.address')
                    }}</label>
                    <input
                      v-model="form.address"
                      type="text"
                      class="field-input"
                      :placeholder="
                        $t('playgroupRegistration.fields.addressPlaceholder')
                      "
                    />
                  </div>
                  <div class="col-12">
                    <label class="field-label">{{
                      $t('playgroupRegistration.fields.about')
                    }}</label>
                    <textarea
                      v-model="form.about"
                      class="field-input field-textarea"
                      rows="4"
                      :placeholder="
                        $t('playgroupRegistration.fields.aboutPlaceholder')
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
                            {{ $t('playgroupRegistration.docs.title') }}
                          </h3>
                          <p class="docs-subtitle">
                            {{ $t('playgroupRegistration.docs.subtitle') }}
                          </p>
                        </div>
                      </div>

                      <div class="row g-3">
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="identityProof"
                            :label="
                              $t('playgroupRegistration.docs.identityLabel')
                            "
                            icon="fas fa-id-card"
                            :hint="
                              $t('playgroupRegistration.docs.identityHint')
                            "
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <DocumentUploadBox
                            v-model="registrationDoc"
                            :label="
                              $t('playgroupRegistration.docs.registrationLabel')
                            "
                            icon="fas fa-certificate"
                            :hint="
                              $t('playgroupRegistration.docs.registrationHint')
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
                        {{ $t('playgroupRegistration.terms.text') }}
                        <router-link to="/terms" class="link">{{
                          $t('playgroupRegistration.terms.termsOfService')
                        }}</router-link>
                        {{ $t('playgroupRegistration.terms.and') }}
                        <router-link to="/privacy" class="link">{{
                          $t('playgroupRegistration.terms.privacyPolicy')
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
                        {{ $t('playgroupRegistration.button.submit') }}
                        <i class="fas fa-paper-plane ms-2"></i>
                      </span>
                      <span v-else>
                        <i class="fas fa-spinner fa-spin me-2"></i
                        >{{ $t('playgroupRegistration.button.submitting') }}
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

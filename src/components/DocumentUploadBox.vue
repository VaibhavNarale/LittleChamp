<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  modelValue: {
    type: [File, null],
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'fas fa-cloud-upload-alt',
  },
  accept: {
    type: String,
    default: '.png,.jpg,.jpeg,.pdf',
  },
  // Max size in MB
  maxSize: {
    type: Number,
    default: 5,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const isDragging = ref(false)
const errorText = ref('')
const previewUrl = ref('')

const file = computed(() => props.modelValue)

const isImage = computed(
  () => file.value && file.value.type.startsWith('image/')
)

const fileSizeLabel = computed(() => {
  if (!file.value) return ''
  const kb = file.value.size / 1024
  return kb < 1024 ? `${kb.toFixed(0)} KB` : `${(kb / 1024).toFixed(2)} MB`
})

const openPicker = () => {
  fileInput.value?.click()
}

const validateAndSet = (selected) => {
  errorText.value = ''

  if (!selected) return

  // Size check
  if (selected.size > props.maxSize * 1024 * 1024) {
    errorText.value = t('documentUpload.errors.tooBig', { max: props.maxSize })
    return
  }

  // Type check (against accept list)
  const allowed = props.accept.split(',').map((t) => t.trim().toLowerCase())
  const ext = '.' + selected.name.split('.').pop().toLowerCase()
  if (allowed.length && !allowed.includes(ext)) {
    errorText.value = t('documentUpload.errors.invalidType', {
      types: allowed.join(', '),
    })
    return
  }

  // Build preview for images
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = selected.type.startsWith('image/')
    ? URL.createObjectURL(selected)
    : ''

  emit('update:modelValue', selected)
}

const onSelect = (e) => {
  validateAndSet(e.target.files?.[0])
}

const onDrop = (e) => {
  isDragging.value = false
  validateAndSet(e.dataTransfer.files?.[0])
}

const removeFile = () => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = ''
  }
  errorText.value = ''
  if (fileInput.value) fileInput.value.value = ''
  emit('update:modelValue', null)
}
</script>

<template>
  <div class="doc-upload">
    <label class="doc-label">
      {{ label }}
      <span v-if="required" class="doc-required">*</span>
    </label>

    <!-- Empty state: drop zone -->
    <div
      v-if="!file"
      class="doc-dropzone"
      :class="{ dragging: isDragging, 'has-error': errorText }"
      role="button"
      tabindex="0"
      @click="openPicker"
      @keydown.enter.prevent="openPicker"
      @keydown.space.prevent="openPicker"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="onDrop"
    >
      <div class="doc-icon">
        <i :class="icon"></i>
      </div>
      <p class="doc-cta">
        <span class="doc-cta-strong">{{
          $t('documentUpload.clickToUpload')
        }}</span>
        {{ $t('documentUpload.orDragDrop') }}
      </p>
      <p class="doc-hint">{{ hint || $t('documentUpload.defaultHint') }}</p>
    </div>

    <!-- Filled state: preview card -->
    <div v-else class="doc-preview">
      <div class="doc-preview-media">
        <img v-if="isImage" :src="previewUrl" :alt="file.name" />
        <div v-else class="doc-file-badge">
          <i class="fas fa-file-alt"></i>
          <span>PDF</span>
        </div>
      </div>
      <div class="doc-preview-info">
        <span class="doc-file-name">{{ file.name }}</span>
        <span class="doc-file-meta">
          <i class="fas fa-check-circle"></i>
          {{ $t('documentUpload.uploaded') }} · {{ fileSizeLabel }}
        </span>
      </div>
      <button
        type="button"
        class="doc-remove"
        :title="$t('documentUpload.removeFile')"
        @click="removeFile"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>

    <p v-if="errorText" class="doc-error">
      <i class="fas fa-exclamation-circle"></i> {{ errorText }}
    </p>

    <input
      ref="fileInput"
      type="file"
      class="doc-input-hidden"
      :accept="accept"
      @change="onSelect"
    />
  </div>
</template>

<style scoped>
.doc-upload {
  display: flex;
  flex-direction: column;
}

.doc-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1b1464;
  margin-bottom: 8px;
}

.doc-required {
  color: #e91e8c;
}

.doc-input-hidden {
  display: none;
}

/* Drop zone */
.doc-dropzone {
  border: 2px dashed #c9d3df;
  border-radius: 16px;
  background: #fafbfc;
  padding: 26px 18px;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.doc-dropzone:hover,
.doc-dropzone:focus-visible {
  border-color: #4a8b3f;
  background: #f3faf0;
  outline: none;
  transform: translateY(-2px);
}

.doc-dropzone.dragging {
  border-color: #4a8b3f;
  background: #ecf7e8;
  transform: scale(1.01);
}

.doc-dropzone.has-error {
  border-color: #ff6b6b;
  background: #fff5f5;
}

.doc-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  background: linear-gradient(135deg, #4a8b3f, #5ea750);
  box-shadow: 0 8px 20px rgba(74, 139, 63, 0.3);
}

.doc-dropzone:hover .doc-icon {
  animation: doc-bounce 0.6s ease;
}

@keyframes doc-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}

.doc-cta {
  font-size: 14px;
  color: #4b5563;
  margin: 0 0 4px;
}

.doc-cta-strong {
  color: #4a8b3f;
  font-weight: 700;
}

.doc-hint {
  font-size: 12px;
  color: #9aa3af;
  margin: 0;
}

/* Preview card */
.doc-preview {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border: 2px solid #d4eccb;
  border-radius: 16px;
  background: #f3faf0;
}

.doc-preview-media {
  flex-shrink: 0;
}

.doc-preview-media img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #d4eccb;
}

.doc-file-badge {
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: linear-gradient(135deg, #e91e8c, #f04da3);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.doc-file-badge i {
  font-size: 18px;
}

.doc-file-badge span {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.doc-preview-info {
  flex: 1;
  min-width: 0;
}

.doc-file-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1b1464;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.doc-file-meta {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #4a8b3f;
  margin-top: 3px;
}

.doc-remove {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: none;
  background: white;
  color: #ff6b6b;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.doc-remove:hover {
  background: #ff6b6b;
  color: white;
  transform: rotate(8deg) scale(1.05);
}

.doc-error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #ff6b6b;
  margin: 8px 0 0;
}
</style>

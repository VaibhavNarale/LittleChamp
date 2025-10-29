<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initTemplateScripts, cleanupTemplateScripts } from '@/utils/initScripts'

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    initTemplateScripts()
  }, 100)
})

onBeforeUnmount(() => {
  cleanupTemplateScripts()
})
</script>

<template>
  <!--======== Error Section ========-->
  <section class="vs-error-wrapper parallax" data-bg-src="/assets/img/bg/error-bg.jpg">
    <div class="layer error-shape" data-depth="0.4">
      <img src="/assets/img/normal/astronut.png" alt="astronut">
    </div>
    <div class="container">
      <div class="error-content wow fadeInUp" data-wow-delay="0.1s">
        <span class="h1 error-number">404 Error</span>
        <h1 class="error-title text-white">Page Not Found</h1>
        <p class="error-text text-white">Dramatically deliver enterprise-wide sources whereas interoperable information. Uniquely integrate 24/7 e-tailers after B2B web-readiness. </p>
        <router-link to="/" class="vs-btn wave-btn">Back to Home</router-link>
      </div>
    </div>
  </section>
  <!--======== / Error Section ========-->
</template>

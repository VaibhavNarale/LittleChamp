<script setup>
import { computed } from 'vue'
import footerLogo from '@/assets/footer-logo.png'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    class="footer-wrapper footer-layout3"
    data-bg-src="/assets/img/bg/footer-4.jpg"
  >
    <div class="widget-area">
      <v-container>
        <v-row justify="space-between">
          <!-- About Widget -->
          <v-col xl="auto" md="6" class="wow fadeInUp" data-wow-delay="0.1s">
            <div class="widget footer-widget">
              <div class="vs-widget-about">
                <div class="about-logo">
                  <router-link to="/">
                    <img
                      :src="footerLogo"
                      alt="Mind Growup Jr"
                      class="footer-logo-img"
                    />
                  </router-link>
                </div>
                <p class="about-text">
                  Make learning magical and fun for your child with 500+
                  interactive games for Math, Reading, and Craft & Drawing.
                  Trusted by Indian kids and 100+ teachers worldwide.
                </p>
                <div class="multi-social">
                  <a
                    href="https://facebook.com/mindjrgroup"
                    target="_blank"
                    rel="noopener"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a
                    href="https://twitter.com/mindjrgroup"
                    target="_blank"
                    rel="noopener"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a
                    href="https://instagram.com/mindjrgroup"
                    target="_blank"
                    rel="noopener"
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a
                    href="https://linkedin.com/company/mindjrgroup"
                    target="_blank"
                    rel="noopener"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <a
                    href="https://youtube.com/@mindjrgroup"
                    target="_blank"
                    rel="noopener"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Quick Links Widget -->
          <v-col xl="auto" md="6" class="wow fadeInUp" data-wow-delay="0.1s">
            <div class="widget footer-widget widget_nav_menu">
              <h4 class="widget_title">Quick Links</h4>
              <ul class="menu">
                <li><router-link to="/subjects">Subjects</router-link></li>
                <li><router-link to="/features">Features</router-link></li>
                <li><router-link to="/pricing">Pricing</router-link></li>
                <li>
                  <router-link to="/for-parents">For Parents</router-link>
                </li>
                <li>
                  <router-link to="/for-teachers">For Teachers</router-link>
                </li>
                <li>
                  <router-link to="/for-schools">For Schools</router-link>
                </li>
              </ul>
            </div>
          </v-col>

          <!-- Resources Widget -->
          <v-col xl="auto" md="6" class="wow fadeInUp" data-wow-delay="0.1s">
            <div class="widget footer-widget widget_nav_menu">
              <h4 class="widget_title">Resources</h4>
              <ul class="menu">
                <li><router-link to="/blog">Learning Blog</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li>
                  <router-link to="/contact">Contact Support</router-link>
                </li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </v-col>

          <!-- Contact Widget -->
          <v-col xl="auto" md="6" class="wow fadeInUp" data-wow-delay="0.1s">
            <div class="widget footer-widget">
              <h3 class="widget_title">Contact Us</h3>
              <div class="vs-widget-contact">
                <p class="footer-info">
                  <i class="fas fa-envelope"></i
                  ><a href="mailto:Info@mindgrowupjr.com"
                    >Info@mindgrowupjr.com</a
                  >
                </p>
                <p class="footer-info">
                  <i class="fas fa-phone-alt"></i
                  ><a href="tel:+919821749524">+91 9821749524</a>
                </p>
                <p class="footer-info">
                  <i class="fab fa-instagram"></i
                  ><a
                    href="https://instagram.com/mindgrowupjr"
                    target="_blank"
                    rel="noopener"
                    >@mindgrowupjr</a
                  >
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Copyright -->
    <div class="footer-copyright">
      <v-container>
        <p class="copyright">
          &copy; Copyright {{ currentYear }} Mindgrowup Junior Private Limited.
          All Rights Reserved. |
          <router-link to="/privacy">Privacy Policy</router-link> |
          <router-link to="/terms">Terms of Service</router-link>
        </p>
      </v-container>
    </div>

    <!-- Shape Mockups -->
    <div
      class="shape-mockup movingX d-none d-hd-block"
      data-top="7%"
      data-left="5%"
    >
      <img src="/assets/img/icon/f-i-3-1.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup movingX-reverse d-none d-hd-block"
      data-top="62%"
      data-left="10%"
    >
      <img src="/assets/img/icon/f-i-3-2.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup rotate d-none d-hd-block"
      data-top="69%"
      data-left="32%"
    >
      <img src="/assets/img/icon/f-i-3-3.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup movingX d-none d-hd-block"
      data-top="3%"
      data-left="46%"
    >
      <img src="/assets/img/icon/f-i-3-4.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup movingX-reverse d-none d-hd-block"
      data-top="18%"
      data-right="3%"
    >
      <img src="/assets/img/icon/f-i-3-5.png" alt="shapes" />
    </div>
    <div
      class="shape-mockup movingX d-none d-hd-block"
      data-top="62%"
      data-right="6%"
    >
      <img src="/assets/img/icon/f-i-3-6.png" alt="shapes" />
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
}

/* Footer Logo Styling */
.footer-logo-img {
  max-width: 320px;
  height: auto;
  display: block;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.footer-logo-img:hover {
  transform: scale(1.05);
}

.about-logo {
  margin-bottom: 0 !important;
  padding-top: 0 !important;
}

.vs-widget-about {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.footer-wrapper :deep(.widget-area) {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}

.footer-wrapper :deep(.footer-widget) {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.footer-wrapper :deep(.widget) {
  margin-top: 0 !important;
}

@media (max-width: 991px) {
  .footer-logo-img {
    max-width: 280px;
  }

  .footer-wrapper :deep(.widget-area) {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }
}

@media (max-width: 767px) {
  .footer-logo-img {
    max-width: 240px;
  }

  .footer-wrapper :deep(.widget-area) {
    padding-top: 25px !important;
    padding-bottom: 25px !important;
  }
}

@media (max-width: 575px) {
  .footer-logo-img {
    max-width: 200px;
  }

  .footer-wrapper :deep(.widget-area) {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
}

/* Update text colors for dark background */
.footer-wrapper :deep(.widget_title) {
  color: #ffffff !important;
}

.footer-wrapper :deep(.about-text),
.footer-wrapper :deep(.footer-info),
.footer-wrapper :deep(.menu a),
.footer-wrapper :deep(.copyright),
.footer-wrapper :deep(.copyright a) {
  color: rgba(255, 255, 255, 0.85) !important;
}

.footer-wrapper :deep(.menu a:hover),
.footer-wrapper :deep(.copyright a:hover) {
  color: #fec624 !important;
}

.footer-wrapper :deep(.multi-social a:hover) {
  background: #fec624 !important;
  color: #1e3c72 !important;
  transform: translateY(-3px);
  border-color: #fec624;
}

.footer-wrapper :deep(.footer-copyright) {
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}
</style>

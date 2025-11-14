import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          // Mind Growup Jr Brand Colors
          primary: '#6C63FF',      // Purple - Trust & Learning
          secondary: '#FF6584',    // Pink - Fun & Energy
          accent: '#4ECDC4',       // Teal - Calm & Growth

          // Subject Colors
          math: '#6C5CE7',         // Purple for Math
          reading: '#FD79A8',      // Pink for Reading
          science: '#00B894',      // Green for Science
          earlySkills: '#FFB800',  // Yellow for Early Skills

          // Status Colors
          error: '#FF6B6B',
          info: '#6C63FF',
          success: '#00D2A0',
          warning: '#FFB800',

          // Neutral Colors
          dark: '#2D3436',
          gray: '#636E72',
          lightGray: '#F5F6FA',
        },
      },
    },
  },
})

export default vuetify

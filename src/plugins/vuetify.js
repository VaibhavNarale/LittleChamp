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
          // Little Champ Brand Colors - Matched to Logo
          primary: '#4A8B3F', // Green - "Kinder" in logo
          secondary: '#E91E8C', // Pink - "Garden" in logo
          accent: '#1B1464', // Navy - seed accent in logo

          // Subject Colors
          math: '#6C5CE7', // Purple for Math
          reading: '#FD79A8', // Pink for Reading
          science: '#00B894', // Green for Science
          earlySkills: '#FFB800', // Yellow for Early Skills

          // Status Colors
          error: '#FF6B6B',
          info: '#4A8B3F',
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

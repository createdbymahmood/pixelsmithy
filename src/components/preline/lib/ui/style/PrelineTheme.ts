import {extendTheme} from '@chakra-ui/react'
import {
  Accordion,
  Alert,
  Button,
  Skeleton,
} from '@preline/lib/ui/style/components'

import {inter} from '@/lib/styles/font/inter'

export const PrelineTheme = extendTheme({
  components: {
    Button,
    Skeleton,
    Alert,
    Accordion,
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  colors: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },
  },
})

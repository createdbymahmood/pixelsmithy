import {extendTheme} from '@chakra-ui/react'
import {
  Accordion,
  Alert,
  Button,
  Skeleton,
} from '@preline/lib/ui/style/components'

import {inter} from '@/lib/styles/font/inter'

export const theme = extendTheme({
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
  },
})

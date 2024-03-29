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
  styles: {
    global: () => ({
      '.chakra-collapse': {
        overflow: 'visible !important',
      },
    }),
  },
})

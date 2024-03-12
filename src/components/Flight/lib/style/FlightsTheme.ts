import {createTheme} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

const fontFamily = inter.style.fontFamily

export const FlightsTheme = createTheme({
  fontFamily,
  headings: {
    fontFamily,
  },
})

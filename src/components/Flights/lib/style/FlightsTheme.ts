import {createTheme} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

import {colors} from './colors'

const fontFamily = inter.style.fontFamily

export const FlightsTheme = createTheme({
  primaryShade: 5,
  colors,
  fontFamily,
  headings: {
    fontFamily,
  },
})

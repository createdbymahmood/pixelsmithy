import {createTheme, rem} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

import {colors} from './colors'
import {components} from './customizationts'

const fontFamily = inter.style.fontFamily
export const FlightsTheme = createTheme({
  colors,
  fontFamily,
  components,
  primaryShade: 5,
  headings: {fontFamily},
  fontSizes: {
    xl: rem(20),
    lg: rem(18),
    md: rem(16),
    sm: rem(14),
    xs: rem(12),
  },
})
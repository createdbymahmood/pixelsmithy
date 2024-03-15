import {createTheme, rem} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

import {black, colors} from './colors'
import {components} from './customizationts'

const fontFamily = inter.style.fontFamily
export const FlightsTheme = createTheme({
  colors,
  fontFamily,
  components,
  black,
  primaryShade: 5,
  primaryColor: 'primary',
  headings: {fontFamily},
  fontSizes: {
    xl: rem(20),
    lg: rem(18),
    md: rem(16),
    sm: rem(14),
    xs: rem(12),
  },
  spacing: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    xxl: rem(28),
  },
})

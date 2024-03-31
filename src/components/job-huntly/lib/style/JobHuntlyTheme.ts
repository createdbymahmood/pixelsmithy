import {createTheme, rem} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

import {colors} from './colors'

const fontFamily = inter.style.fontFamily

export const JobHuntlyTheme = createTheme({
  primaryColor: 'primary',
  fontFamily,
  colors,
  headings: {
    fontFamily,
    sizes: {
      h1: {fontSize: rem(72), lineHeight: rem(79.2), fontWeight: '700'},
      h2: {fontSize: rem(48), lineHeight: rem(52.8), fontWeight: '700'},
      h3: {fontSize: rem(32), lineHeight: rem(38.4), fontWeight: '700'},
      h4: {fontSize: rem(24), lineHeight: rem(28.8), fontWeight: '700'},
      h5: {fontSize: rem(20), lineHeight: rem(24), fontWeight: '700'},
    },
  },
  spacing: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    xxl: rem(28),
    xxxl: rem(32),
  },
})

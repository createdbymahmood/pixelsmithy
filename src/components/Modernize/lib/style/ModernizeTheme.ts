'use client'

import {createTheme, rem} from '@mantine/core'

import {inter} from '@/lib/styles/font/inter'

import {colors} from './colors'
import {components} from './customizations'

export const ModernizeTheme = createTheme({
  components,
  primaryColor: 'primary',
  colors,
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: inter.style.fontFamily,
    sizes: {
      h1: {fontSize: rem(80), lineHeight: rem(112), fontWeight: '700'},
      h2: {fontSize: rem(64), lineHeight: rem(90), fontWeight: '700'},
      h3: {fontSize: rem(48), lineHeight: rem(66), fontWeight: '700'},
      h4: {fontSize: rem(32), lineHeight: rem(44), fontWeight: '700'},
      h5: {fontSize: rem(24), lineHeight: rem(36), fontWeight: '700'},
      h6: {fontSize: rem(20), lineHeight: rem(28), fontWeight: '700'},
    },
  },
  spacing: {
    xs: rem(16),
    sm: rem(24),
    md: rem(48),
    lg: rem(64),
    xl: rem(80),
    xxl: rem(96),
  },
  lineHeights: {
    sm: rem(20),
    md: rem(24),
    lg: rem(34),
  },
})

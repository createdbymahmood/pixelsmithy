'use client'

import {createTheme, rem} from '@mantine/core'

import {nunitoSans} from '@/lib/styles/font/nunitoSans'

import {components} from './customizations'

export const DashStackTheme = createTheme({
  components,
  primaryColor: 'primary',
  colors: {
    primary: [
      '#e6f1ff',
      '#cddeff',
      '#9abaff',
      '#6394ff',
      '#3673ff',
      '#185fff',
      '#0154ff',
      '#0045e5',
      '#003dcd',
      '#0034b5',
    ],
  },
  fontFamily: nunitoSans.style.fontFamily,

  headings: {
    fontFamily: nunitoSans.style.fontFamily,
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
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
    xxl: rem(48),
  },
})

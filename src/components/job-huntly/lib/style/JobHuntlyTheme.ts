import {clashDisplay} from '@job-huntly/assets/fonts/ClashDisplay/clashDisplay'
import {createTheme, rem} from '@mantine/core'
import {get} from 'lodash-es'

import {epilogue} from '@/lib/styles/font/epilogue'

import {colors} from './colors'
import {components} from './customizations'

const fontFamily = epilogue.style.fontFamily

export const JobHuntlyTheme = createTheme({
  primaryColor: 'primary',
  fontFamily,
  colors,
  components,
  headings: {
    fontFamily: clashDisplay.style.fontFamily,
    sizes: {
      h1: {fontSize: rem(72), lineHeight: rem(79.2), fontWeight: '600'},
      h2: {fontSize: rem(48), lineHeight: rem(52.8), fontWeight: '600'},
      h3: {fontSize: rem(32), lineHeight: rem(38.4), fontWeight: '600'},
      h4: {fontSize: rem(24), lineHeight: rem(28.8), fontWeight: '600'},
      h5: {fontSize: rem(20), lineHeight: rem(24), fontWeight: '600'},
    },
  },
  black: get(colors, 'neutrals.7', '#000') as string,
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: rem(25.6),
    lg: '1.6',
    xl: '1.65',
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
  breakpoints: {
    xxl: '100em',
  },
})

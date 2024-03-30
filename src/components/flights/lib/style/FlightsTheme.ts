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
    xxs: rem(10),
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
  shadows: {
    xs: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
    sm: '0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.1)',
    md: '0 2px 4px -2px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.1)',
    lg: '0 4px 6px -2px rgba(16, 24, 40, 0.05), 0 12px 16px -4px rgba(16, 24, 40, 0.1)',
    xl: '0 15px 10px -4px rgba(16, 24, 40, 0.02), 0 5px 24px -4px rgba(16, 24, 40, 0.15)',
    xxl: '0 24px 48px -12px rgba(16, 24, 40, 0.25)',
    xxxl: '0 32px 64px -12px rgba(16, 24, 40, 0.2)',
    bottomNavigation: '0 -30px 59px 0 rgba(71, 81, 89, 0.04)',
  },
})

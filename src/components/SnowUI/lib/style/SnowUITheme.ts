'use client'

import {createTheme, rem} from '@mantine/core'

import {inter} from '@/components/SnowUI/layout/SnowUIProviders'

import {components} from './customizations'

export const SnowUITheme = createTheme({
  components,
  primaryColor: 'gray',
  primaryShade: 9,
  headings: {
    fontFamily: inter.style.fontFamily,
    sizes: {
      h1: {fontSize: rem(64)},
      h2: {fontSize: rem(48)},
      h3: {fontSize: rem(24)},
      h4: {fontSize: rem(18)},
      h5: {fontSize: rem(14)},
      h6: {fontSize: rem(12)},
    },
  },
})

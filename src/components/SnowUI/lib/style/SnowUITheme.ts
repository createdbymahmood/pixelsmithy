'use client'

import {createTheme} from '@mantine/core'

import {components} from './customizations'

export const SnowUITheme = createTheme({
  components,
  primaryColor: 'gray',
  primaryShade: 9,
})

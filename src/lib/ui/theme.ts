'use client'

import {Button, createTheme} from '@mantine/core'
import {themeToVars} from '@mantine/vanilla-extract'

import {sprinkles} from '@/lib/styles/sprinkles.css'

export const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames(t, props, ctx) {
        return {
          root: sprinkles({borderRadius: 'md'}),
        }
      },
    }),
  },
  primaryShade: 4,

  colors: {
    blue: [
      '#A6D7FF',
      '#8AC0FF',
      '#6FA4FF',
      '#5382FF',
      '#375CFF',
      '#1C31FF',
      '#0000ff',
      '#0000DF',
      '#0000BF',
      '#00009F',
      '#000080',
    ],
  },
})
export const vars = themeToVars(theme)

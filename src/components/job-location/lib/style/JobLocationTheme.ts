'use client'

import './JobLocationDefaultStyles.scss'

import {createTheme} from '@mantine/core'

import {poppins} from '@/lib/styles/font/poppins'

const fontFamily = poppins.style.fontFamily

export const JobLocationTheme = createTheme({
  primaryShade: 4,
  fontFamily,
  headings: {
    fontFamily,
  },
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

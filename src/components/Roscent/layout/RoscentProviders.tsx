'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/core/styles.css'
import '@/lib/styles/global.scss'

import {MantineProvider} from '@mantine/core'
import {RoscentTheme} from '@roscent/lib/style/RoscentTheme'
import type {ReactNode} from 'react'

import {defaultThemeColorScheme} from '@/constants'

interface RoscentProvidersProps {
  children: ReactNode
}

export function RoscentProviders({children}: RoscentProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={RoscentTheme}
    >
      {children}
    </MantineProvider>
  )
}

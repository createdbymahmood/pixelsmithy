'use client'

import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/lib/styles/global.scss'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {JobLocationTheme} from '@/components/JobLocation/lib/style/JobLocationTheme'
import {defaultThemeColorScheme} from '@/constants'

interface JobLocationProvidersProps {
  children: ReactNode
}

export function JobLocationProviders({children}: JobLocationProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={JobLocationTheme}
    >
      {children}
    </MantineProvider>
  )
}

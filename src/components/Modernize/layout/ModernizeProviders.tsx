'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/spotlight/styles.css'
import '@/lib/styles/global.scss'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {ModernizeTheme} from '@/components/Modernize/lib/style/ModernizeTheme'
import {defaultThemeColorScheme} from '@/constants'

interface ModernizeProvidersProps {
  children: ReactNode
}

export function ModernizeProviders({children}: ModernizeProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={ModernizeTheme}
    >
      {children}
    </MantineProvider>
  )
}

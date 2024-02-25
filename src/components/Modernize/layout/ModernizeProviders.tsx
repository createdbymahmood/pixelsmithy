'use client'

import '@mantine/dropzone/styles.css'
import '@mantine/spotlight/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {ModernizeTheme} from '@/components/Modernize/lib/style/ModernizeTheme'
import {defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'

interface ModernizeProvidersProps {
  children: ReactNode
}

export function ModernizeProviders({children}: ModernizeProvidersProps) {
  return (
    <div className={inter.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={ModernizeTheme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}
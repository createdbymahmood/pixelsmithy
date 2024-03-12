'use client'

import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/dates/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {DashStackTheme} from '@/components/DashStack/lib/style/DashStackTheme'
import {defaultThemeColorScheme} from '@/constants'

interface DashStackProvidersProps {
  children: ReactNode
}

export function DashStackProviders({children}: DashStackProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={DashStackTheme}
    >
      {children}
    </MantineProvider>
  )
}

'use client'

import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {DashStackTheme} from '@/components/DashStack/lib/style/DashStackTheme'
import {defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'

interface DashStackProvidersProps {
  children: ReactNode
}

export function DashStackProviders({children}: DashStackProvidersProps) {
  return (
    <div className={inter.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={DashStackTheme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}

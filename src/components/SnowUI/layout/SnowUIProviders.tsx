'use client'

import '@/lib/styles/global.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {SnowUITheme} from '@/components/SnowUI/lib/style/SnowUITheme'
import {defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'

interface JobLocationProvidersProps {
  children: ReactNode
}

export function SnowUIProviders({children}: JobLocationProvidersProps) {
  return (
    <div className={inter.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={SnowUITheme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}

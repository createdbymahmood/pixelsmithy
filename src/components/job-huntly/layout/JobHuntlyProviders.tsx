'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/spotlight/styles.css'
import '@/lib/styles/global.scss'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {JobHuntlyTheme} from '@/components/job-huntly/lib/style/JobHuntlyTheme'
import {defaultThemeColorScheme} from '@/constants'

interface JobHunyltProviders {
  children: ReactNode
}

export function JobHuntlyProviders({children}: JobHunyltProviders) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={JobHuntlyTheme}
    >
      {children}
    </MantineProvider>
  )
}

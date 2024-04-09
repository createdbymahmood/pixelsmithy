'use client'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@/lib/styles/global.scss'

import {JobHuntlyTheme} from '@job-huntly/lib/style/JobHuntlyTheme'
import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

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

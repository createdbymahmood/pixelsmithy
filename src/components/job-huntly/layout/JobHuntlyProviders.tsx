'use client'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@/lib/styles/global.scss'
import '@mantine/core/styles.layer.css'
import 'mantine-datatable/styles.layer.css'
import './layout.css'

import {JobHuntlyTheme} from '@job-huntly/lib/style/JobHuntlyTheme'
import {MantineProvider} from '@mantine/core'
import NextAdapterApp from 'next-query-params/app'
import type {ReactNode} from 'react'
import {QueryParamProvider} from 'use-query-params'

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
      <QueryParamProvider adapter={NextAdapterApp}>
        {children}
      </QueryParamProvider>
    </MantineProvider>
  )
}

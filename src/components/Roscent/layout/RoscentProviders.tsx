'use client'

import '@/lib/styles/global.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/core/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {RoscentTheme} from '@/components/Roscent/lib/style/RoscentTheme'
import {defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'

interface RoscentProvidersProps {
  children: ReactNode
}

export function RoscentProviders({children}: RoscentProvidersProps) {
  return (
    <div className={inter.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={RoscentTheme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}

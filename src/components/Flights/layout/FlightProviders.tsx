import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/carousel/styles.css'
import '@/lib/styles/global.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'

import {FlightsTheme} from '@flights/lib/style/FlightsTheme'
import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {defaultThemeColorScheme} from '@/constants'

interface FlightProvidersProps {
  children: ReactNode
}

export function FlightProviders({children}: FlightProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={FlightsTheme}
    >
      {children}
    </MantineProvider>
  )
}

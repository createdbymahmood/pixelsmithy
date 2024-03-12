import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'

import {FlightsTheme} from '@flight/lib/style/FlightsTheme'
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

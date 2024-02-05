import '@mantine/core/styles.css'
import '@/lib/styles/globalStyles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {defaultThemeColorScheme} from '@/constants'
import {theme} from '@/lib/ui/theme'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({children}: ProvidersProps) {
  return (
    <MantineProvider defaultColorScheme={defaultThemeColorScheme} theme={theme}>
      {children}
    </MantineProvider>
  )
}

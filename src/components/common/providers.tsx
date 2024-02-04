import '@mantine/core/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {theme} from '@/lib/theme'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({children}: ProvidersProps) {
  return <MantineProvider theme={theme}> {children}</MantineProvider>
}

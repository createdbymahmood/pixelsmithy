import '@mantine/core/styles.css'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({children}: ProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>
}

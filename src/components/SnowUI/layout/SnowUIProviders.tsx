import {MantineProvider} from '@mantine/core'
import {Inter} from 'next/font/google'
import type {ReactNode} from 'react'

import {SnowUITheme} from '@/components/SnowUI/lib/style/SnowUITheme'
import {defaultThemeColorScheme} from '@/constants'

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

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

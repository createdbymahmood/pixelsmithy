import {MantineProvider} from '@mantine/core'
import {Poppins} from 'next/font/google'
import type {ReactNode} from 'react'

import {defaultThemeColorScheme} from '@/constants'
import {theme} from '@/lib/ui/theme'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

interface JobLocationProvidersProps {
  children: ReactNode
}

export function JobLocationLayout({children}: JobLocationProvidersProps) {
  return (
    <div className={poppins.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={theme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}

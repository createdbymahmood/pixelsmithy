import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import {MantineProvider} from '@mantine/core'
import {Poppins} from 'next/font/google'
import type {ReactNode} from 'react'

import {JobLocationTheme} from '@/components/JobLocation/lib/style/JobLocationTheme'
import {defaultThemeColorScheme} from '@/constants'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

interface JobLocationProvidersProps {
  children: ReactNode
}

export function JobLocationProviders({children}: JobLocationProvidersProps) {
  return (
    <div className={poppins.className}>
      <MantineProvider
        defaultColorScheme={defaultThemeColorScheme}
        theme={JobLocationTheme}
      >
        {children}
      </MantineProvider>
    </div>
  )
}

import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

import {ColorSchemeScript} from '@mantine/core'
import type {Metadata} from 'next'

import {defaultThemeColorScheme} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata: Metadata = constructMetadata({
  title: 'Pixelsmithy',
})

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
          name='viewport'
        />
        <ColorSchemeScript defaultColorScheme={defaultThemeColorScheme} />
      </head>
      <body>{children}</body>
    </html>
  )
}

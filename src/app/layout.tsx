import '@/utils/date-plugins'

import {ColorSchemeScript} from '@mantine/core'
import type {Metadata} from 'next'

import {cn} from '@/components/job-location/utils/cn'
import {defaultThemeColorScheme} from '@/constants'
import {openSans} from '@/lib/styles/font/openSans'
import {poppins} from '@/lib/styles/font/poppins'
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
      <body
        className={cn(
          poppins.variable,
          openSans.variable,
          'font-sans antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}

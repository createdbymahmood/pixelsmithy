import {ColorSchemeScript} from '@mantine/core'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import {Providers} from '@/components/common/providers'
import {constructMetadata} from '@/utils/constructMetadata'

const inter = Inter({subsets: ['latin']})

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
        <ColorSchemeScript defaultColorScheme='light' />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Head from 'next/head'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pixelsmithy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
          name='viewport'
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// 'use client'

// import '@job-location/lib/style/globals.css'

// import {cn} from '@job-location/utils/cn'
// import type {ReactNode} from 'react'

// import {openSans} from '@/lib/styles/font/openSans'
// import {poppins} from '@/lib/styles/font/poppins'

// interface RootLayoutProps {
//   children: ReactNode
// }

// export function JobLocationProviders({children}: RootLayoutProps) {
//   return (
//     <div
//       className={cn(
//         'min-h-screen bg-background font-sans antialiased',
//         poppins.variable,
//         openSans.variable,
//       )}
//     >
//       {children}
//     </div>
//   )
// }

'use client'

import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@/lib/styles/global.scss'

import {MantineProvider} from '@mantine/core'
import type {ReactNode} from 'react'

import {JobLocationTheme} from '@/components/job-location/lib/style/JobLocationTheme'
import {defaultThemeColorScheme} from '@/constants'

interface JobLocationProvidersProps {
  children: ReactNode
}

export function JobLocationProviders({children}: JobLocationProvidersProps) {
  return (
    <MantineProvider
      defaultColorScheme={defaultThemeColorScheme}
      theme={JobLocationTheme}
    >
      {children}
    </MantineProvider>
  )
}

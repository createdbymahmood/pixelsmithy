'use client'
import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@mantine/dates/styles.css'

import type {ReactNode} from 'react'

import {MobileVersionNotice} from '@/components/common/MobileVersionNotice'
import {ModernizeProviders} from '@/components/Modernize/layout'

export default function Layout(props: {children: ReactNode}) {
  return (
    <ModernizeProviders>
      <MobileVersionNotice>{props.children}</MobileVersionNotice>
    </ModernizeProviders>
  )
}

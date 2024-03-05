'use client'

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

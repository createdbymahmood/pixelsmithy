'use client'

import type {ReactNode} from 'react'

import {EmailLayout} from '@/components/SnowUI'
import {SnowUIDashboardLayout} from '@/components/SnowUI/layout/SnowUIDashboardLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <SnowUIDashboardLayout withNotificationsSidebar={false}>
      <EmailLayout>{children}</EmailLayout>
    </SnowUIDashboardLayout>
  )
}

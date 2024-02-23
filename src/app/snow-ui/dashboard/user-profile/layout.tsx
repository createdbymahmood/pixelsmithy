'use client'
import type {ReactNode} from 'react'

import {UserProfileLayout} from '@/components/SnowUI'
import {SnowUIDashboardLayout} from '@/components/SnowUI/layout/SnowUIDashboardLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <SnowUIDashboardLayout withNotificationsSidebar={false}>
      <UserProfileLayout>{children}</UserProfileLayout>
    </SnowUIDashboardLayout>
  )
}

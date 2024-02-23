'use client'

import type {ReactNode} from 'react'

import {ChatLayout} from '@/components/SnowUI/components/chat/components'
import {SnowUIDashboardLayout} from '@/components/SnowUI/layout/SnowUIDashboardLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <SnowUIDashboardLayout withNotificationsSidebar={false}>
      <ChatLayout>{children}</ChatLayout>
    </SnowUIDashboardLayout>
  )
}

'use client'

import type {ReactNode} from 'react'

import {AccountLayout} from '@/components/SnowUI/components/account'
import {SnowUIDashboardLayout} from '@/components/SnowUI/layout/SnowUIDashboardLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <SnowUIDashboardLayout>
      <AccountLayout>{children}</AccountLayout>
    </SnowUIDashboardLayout>
  )
}

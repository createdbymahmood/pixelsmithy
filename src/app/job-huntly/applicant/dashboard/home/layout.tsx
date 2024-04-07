import type {ReactNode} from 'react'
import React from 'react'

import DashboardPageLayout from '@/components/job-huntly/layout/DashboardPageLayout/DashboardPageLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <DashboardPageLayout title='Messages'>{children}</DashboardPageLayout>
}

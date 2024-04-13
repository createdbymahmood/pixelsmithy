import type {ReactNode} from 'react'
import React from 'react'

import CompanyDashboardPageLayout from '@/components/job-huntly/layout/CompanyDashboardPageLayout/CompanyDashboardPageLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <CompanyDashboardPageLayout p={0}>{children}</CompanyDashboardPageLayout>
  )
}

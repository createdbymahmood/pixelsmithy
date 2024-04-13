import CompanyDashboardPageLayout from '@job-huntly/layout/CompanyDashboardPageLayout/CompanyDashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <CompanyDashboardPageLayout>{children}</CompanyDashboardPageLayout>
}

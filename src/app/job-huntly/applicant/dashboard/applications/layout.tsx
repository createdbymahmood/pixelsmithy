import {ApplicationsLayout} from '@job-huntly/components/applicant'
import DashboardPageLayout from '@job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <DashboardPageLayout title='Applications'>
      <ApplicationsLayout>{children}</ApplicationsLayout>
    </DashboardPageLayout>
  )
}

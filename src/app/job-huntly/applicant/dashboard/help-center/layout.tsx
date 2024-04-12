import ApplicantDashboardPageLayout from '@job-huntly/layout/ApplicantDashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <ApplicantDashboardPageLayout p={0} title='Help Center'>
      {children}
    </ApplicantDashboardPageLayout>
  )
}

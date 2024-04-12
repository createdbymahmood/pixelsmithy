import {ApplicationsLayout} from '@job-huntly/components/applicant'
import type {ReactNode} from 'react'
import React from 'react'

import ApplicantDashboardPageLayout from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/ApplicantDashboardPageLayout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <ApplicantDashboardPageLayout title='Applications'>
      <ApplicationsLayout>{children}</ApplicationsLayout>
    </ApplicantDashboardPageLayout>
  )
}

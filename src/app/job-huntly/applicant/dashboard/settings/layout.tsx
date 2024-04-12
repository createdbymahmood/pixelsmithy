import SettingsLayout from '@job-huntly/components/applicant/dashboard/Settings/SettingsLayout/SettingsLayout'
import ApplicantDashboardPageLayout from '@job-huntly/layout/ApplicantDashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <ApplicantDashboardPageLayout title='Settings'>
      <SettingsLayout>{children}</SettingsLayout>
    </ApplicantDashboardPageLayout>
  )
}

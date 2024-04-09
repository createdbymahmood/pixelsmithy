import SettingsLayout from '@job-huntly/components/applicant/dashboard/Settings/SettingsLayout/SettingsLayout'
import DashboardPageLayout from '@job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <DashboardPageLayout title='Settings'>
      <SettingsLayout>{children}</SettingsLayout>
    </DashboardPageLayout>
  )
}

import DashboardPageLayout from '@job-huntly/layout/DashboardPageLayout/DashboardPageLayout'
import type {ReactNode} from 'react'
import React from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <DashboardPageLayout title='Browse Companies'>
      {children}
    </DashboardPageLayout>
  )
}

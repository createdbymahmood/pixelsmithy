import type {ReactNode} from 'react'
import React from 'react'

import {ApplicationsLayout} from '@/components/job-huntly/components'
import {DashboardPageLayout} from '@/components/job-huntly/layout'

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

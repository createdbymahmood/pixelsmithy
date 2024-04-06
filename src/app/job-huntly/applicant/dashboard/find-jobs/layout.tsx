import type {ReactNode} from 'react'
import React from 'react'

import {DashboardPageLayout} from '@/components/job-huntly/layout'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return <DashboardPageLayout title='Find Jobs'>{children}</DashboardPageLayout>
}

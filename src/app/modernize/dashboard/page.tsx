'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const DashboardView = dynamic(
  () =>
    import('@modernize/components/reports').then(
      (m) => m.CustomerGrowthReports,
    ),
  {
    ssr: false,
  },
)

export default function Dashboard() {
  return <DashboardView />
}

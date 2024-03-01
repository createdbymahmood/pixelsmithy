'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const DashboardView = dynamic(
  () => import('@/components/Modernize/components').then((m) => m.Dashboard),
  {
    ssr: false,
  },
)

export default function Dashboard() {
  return <DashboardView />
}

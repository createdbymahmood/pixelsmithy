'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const ReportsView = dynamic(
  () => import('@modernize/components/reports').then((m) => m.Reports),
  {
    ssr: false,
  },
)

export default function Reports() {
  return <ReportsView />
}

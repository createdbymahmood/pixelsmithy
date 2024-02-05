'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const JobLocation = dynamic(
  () =>
    import('@/components/JobLocation/job-location').then((m) => m.JobLocation),
  {
    ssr: false,
  },
)

export default function JobLocationPage() {
  return <JobLocation />
}

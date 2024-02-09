'use client'

import dynamic from 'next/dynamic'

import {JobLocationLayout} from '@/components/JobLocation/layout'

const JobLocation = dynamic(
  () =>
    import('@/components/JobLocation/JobLocation').then((m) => m.JobLocation),
  {
    ssr: false,
  },
)

export default function JobLocationPage() {
  return (
    <JobLocationLayout>
      <JobLocation />
    </JobLocationLayout>
  )
}

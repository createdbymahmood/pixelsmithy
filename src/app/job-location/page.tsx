'use client'

import dynamic from 'next/dynamic'

const JobLocation = dynamic(
  () =>
    import('@/components/JobLocation/JobLocation').then((m) => m.JobLocation),
  {
    ssr: false,
  },
)

export default function JobLocationPage() {
  return <JobLocation />
}

import dynamic from 'next/dynamic'

import {JobLocationProviders} from '@/components/job-location/layout'
import {constructMetadata} from '@/utils/constructMetadata'

const JobLocation = dynamic(
  () => import('@/components/job-location/JobLocation'),
  {
    ssr: false,
  },
)

export const metadata = constructMetadata({
  title: 'Job Location',
})

export default function JobLocationPage() {
  return (
    <JobLocationProviders>
      <JobLocation />
    </JobLocationProviders>
  )
}

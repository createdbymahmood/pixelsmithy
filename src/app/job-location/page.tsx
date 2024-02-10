import dynamic from 'next/dynamic'

import {JobLocationProviders} from '@/components/JobLocation/layout'
import {constructMetadata} from '@/utils/constructMetadata'

const JobLocation = dynamic(
  () => import('@/components/JobLocation/JobLocation'),
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

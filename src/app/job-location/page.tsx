import dynamic from 'next/dynamic'

import {JobLocationLayout} from '@/components/JobLocation/layout'
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
    <JobLocationLayout>
      <JobLocation />
    </JobLocationLayout>
  )
}

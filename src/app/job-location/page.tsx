import JobLocation from '@/components/job-location/JobLocation'
import {constructMetadata} from '@/utils/constructMetadata'

/* const JobLocation = dynamic(
  () => import('@/components/job-location/JobLocation'),
  {
    ssr: false,
  },
) */

export const metadata = constructMetadata({
  title: 'Job Location',
})

export default function JobLocationPage() {
  return <JobLocation />
}

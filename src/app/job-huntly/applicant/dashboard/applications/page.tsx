import {redirect} from 'next/navigation'

import {urls} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'All Applications',
})

export default function Applications() {
  return redirect(urls.JobHuntly.applicant.dashboard.applications.all)
}
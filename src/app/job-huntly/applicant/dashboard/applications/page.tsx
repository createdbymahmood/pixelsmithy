import {redirect} from 'next/navigation'

import {JobhuntlyApplicantDashboardApplicationsAll} from '@/lib/declarative-routing'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'All Applications',
})

export default function Applications() {
  return redirect(JobhuntlyApplicantDashboardApplicationsAll())
}

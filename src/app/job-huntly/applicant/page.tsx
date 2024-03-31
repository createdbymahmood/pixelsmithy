import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Applicant() {
  return redirect(urls.JobHuntly.applicant.dashboard.index)
}

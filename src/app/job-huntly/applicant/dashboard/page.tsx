import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Dashboard() {
  return redirect(urls.JobHuntly.applicant.dashboard.home)
}

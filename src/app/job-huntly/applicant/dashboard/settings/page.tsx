import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Settings() {
  return redirect(urls.JobHuntly.applicant.dashboard.settings.profile)
}

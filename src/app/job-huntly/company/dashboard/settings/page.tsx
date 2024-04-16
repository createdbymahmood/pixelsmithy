import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Settings() {
  return redirect(urls.JobHuntly.company.dashboard.settings.overview)
}

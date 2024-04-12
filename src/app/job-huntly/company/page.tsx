import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Company() {
  return redirect(urls.JobHuntly.company.dashboard.index)
}

import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Page() {
  return redirect(urls.JobHuntly.company.dashboard.home)
}

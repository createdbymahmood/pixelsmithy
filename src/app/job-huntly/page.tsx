import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function JobHuntly() {
  return redirect(urls.JobHuntly.landing)
}

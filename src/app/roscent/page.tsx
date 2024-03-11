import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Dashboard() {
  return redirect(urls.roscent.projects.index)
}

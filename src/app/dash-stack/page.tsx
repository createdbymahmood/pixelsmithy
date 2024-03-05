import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function DashStack() {
  return redirect(urls.DashStack.dashboard.index)
}

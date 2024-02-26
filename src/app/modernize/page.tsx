import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function ModernizeDashboard() {
  return redirect(urls.Modernize.dashboard.index)
}

import {redirect} from 'next/navigation'

import {RoscentDashboardAccountOverview} from '@/lib/declarative-routing'

export default function Account() {
  return redirect(RoscentDashboardAccountOverview())
}

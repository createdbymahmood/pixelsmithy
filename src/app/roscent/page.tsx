import {redirect} from 'next/navigation'

import {RoscentDashboardProjects} from '@/lib/declarative-routing'

export default function Dashboard() {
  return redirect(RoscentDashboardProjects())
}

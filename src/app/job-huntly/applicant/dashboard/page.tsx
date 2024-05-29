import {redirect} from 'next/navigation'

import {JobhuntlyApplicantDashboardHome} from '@/lib/declarative-routing'

export default function Dashboard() {
  return redirect(JobhuntlyApplicantDashboardHome())
}

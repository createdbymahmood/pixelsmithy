import {redirect} from 'next/navigation'

import {JobhuntlyCompanyDashboard} from '@/lib/declarative-routing'

export default function Company() {
  return redirect(JobhuntlyCompanyDashboard())
}

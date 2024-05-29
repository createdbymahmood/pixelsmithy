import {redirect} from 'next/navigation'

import {JobhuntlyCompanyDashboardHome} from '@/lib/declarative-routing'

export default function Page() {
  return redirect(JobhuntlyCompanyDashboardHome())
}

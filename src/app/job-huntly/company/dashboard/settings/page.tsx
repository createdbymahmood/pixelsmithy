import {redirect} from 'next/navigation'

import {JobhuntlyCompanyDashboardSettingsOverview} from '@/lib/declarative-routing'

export default function Settings() {
  return redirect(JobhuntlyCompanyDashboardSettingsOverview())
}

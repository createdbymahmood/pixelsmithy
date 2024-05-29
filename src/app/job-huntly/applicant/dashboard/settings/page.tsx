import {redirect} from 'next/navigation'

import {JobhuntlyApplicantDashboardSettingsMyprofile} from '@/lib/declarative-routing'

export default function Settings() {
  return redirect(JobhuntlyApplicantDashboardSettingsMyprofile())
}

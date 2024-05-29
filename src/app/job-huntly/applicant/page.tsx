import {redirect} from 'next/navigation'

import {JobhuntlyApplicantDashboard} from '@/lib/declarative-routing'

export default function Applicant() {
  return redirect(JobhuntlyApplicantDashboard())
}

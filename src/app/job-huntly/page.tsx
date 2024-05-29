import {redirect} from 'next/navigation'

import {JobhuntlyLanding} from '@/lib/declarative-routing'

export default function JobHuntly() {
  return redirect(JobhuntlyLanding())
}

import {redirect} from 'next/navigation'

import {RoscentDashboardProjects} from '@/lib/declarative-routing'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Roscent',
})

export default function Roscent() {
  return redirect(RoscentDashboardProjects())
}

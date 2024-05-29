import {userId} from '@roscent/mocks/user'
import {redirect} from 'next/navigation'

import {RoscentDashboardUserprofileId} from '@/lib/declarative-routing'

export default function Page() {
  return redirect(RoscentDashboardUserprofileId({id: userId}))
}

import {emailId} from '@roscent/mocks/email'
import {redirect} from 'next/navigation'

import {RoscentDashboardEmailInboxId} from '@/lib/declarative-routing'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email',
})

export default function Email() {
  return redirect(RoscentDashboardEmailInboxId({id: emailId}))
}

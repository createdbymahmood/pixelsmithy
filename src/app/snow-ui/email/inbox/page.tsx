import {redirect} from 'next/navigation'

import {emailId} from '@/components/SnowUI/mocks/email'
import {urls} from '@/constants'

export default function Inbox() {
  return redirect(urls.SnowUI.email.inbox(emailId))
}

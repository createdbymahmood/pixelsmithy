import {userId} from '@roscent/mocks/user'
import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Page() {
  return redirect(urls.roscent.userProfile(userId))
}

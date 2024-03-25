import {redirect} from 'next/navigation'

import {userId} from '@roscent/mocks/user'
import {urls} from '@/constants'

export default function Page() {
  return redirect(urls.roscent.userProfile(userId))
}

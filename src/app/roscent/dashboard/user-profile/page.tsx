import {redirect} from 'next/navigation'

import {userId} from '@/components/Roscent/mocks/user'
import {urls} from '@/constants'

export default function Page() {
  return redirect(urls.roscent.userProfile(userId))
}

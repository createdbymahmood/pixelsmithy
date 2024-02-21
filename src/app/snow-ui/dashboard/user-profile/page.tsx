import {redirect} from 'next/navigation'

import {userId} from '@/components/SnowUI/mocks/user'
import {urls} from '@/constants'

export default function Page() {
  return redirect(urls.SnowUI.userProfile(userId))
}

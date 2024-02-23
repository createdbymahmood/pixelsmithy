import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Account() {
  return redirect(urls.SnowUI.account.overview)
}

import {redirect} from 'next/navigation'

import {urls} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Email',
})

export default function Email() {
  return redirect(urls.SnowUI.email.inbox)
}

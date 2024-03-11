import {redirect} from 'next/navigation'

import {urls} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Roscent',
})

export default function Roscent() {
  return redirect(urls.roscent.projects.index)
}

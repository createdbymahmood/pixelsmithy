import {redirect} from 'next/navigation'

import {urls} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Snow UI',
})

export default function SnowUI() {
  return redirect(urls.SnowUI.projects.index)
}

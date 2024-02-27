import {redirect} from 'next/navigation'

import {urls} from '@/constants'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Customers',
})

export default function Customers() {
  return redirect(urls.Modernize.dashboard.customers.list.all)
}

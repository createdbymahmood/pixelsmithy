import {redirect} from 'next/navigation'

import {urls} from '@/constants'

export default function Coupons() {
  return redirect(urls.Modernize.dashboard.coupons.list.all)
}

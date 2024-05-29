import {redirect} from 'next/navigation'

import {ModernizeDashboardCouponsListAll} from '@/lib/declarative-routing'

export default function Coupons() {
  return redirect(ModernizeDashboardCouponsListAll())
}

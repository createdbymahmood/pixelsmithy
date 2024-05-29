import {redirect} from 'next/navigation'

import {ModernizeDashboardCustomersListAll} from '@/lib/declarative-routing'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Customers',
})

export default function Customers() {
  return redirect(ModernizeDashboardCustomersListAll())
}

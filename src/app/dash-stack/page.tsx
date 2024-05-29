import {redirect} from 'next/navigation'

import {DashstackDashboard} from '@/lib/declarative-routing'

export default function DashStack() {
  return redirect(DashstackDashboard())
}

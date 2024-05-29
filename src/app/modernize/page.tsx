import {redirect} from 'next/navigation'

import {ModernizeDashboard as ModernizeDashboardRoute} from '@/lib/declarative-routing'

export default function ModernizeDashboard() {
  return redirect(ModernizeDashboardRoute())
}

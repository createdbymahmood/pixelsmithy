import {redirect} from 'next/navigation'

import {ModernizeDashboardSettingsProfile} from '@/lib/declarative-routing'

export default function Settings() {
  return redirect(ModernizeDashboardSettingsProfile())
}

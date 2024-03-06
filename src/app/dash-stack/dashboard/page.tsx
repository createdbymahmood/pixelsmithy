import {Dashboard as DashboardView} from '@dash-stack/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function Dashboard() {
  return <DashboardView />
}

import {Dashboard as DashboardView} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function Dashboard() {
  return <DashboardView />
}

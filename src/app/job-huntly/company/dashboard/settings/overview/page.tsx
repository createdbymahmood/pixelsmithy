import {OverviewSettings as OverviewSettingsView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Settings Overview',
})

export default function OverviewSettings() {
  return <OverviewSettingsView />
}

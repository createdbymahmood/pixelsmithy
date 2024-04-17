import {TeamSettings as TeamSettingsView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Team Settings',
})

export default function TeamSettings() {
  return <TeamSettingsView />
}

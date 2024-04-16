import {SocialLinksSettings as SocialLinksSettingsView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Social Links Settings',
})

export default function SocialLinksSettings() {
  return <SocialLinksSettingsView />
}

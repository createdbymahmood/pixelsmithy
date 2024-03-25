import {ProfileSettings as ProfileSettingsView} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Profile Settings',
})

export default function ProfileSettings() {
  return <ProfileSettingsView />
}

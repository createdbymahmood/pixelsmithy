import {ProfileSettings as ProfileSettingsView} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Profile Settings',
})

export default function ProfileSettings() {
  return <ProfileSettingsView />
}

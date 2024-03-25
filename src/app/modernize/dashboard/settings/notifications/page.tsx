import {NotificaitonsSettings as NotificationsSettingsView} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Notifications Settings',
})

export default function NotificationsSettings() {
  return <NotificationsSettingsView />
}

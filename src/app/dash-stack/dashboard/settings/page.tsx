import {Settings as SettingsView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Settings',
})

export default function Settings() {
  return <SettingsView />
}

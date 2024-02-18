import React from 'react'

import {AccountSettings} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Settings',
})

export default function Settings() {
  return <AccountSettings />
}

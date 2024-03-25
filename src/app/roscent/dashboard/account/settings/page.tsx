import {AccountSettings} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Settings',
})

export default function Settings() {
  return <AccountSettings />
}

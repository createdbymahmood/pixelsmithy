import React from 'react'

import {AccountSettings} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Settings',
})

export default function Settings() {
  return <AccountSettings />
}

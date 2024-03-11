import React from 'react'

import {AccountSettings} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Settings',
})

export default function Settings() {
  return <AccountSettings />
}

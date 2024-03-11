import React from 'react'

import {AccountLogs} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Logs',
})

export default function Logs() {
  return <AccountLogs />
}

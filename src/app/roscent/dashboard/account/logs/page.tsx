import React from 'react'

import {AccountLogs} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Logs',
})

export default function Logs() {
  return <AccountLogs />
}

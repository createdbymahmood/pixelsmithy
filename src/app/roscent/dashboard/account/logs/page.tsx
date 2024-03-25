import {AccountLogs} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Logs',
})

export default function Logs() {
  return <AccountLogs />
}

import {AccountOverview} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account overview',
})

export default function Overview() {
  return <AccountOverview />
}

import React from 'react'

import {AccountOverview} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account overview',
})

export default function Overview() {
  return <AccountOverview />
}

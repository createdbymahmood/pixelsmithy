import {AccountSecurity} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Security',
})

export default function Security() {
  return <AccountSecurity />
}

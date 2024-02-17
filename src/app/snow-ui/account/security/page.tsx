import React from 'react'

import {AccountSecurity} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Security',
})

export default function Security() {
  return <AccountSecurity />
}

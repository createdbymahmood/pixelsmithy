import {AccountApiKeys} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'API Keys',
})

export default function ApiKeys() {
  return <AccountApiKeys />
}

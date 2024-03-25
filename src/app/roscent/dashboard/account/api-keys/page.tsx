import React from 'react'

import {AccountApiKeys} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'API Keys',
})

export default function ApiKeys() {
  return <AccountApiKeys />
}

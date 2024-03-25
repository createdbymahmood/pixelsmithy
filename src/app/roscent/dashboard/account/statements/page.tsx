import {AccountStatements} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Statements',
})

export default function Statements() {
  return <AccountStatements />
}

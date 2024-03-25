import React from 'react'

import {AccountStatements} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Statements',
})

export default function Statements() {
  return <AccountStatements />
}

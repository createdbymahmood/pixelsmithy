import {AccountBilling} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Billing',
})

export default function BillingP() {
  return <AccountBilling />
}

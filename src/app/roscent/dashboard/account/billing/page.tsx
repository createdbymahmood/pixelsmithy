import React from 'react'

import {AccountBilling} from '@/components/roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Billing',
})

export default function BillingP() {
  return <AccountBilling />
}

import React from 'react'

import {AccountBilling} from '@/components/Roscent'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Billing',
})

export default function BillingP() {
  return <AccountBilling />
}

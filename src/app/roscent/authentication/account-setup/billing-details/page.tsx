import {BillingDetails as BillingDetailsView} from '@roscent/components/authentication/AccountSetup/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Billing Details',
})

export default function BillingDetails() {
  return <BillingDetailsView />
}

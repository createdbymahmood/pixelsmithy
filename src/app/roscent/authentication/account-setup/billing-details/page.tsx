import React from 'react'

import {BillingDetails as BillingDetailsView} from '@/components/roscent/components/authentication/AccountSetup/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Billing Details',
})

export default function BillingDetails() {
  return <BillingDetailsView />
}

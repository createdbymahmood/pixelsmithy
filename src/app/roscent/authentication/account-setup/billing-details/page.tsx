import React from 'react'

import {BillingDetails as BillingDetailsView} from '@/components/Roscent/components/authentication/AccountSetup/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Billing Details',
})

export default function BillingDetails() {
  return <BillingDetailsView />
}

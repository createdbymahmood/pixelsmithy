import {CreditCardSetup} from '@roscent/components/authentication/AccountSetup/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Credit Card Setup',
})

export default function C() {
  return <CreditCardSetup />
}

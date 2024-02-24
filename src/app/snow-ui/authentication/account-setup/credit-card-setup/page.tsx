import React from 'react'

import {CreditCardSetup} from '@/components/SnowUI/components/authentication/AccountSetup/components'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Credit Card Setup',
})

export default function C() {
  return <CreditCardSetup />
}

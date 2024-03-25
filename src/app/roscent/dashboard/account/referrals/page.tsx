import {AccountReferrals} from '@roscent/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Referrals',
})

export default function Referrals() {
  return <AccountReferrals />
}

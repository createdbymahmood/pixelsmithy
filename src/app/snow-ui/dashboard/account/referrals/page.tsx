import React from 'react'

import {AccountReferrals} from '@/components/SnowUI'
import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Account Referrals',
})

export default function Referrals() {
  return <AccountReferrals />
}
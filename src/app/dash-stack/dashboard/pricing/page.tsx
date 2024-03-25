import {Pricing as PricingView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Pricing',
})

export default function Pricing() {
  return <PricingView />
}

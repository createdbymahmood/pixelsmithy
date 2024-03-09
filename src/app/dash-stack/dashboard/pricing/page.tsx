import {Pricing as PricingView} from '@dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Products',
})

export default function Pricing() {
  return <PricingView />
}

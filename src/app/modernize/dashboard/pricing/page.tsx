import {Pricing as PricingView} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Pricing',
})

export default function Pricing() {
  return <PricingView />
}

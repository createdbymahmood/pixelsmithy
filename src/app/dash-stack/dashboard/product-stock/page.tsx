import {ProductStock as ProductStockView} from '@/components/dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Product Stock',
})

export default function ProductStock() {
  return <ProductStockView />
}

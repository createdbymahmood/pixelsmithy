import {Orders as OrdersView} from '@/components/dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Orders',
})

export default function Orders() {
  return <OrdersView />
}

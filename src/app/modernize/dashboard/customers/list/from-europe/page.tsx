import {CustomersList} from '@modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Customers from Europe',
})

export default function AllCustomers() {
  return <CustomersList />
}

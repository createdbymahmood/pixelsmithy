import {CustomersList} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'All customers',
})

export default function AllCustomers() {
  return <CustomersList />
}

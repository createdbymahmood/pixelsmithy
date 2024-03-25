import {AddProductForm} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Products',
})

export default function AddProduct() {
  return <AddProductForm />
}

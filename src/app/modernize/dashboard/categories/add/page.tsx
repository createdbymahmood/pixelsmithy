import {AddCategoryForm} from '@/components/modernize/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Add Category',
})

export default function AddCategory() {
  return <AddCategoryForm />
}

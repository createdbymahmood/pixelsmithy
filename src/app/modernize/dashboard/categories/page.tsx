import {CategoriesList} from '@modernize/components'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Categories',
})

export default function Categories() {
  return <CategoriesList />
}

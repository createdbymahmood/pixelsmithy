import {Favorites as FavoritesView} from '@/components/dash-stack/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Favorites',
})

export default function Favorites() {
  return <FavoritesView />
}

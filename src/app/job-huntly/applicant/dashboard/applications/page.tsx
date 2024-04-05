import {Applications as ApplicationsView} from '@job-huntly/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Applications',
})

export default function Applications() {
  return <ApplicationsView />
}

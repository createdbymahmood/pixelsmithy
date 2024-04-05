import {Applications as ApplicationsView} from '@job-huntly/components'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Interviewing',
})

export default function Applications() {
  return <ApplicationsView value='Interviewing' />
}

import {Applications as ApplicationsView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Offered',
})

export default function Applications() {
  return <ApplicationsView value='Offered' />
}

import {Companies as CompaniesView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Companies',
})

export default function Companies() {
  return <CompaniesView />
}

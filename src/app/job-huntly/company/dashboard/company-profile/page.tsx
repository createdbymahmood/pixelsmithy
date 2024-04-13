import {CompanyProfile as CompanyProfileView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Dashboard',
})

export default function CompanyProfile() {
  return <CompanyProfileView />
}

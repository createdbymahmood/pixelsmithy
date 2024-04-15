import {Applicants as AllApplicantsView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'All Applicants',
})

export default function AllApplicants() {
  return <AllApplicantsView />
}

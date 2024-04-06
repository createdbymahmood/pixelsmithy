import {FindJobs as FindJobsView} from '@job-huntly/components/applicant'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Find Jobs',
})

export default function FindJobs() {
  return <FindJobsView />
}

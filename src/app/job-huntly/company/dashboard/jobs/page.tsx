import {JobList as JobListView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Job List',
})

export default function JobList() {
  return <JobListView />
}

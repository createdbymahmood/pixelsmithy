import {CreateJob as CreateJobView} from '@job-huntly/components/company'
import React from 'react'

import {constructMetadata} from '@/utils/constructMetadata'

export const metadata = constructMetadata({
  title: 'Post a Job',
})

export default function CreateJob() {
  return <CreateJobView />
}

import React from 'react'

import {Box} from '@/components/job-location/components/ui'

import {JobsListHeader} from './jobs-list-header'

export function JobsList() {
  return (
    <Box className='w-full'>
      <JobsListHeader />
    </Box>
  )
}

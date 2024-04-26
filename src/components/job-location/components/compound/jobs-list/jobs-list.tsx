import React from 'react'

import {Box, Stack} from '@/components/job-location/components/ui'

import {JobsListCard} from './jobs-list-card'
import {JobsListHeader} from './jobs-list-header'

export function JobsList() {
  return (
    <Stack className='w-full pb-5' gap='md'>
      <JobsListHeader />

      <Box className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <JobsListCard />
        <JobsListCard />
        <JobsListCard />
        <JobsListCard />
      </Box>
    </Stack>
  )
}

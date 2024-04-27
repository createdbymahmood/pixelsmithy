import React from 'react'

import {Group, Typography} from '@/components/job-location/components/ui'

export function JobsListHeader() {
  return (
    <Group className='md:py-5'>
      <Group>
        <Typography
          className='text-lg md:text-2xl lg:text-3xl'
          family='serif'
          size='lg'
          weight='semibold'
        >
          8,526
        </Typography>

        <Typography
          className='text-gray-500 md:text-2xl lg:text-3xl'
          family='serif'
          size='lg'
        >
          Jobs Found
        </Typography>
      </Group>
    </Group>
  )
}

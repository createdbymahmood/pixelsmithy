import React from 'react'

import {Group} from '@/components/job-location/components/ui'

export function JobsListHeader() {
  return (
    <Group className='md:py-5'>
      <Group>
        <h4 className='font-serif text-lg font-semibold md:text-2xl lg:text-3xl'>
          8,526
        </h4>
        <p className='font-serif text-lg text-gray-500 md:text-2xl lg:text-3xl'>
          Jobs Found
        </p>
      </Group>
    </Group>
  )
}

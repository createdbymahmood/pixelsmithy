import React from 'react'

import {Group, Typography} from '@/components/job-location/components/ui'
import {useResponsiveVariant} from '@/components/job-location/utils/useResponsiveVariant'

export function JobsListHeader() {
  return (
    <Group className='md:py-5'>
      <Group>
        <Typography
          family='serif'
          size={useResponsiveVariant({
            initial: 'lg',
            md: '2xl',
            lg: '3xl',
          })}
          weight='semibold'
        >
          8,526
        </Typography>

        <Typography
          className='text-gray-500'
          family='serif'
          size={useResponsiveVariant({
            initial: 'lg',
            md: '2xl',
            lg: '3xl',
          })}
        >
          Jobs Found
        </Typography>
      </Group>
    </Group>
  )
}

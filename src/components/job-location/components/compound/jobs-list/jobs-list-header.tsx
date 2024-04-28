import React from 'react'

import {Group, Typography} from '@/components/job-location/components/ui'
import {useResponsiveVariant} from '@/components/job-location/utils/useResponsiveVariant'

export function JobsListHeader() {
  const textSizeVariant = useResponsiveVariant({
    base: 'lg',
    md: '2xl',
    lg: '3xl',
  })

  return (
    <Group className='md:py-5'>
      <Group>
        <Typography family='serif' size={textSizeVariant} weight='semibold'>
          8,526
        </Typography>

        <Typography
          className='text-gray-500'
          family='serif'
          size={textSizeVariant}
        >
          Jobs Found
        </Typography>
      </Group>
    </Group>
  )
}

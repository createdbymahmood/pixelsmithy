import {Box, Container} from '@mantine/core'
import React from 'react'

import {JobFilters} from '@/components/JobLocation/job-filters/job-filters'

export function JobLocation() {
  return (
    <Container my='sm'>
      <Box maw={288}>
        <JobFilters />
      </Box>
    </Container>
  )
}

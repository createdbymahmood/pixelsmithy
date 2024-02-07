'use client'

import {Box, Container, rem} from '@mantine/core'
import dynamic from 'next/dynamic'

const JobFilters = dynamic(
  () =>
    import('@/components/JobLocation/JobFilters/JobFilters').then(
      (m) => m.JobFilters,
    ),
  {ssr: false},
)

export default function App() {
  return (
    <Container my='sm'>
      <Box maw={rem(280)}>
        <JobFilters />
      </Box>
    </Container>
  )
}

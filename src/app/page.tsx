'use client'

import {Box, Container} from '@mantine/core'
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
      <Box maw={280}>
        <JobFilters />
      </Box>
    </Container>
  )
}

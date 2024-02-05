import {Box, Container} from '@mantine/core'

import {JobFilters} from '@/components/job-filters/job-filters'

export default function App() {
  return (
    <Container my='sm'>
      <Box maw={288}>
        <JobFilters />
      </Box>
    </Container>
  )
}

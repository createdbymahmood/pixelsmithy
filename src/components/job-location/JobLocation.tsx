'use client'

import {Box, Container, Grid, rem} from '@mantine/core'

import {JobFilters} from '@/components/job-location/components/JobFilters'
import {JobLocationHeader} from '@/components/job-location/components/JobLocationHeader'
import {JobsList} from '@/components/job-location/components/JobsList'
import {JobsSiderbar} from '@/components/job-location/components/JobsSidebar'
import {useMobileDevice} from '@/hooks/useMobileDevice'

function JobLocationContent() {
  return (
    <Container maw={rem(1920)} my='lg'>
      <Grid gutter='xl'>
        <Grid.Col maw={rem(280)} offset={{xs: 0, lg: 1}} span='auto' w={280}>
          <JobFilters />
        </Grid.Col>

        <Grid.Col span={{lg: 'auto'}}>
          <JobsList />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default function JobLocation() {
  const isMobile = useMobileDevice()
  return (
    <Box pt={isMobile ? 0 : rem(80)}>
      <JobsSiderbar />
      <JobLocationHeader />
      <JobLocationContent />
    </Box>
  )
}
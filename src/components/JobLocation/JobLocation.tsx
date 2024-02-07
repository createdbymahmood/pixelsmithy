'use client'

import {Box, Container, Grid, rem} from '@mantine/core'

import {JobFilters} from '@/components/JobLocation/JobFilters/JobFilters'
import {JobLocationHeader} from '@/components/JobLocation/JobLocationHeader'
import {JobsList} from '@/components/JobLocation/JobsList'
import {JobsSiderbar} from '@/components/JobLocation/JobsSidebar/JobsSiderbar'
import {useMobileDevice} from '@/hooks/useMobileDevice'

export function JobLocation() {
  const isMobile = useMobileDevice()
  return (
    <Box pt={isMobile ? 0 : rem(80)}>
      <JobsSiderbar />
      <JobLocationHeader />

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
    </Box>
  )
}

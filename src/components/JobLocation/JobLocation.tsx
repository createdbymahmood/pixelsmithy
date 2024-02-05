'use client'

import {Container, Grid} from '@mantine/core'

import {JobFilters} from '@/components/JobLocation/JobFilters/JobFilters'
import {JobsList} from '@/components/JobLocation/JobsList'

export function JobLocation() {
  return (
    <Container maw={1920} my='sm'>
      <Grid gutter='xl'>
        <Grid.Col maw={280} span='auto' w={280}>
          <JobFilters />
        </Grid.Col>

        <Grid.Col span={{lg: 'auto'}}>
          <JobsList />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

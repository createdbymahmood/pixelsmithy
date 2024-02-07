'use client'

import {Container, Grid} from '@mantine/core'
import {Fragment} from 'react'

import {JobFilters} from '@/components/JobLocation/JobFilters/JobFilters'
import {JobsList} from '@/components/JobLocation/JobsList'
import {JobsSiderbar} from '@/components/JobLocation/JobsSidebar/JobsSiderbar'

export function JobLocation() {
  return (
    <Fragment>
      <JobsSiderbar />

      <Container maw={1920} my='xl'>
        <Grid gutter='xl'>
          <Grid.Col maw={280} offset={{xs: 0, lg: 1}} span='auto' w={280}>
            <JobFilters />
          </Grid.Col>

          <Grid.Col span={{lg: 'auto'}}>
            <JobsList />
          </Grid.Col>
        </Grid>
      </Container>
    </Fragment>
  )
}

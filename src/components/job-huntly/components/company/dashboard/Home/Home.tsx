'use client'

import {Grid, Stack} from '@mantine/core'
import React from 'react'

import {Header, JobStats, OpenJobs, Stats} from './components'

export function Home() {
  return (
    <Stack gap='xxxl'>
      <Header />
      <Stats />

      <Grid>
        <Grid.Col span={9}>
          <JobStats />
        </Grid.Col>

        <Grid.Col span={3}>
          <OpenJobs />
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

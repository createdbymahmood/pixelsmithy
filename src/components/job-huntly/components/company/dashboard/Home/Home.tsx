'use client'

import {Grid, Stack} from '@mantine/core'
import React from 'react'

import {
  ApplicantsSummary,
  Header,
  JobStats,
  JobUpdates,
  OpenJobs,
  Stats,
} from './components'

export function Home() {
  return (
    <Stack gap='xxxl'>
      <Header />
      <Stats />

      <Grid gutter='xl'>
        <Grid.Col span={8}>
          <JobStats />
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap='xl'>
            <OpenJobs />
            <ApplicantsSummary />
          </Stack>
        </Grid.Col>
      </Grid>

      <JobUpdates />
    </Stack>
  )
}

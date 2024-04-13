import {Stack} from '@mantine/core'
import React from 'react'

import {Header, JobStats, Stats} from './components'

export function Home() {
  return (
    <Stack gap='xxxl'>
      <Header />
      <Stats />
      <JobStats />
    </Stack>
  )
}

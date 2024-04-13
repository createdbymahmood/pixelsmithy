import {Stack} from '@mantine/core'
import React from 'react'

import {Header, RecentApplications, Stats} from './components'

export function Home() {
  return (
    <Stack gap='xxxl'>
      <Header />
      <Stats />
      <RecentApplications />
    </Stack>
  )
}

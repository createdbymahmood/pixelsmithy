import {Stack} from '@mantine/core'
import React from 'react'

import {Header, Stats} from './components'

export function Home() {
  return (
    <Stack gap='xxxl'>
      <Header />
      <Stats />
    </Stack>
  )
}

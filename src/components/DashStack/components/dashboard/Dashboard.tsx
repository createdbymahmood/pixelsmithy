import {Stack, Title} from '@mantine/core'
import React from 'react'

import {DealsDetails, SalesChart, Stats} from './components'

function Header() {
  return <Title order={4}>Dashboard</Title>
}

export function Dashboard() {
  return (
    <Stack gap='md' pb='md'>
      <Header />
      <Stats />
      <SalesChart />
      <DealsDetails />
    </Stack>
  )
}

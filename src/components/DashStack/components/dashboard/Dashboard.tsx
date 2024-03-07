import {PageHeader} from '@dash-stack/components'
import {Stack} from '@mantine/core'

import {DealsDetails, SalesChart, Stats} from './components'

export function Dashboard() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Dashboard</PageHeader>
      <Stats />
      <SalesChart />
      <DealsDetails />
    </Stack>
  )
}

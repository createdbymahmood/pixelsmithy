import {PageContent, PageHeader} from '@dash-stack/components'

import {DealsDetails, SalesChart, Stats} from './components'

export function Dashboard() {
  return (
    <PageContent>
      <PageHeader>Dashboard</PageHeader>
      <Stats />
      <SalesChart />
      <DealsDetails />
    </PageContent>
  )
}

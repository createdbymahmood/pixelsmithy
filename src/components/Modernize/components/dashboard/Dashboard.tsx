import {Button, Group, rem, SimpleGrid, Stack, Title} from '@mantine/core'
import {Gear} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {DashboardStats} from './DashboardStats'
import {RecentTransactions} from './RecentTransactions'
import {TopProducts} from './TopProducts'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Dashboard</Title>
      <Button
        leftSection={<Gear className='icon-size-md' weight='bold' />}
        variant='default'
      >
        Manage
      </Button>
    </Group>
  )
}

export function Dashboard() {
  return (
    <Stack gap={rem(30)}>
      <Header />
      <DashboardStats />

      <SimpleGrid cols={2} spacing={rem(30)}>
        <RecentTransactions />
        <TopProducts />
      </SimpleGrid>
    </Stack>
  )
}

'use client'

import {Button, Grid, Group, rem, SimpleGrid, Stack, Title} from '@mantine/core'
import {Gear} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {OrdersChart} from '@/components/Modernize/components/dashboard/OrdersChart'

import {RecentTransactions} from './RecentTransactions'
import {SalesChart} from './SalesChart'
import {Stats} from './Stats'
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
      <Stats />

      <Grid>
        <Grid.Col span={8}>
          <OrdersChart />
        </Grid.Col>

        <Grid.Col span={4}>
          <SalesChart />
        </Grid.Col>
      </Grid>

      <SimpleGrid cols={2} pb={rem(30)} spacing={rem(30)}>
        <RecentTransactions />
        <TopProducts />
      </SimpleGrid>
    </Stack>
  )
}

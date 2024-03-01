'use client'

import {Button, Grid, Group, rem, SimpleGrid, Stack, Title} from '@mantine/core'
import {Gear} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {SalesChart} from '@/components/Modernize/components/dashboard/SalesChart'

import {DashboardStats} from './DashboardStats'
import {OrdersChart} from './OrdersChart'
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

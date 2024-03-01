import {Button, Group, rem, Stack, Title} from '@mantine/core'
import {Gear} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {DashboardStats} from './DashboardStats'

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
    </Stack>
  )
}

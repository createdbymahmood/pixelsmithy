'use client'
import {Grid, rem, Stack} from '@mantine/core'

import {
  CustomerHeader,
  CustomerNotes,
  CustomerOrders,
  CustomerOverview,
  CustomersTags,
} from './components'

export function CustomerInfo() {
  return (
    <Stack gap={rem(30)}>
      <CustomerHeader />

      <Grid gutter={rem(30)}>
        <Grid.Col span={8}>
          <Stack gap={rem(30)}>
            <CustomerNotes />
            <CustomerOrders />
          </Stack>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap={rem(30)}>
            <CustomerOverview />
            <CustomersTags />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

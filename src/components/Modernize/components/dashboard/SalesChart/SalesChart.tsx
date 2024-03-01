import {Box, Card, Divider, rem, Stack, Text, Title} from '@mantine/core'
import React from 'react'

import {SalesChartView} from './Chart'

function Header() {
  return <Text fw='bold'>Last 7 days Sales</Text>
}

function Stats() {
  return (
    <Stack>
      <Stack gap={0}>
        <Title order={6}>1,259</Title>
        <Text c='general.5' size='sm'>
          Items Sold
        </Text>
      </Stack>

      <Stack gap={0}>
        <Title order={6}>$12,546</Title>
        <Text c='general.5' size='sm'>
          Revenue
        </Text>
      </Stack>
    </Stack>
  )
}

export function SalesChart() {
  return (
    <Card h='100%'>
      <Stack gap={rem(24)} h='100%'>
        <Header />
        <Stats />
        <Divider />
        <Box mt='auto'>
          <SalesChartView />
        </Box>
      </Stack>
    </Card>
  )
}

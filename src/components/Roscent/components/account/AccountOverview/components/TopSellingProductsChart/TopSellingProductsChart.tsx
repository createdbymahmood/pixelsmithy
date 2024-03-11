import {Card, rem, Skeleton, Stack, Title} from '@mantine/core'
import React from 'react'

export function TopSellingProductsChart() {
  return (
    <Card display='flex' h={rem(312)}>
      <Stack h='100%'>
        <Title order={5}>Top Selling Products</Title>
        <Skeleton h='100%' radius='lg' />
      </Stack>
    </Card>
  )
}

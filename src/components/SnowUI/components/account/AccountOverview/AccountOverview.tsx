'use client'
import {Grid, SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {
  MobileApplicationAnnouncement,
  ProductDelivery,
  ProfileDetails,
  StockReport,
  TopSellingProductsChart,
} from './components'

export function AccountOverview() {
  return (
    <Stack gap='xl'>
      <ProfileDetails />

      <Grid>
        <Grid.Col span={8}>
          <TopSellingProductsChart />
        </Grid.Col>
        <Grid.Col span={4}>
          <MobileApplicationAnnouncement />
        </Grid.Col>
      </Grid>

      <SimpleGrid cols={{xs: 1, md: 2}}>
        <ProductDelivery />
        <StockReport />
      </SimpleGrid>
    </Stack>
  )
}

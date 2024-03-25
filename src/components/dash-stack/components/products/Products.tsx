'use client'

import {PageHeader} from '@/components/dash-stack/components'
import {Stack} from '@mantine/core'

import {ProductsCarousel, PromotionsCarousel} from './components'

export function Products() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Products</PageHeader>
      <PromotionsCarousel />
      <ProductsCarousel />
    </Stack>
  )
}

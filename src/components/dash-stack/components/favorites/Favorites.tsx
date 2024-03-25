'use client'

import {PageHeader, Product} from '@/components/dash-stack/components'
import {SimpleGrid, Stack} from '@mantine/core'
import {range} from 'lodash-es'

export function Favorites() {
  const content = range(0, 9).map((index) => {
    return <Product key={index} />
  })

  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Favorites</PageHeader>
      <SimpleGrid cols={3}>{content}</SimpleGrid>
    </Stack>
  )
}

'use client'

import {Group, Input, rem, Stack} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {PageHeader} from '@/components/DashStack/components'

import {ProductStockTable} from './components'

function SearchInput() {
  const searchInputLeftSection = (
    <MagnifyingGlass className='icon-size-sm' weight='bold' />
  )

  return (
    <Input
      leftSection={searchInputLeftSection}
      maw={rem(253)}
      placeholder='Search product name'
      radius='lg'
      variant='default'
    />
  )
}

export function ProductStock() {
  return (
    <Stack>
      <Group justify='space-between' wrap='nowrap'>
        <PageHeader>Product Stock</PageHeader>
        <SearchInput />
      </Group>
      <ProductStockTable />
    </Stack>
  )
}

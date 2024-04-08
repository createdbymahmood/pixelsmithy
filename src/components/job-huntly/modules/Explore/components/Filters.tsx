'use client'

import type {ExploreFilter} from '@job-huntly/modules/Explore'
import {Accordion, Box, Checkbox, rem, Stack} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

function FiltersImpl({filters}: FiltersProps) {
  const items = filters.map((item) => {
    const selectables = item.elements.map((filter) => {
      const label = `${filter.label} (${filter.count})`
      return <Checkbox key={filter.label} label={label} size='md' />
    })

    return (
      <Accordion.Item key={item.title} value={item.title}>
        <Accordion.Control>{item.title}</Accordion.Control>
        <Accordion.Panel>
          <Stack gap={rem(20)}>{selectables}</Stack>
        </Accordion.Panel>
      </Accordion.Item>
    )
  })

  return (
    <Accordion
      chevron={<CaretDown className='icon-size-sm' weight='bold' />}
      defaultValue={filters.map((filter) => filter.title)}
      multiple
    >
      {items}
    </Accordion>
  )
}
interface FiltersProps {
  filters: ExploreFilter[]
}

export function Filters({filters}: FiltersProps) {
  return (
    <Box
      className='shrink-0'
      h='100%'
      w={`calc(${rem(234)} + var(--mantine-spacing-xl))`}
    >
      <PerfectScrollbar>
        <Box pr='xl'>
          <FiltersImpl filters={filters} />
        </Box>
      </PerfectScrollbar>
    </Box>
  )
}

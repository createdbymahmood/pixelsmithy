import {Group, rem, Stack} from '@mantine/core'
import React from 'react'

import {JobFilters, SearchBox} from './components'

const SEARCH_BOX_HEIGHT = rem(141.59)
const contentHeight = `calc(100% - (${SEARCH_BOX_HEIGHT} + var(--mantine-spacing-xxxl))`

export function FindJobs() {
  return (
    <Stack className='overflow-y-hidden' gap='xxxl' h='100%'>
      <SearchBox />

      <Group gap='xxl' h={contentHeight} wrap='nowrap'>
        <JobFilters />
      </Group>
    </Stack>
  )
}

import {Divider, Group, rem, Stack as MantineStack} from '@mantine/core'
import React from 'react'

import {Filters, List, SearchBox} from './components'

/* SearchBox Interfaces */
export interface SearchBoxFormControlSearchConfig {
  placeholder: string
}

export interface SearchBoxFormControlLocationConfig {
  placeholder: string
}

export interface SearchBoxFormControlsConfig {
  search: SearchBoxFormControlSearchConfig
  location: SearchBoxFormControlLocationConfig
}

export interface SearchBoxFormValues {
  search: string
  location: string
}

export interface ExploreSearchBoxFormConfig {
  controls: SearchBoxFormControlsConfig
  onSubmit: (values: SearchBoxFormValues) => void
}

export interface ExploreSearchBoxConfig {
  form: ExploreSearchBoxFormConfig
  text: string
}

/* Filters Interfaces */
interface FilterElement {
  label: string
  count: string
}
export interface ExploreFilter {
  title: string
  elements: FilterElement[]
}

export interface ExploreFiltersConfig {
  filters: ExploreFilter[]
}

/* List Interfaces */
export enum ExploreListMode {
  Grid = 'Grid',
  Stack = 'Stack',
}

export interface ExploreListHeaderConfig {
  title: string
  description: string
  onSortChange: () => void
}

export interface ExploreListConfig<T> {
  header: ExploreListHeaderConfig
  render: (elements: T[], listMode: ExploreListMode) => JSX.Element
  elements: T[]
}

export interface ExploreConfig<T> {
  searchBox: ExploreSearchBoxConfig
  filters: ExploreFilter[]
  list: ExploreListConfig<T>
}

export interface ExploreProps<T> {
  config: ExploreConfig<T>
}

const SEARCH_BOX_HEIGHT = rem(141.59)
const contentHeight = `calc(100% - (${SEARCH_BOX_HEIGHT} + var(--mantine-spacing-xxxl) * 2)`

export function ExploreModule<T>({config}: ExploreProps<T>) {
  return (
    <MantineStack className='overflow-y-hidden' gap='xxxl' h='100%'>
      <SearchBox {...config.searchBox} />
      <Divider />

      <Group align='flex-start' gap='xxl' h={contentHeight} wrap='nowrap'>
        <Filters filters={config.filters} />
        <List {...config.list} />
      </Group>
    </MantineStack>
  )
}

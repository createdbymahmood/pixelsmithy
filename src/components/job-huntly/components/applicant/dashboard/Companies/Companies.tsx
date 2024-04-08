'use client'

import {SimpleGrid} from '@mantine/core'
import React from 'react'

import type {Company} from '@/components/job-huntly/mock/companies'
import {companies} from '@/components/job-huntly/mock/companies'
import type {
  ExploreConfig,
  ExploreListConfig,
  ExploreListHeaderConfig,
  ExploreSearchBoxConfig,
  ExploreSearchBoxFormConfig,
} from '@/components/job-huntly/modules'
import {ExploreModule} from '@/components/job-huntly/modules'

import {GridCompanyCard} from './components'

type T = Company

const filters = [
  {
    title: 'Industry',
    elements: [
      {label: 'Advertising', count: '43'},
      {label: 'Business Service', count: '4'},
      {label: 'Blockchain', count: '5'},
      {label: 'Cloud', count: '15'},
      {label: 'Customer Tech', count: '5'},
      {label: 'Education', count: '34'},
      {label: 'Fintech', count: '45'},
      {label: 'Gaming', count: '33'},
      {label: 'Food & Beverage', count: '5'},
      {label: 'Healthcare', count: '3'},
      {label: 'Hosting', count: '5'},
      {label: 'Media', count: '4'},
    ],
  },
  {
    title: 'Company Size',
    elements: [
      {label: '1-50', count: '25'},
      {label: '51-150', count: '57'},
      {label: '151-250', count: '45'},
      {label: '251-500', count: '4'},
      {label: '501-100', count: '43'},
      {label: '1000-above', count: '23'},
    ],
  },
]

const header: ExploreListHeaderConfig = {
  title: 'All Companies',
  description: 'Showing 75 results',
  onSortChange() {
    /*  */
  },
}

const list: ExploreListConfig<T> = {
  header,
  elements: companies,
  render(elements) {
    return (
      <SimpleGrid cols={{lg: 2, md: 1}} spacing='xxxl'>
        {elements.map((element) => (
          <GridCompanyCard {...element} key={element.id} />
        ))}
      </SimpleGrid>
    )
  },
}

const form: ExploreSearchBoxFormConfig = {
  controls: {
    search: {placeholder: 'Company title or keyword'},
    location: {placeholder: 'Location'},
  },
  onSubmit(values) {
    /*  */
  },
}

const searchBox: ExploreSearchBoxConfig = {
  form,
  text: 'Popular : Twitter, Microsoft, Apple, Facebook',
}

const config: ExploreConfig<T> = {
  filters,
  list,
  searchBox,
}

export function Companies() {
  return <ExploreModule config={config} />
}

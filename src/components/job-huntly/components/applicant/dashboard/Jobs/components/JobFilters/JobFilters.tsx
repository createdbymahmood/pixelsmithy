'use client'

import {Accordion, Box, Checkbox, rem, Stack} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
import {omit} from 'lodash-es'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './JobFilters.module.scss'

const filters = [
  {
    title: 'Type of Employment',
    elements: [
      {label: 'Full-time', count: '3'},
      {label: 'Part-time', count: '5'},
      {label: 'Remote', count: '2'},
      {label: 'Internship', count: '24'},
      {label: 'Contract', count: '3'},
    ],
  },
  {
    title: 'Categories',
    elements: [
      {label: 'Design', count: '24'},
      {label: 'Sales', count: '3'},
      {label: 'Marketing', count: '3'},
      {label: 'Business', count: '3'},
      {label: 'Human Resource', count: '6'},
      {label: 'Finance', count: '4'},
      {label: 'Engineering', count: '4'},
      {label: 'Technology', count: '5'},
    ],
  },
  {
    title: 'Job Level',
    elements: [
      {label: 'Entry Level', count: '57'},
      {label: 'Mid Level', count: '3'},
      {label: 'Senior Level', count: '5'},
      {label: 'Director', count: '12'},
      {label: 'VP or Above', count: '8'},
    ],
  },
  {
    title: 'Salary Range',
    elements: [
      {label: '$700 - $1000', count: '4'},
      {label: '$100 - $1500', count: '6'},
      {label: '$1500 - $2000', count: '10'},
      {label: '$3000 or above', count: '4'},
    ],
  },
]

function Filters() {
  const items = filters.map((item) => {
    const selectables = item.elements.map((filter) => {
      const label = `${filter.label} (${filter.count})`
      return (
        <Checkbox
          key={filter.label}
          classNames={{label: styles.checkboxLabel}}
          label={label}
          size='md'
        />
      )
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
      classNames={omit(styles, ['checkboxLabel'])}
      defaultValue={filters.map((filter) => filter.title)}
      multiple
    >
      {items}
    </Accordion>
  )
}

export function JobFilters() {
  return (
    <Box
      className='shrink-0'
      h='100%'
      w={`calc(${rem(234)} + var(--mantine-spacing-xl))`}
    >
      <PerfectScrollbar>
        <Box pr='xl'>
          <Filters />
        </Box>
      </PerfectScrollbar>
    </Box>
  )
}

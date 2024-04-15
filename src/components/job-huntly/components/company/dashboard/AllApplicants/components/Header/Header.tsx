'use client'

import {
  Box,
  Button,
  Divider,
  Group,
  SegmentedControl,
  TextInput,
  Title,
} from '@mantine/core'
import {FunnelSimple, MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function Search() {
  const leftSection = (
    <Box className='icon-size-lg' component={MagnifyingGlass} weight='bold' />
  )

  return (
    <TextInput
      leftSection={leftSection}
      ml='auto'
      placeholder='Search product name'
      size='md'
      variant='default'
    />
  )
}

function Filter() {
  const leftSection = (
    <Box className='icon-size-lg' component={FunnelSimple} weight='bold' />
  )
  return (
    <Button fw='500' leftSection={leftSection} size='md' variant='default'>
      Filter
    </Button>
  )
}

function ViewSwitch() {
  return (
    <SegmentedControl
      data={['Pipeline View', 'Table View']}
      defaultValue='Table View'
      size='md'
    />
  )
}

export function Header() {
  return (
    <Group py='xl'>
      <Title order={4}>Total Applicants: 19</Title>
      <Search />
      <Filter />
      <Divider my='xs' orientation='vertical' />
      <ViewSwitch />
    </Group>
  )
}

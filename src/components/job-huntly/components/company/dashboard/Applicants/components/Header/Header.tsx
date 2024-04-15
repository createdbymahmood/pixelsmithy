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

import type {UseApplicantsViewStateReturn} from '../../Applicants'
import {ApplicantsView} from '../../Applicants'

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

interface ViewSwitchProps {
  state: UseApplicantsViewStateReturn
}

function ViewSwitch({state}: ViewSwitchProps) {
  return (
    <SegmentedControl
      data={[ApplicantsView.Pipeline, ApplicantsView.Table]}
      defaultValue={ApplicantsView.Table}
      size='md'
      onChange={state.setView as (value: string) => void}
    />
  )
}

interface HeaderProps {
  state: UseApplicantsViewStateReturn
}

export function Header({state}: HeaderProps) {
  return (
    <Group pb='xl'>
      <Title order={4}>Total Applicants: 19</Title>
      <Search />
      <Filter />
      <Divider my='xs' orientation='vertical' />
      <ViewSwitch state={state} />
    </Group>
  )
}

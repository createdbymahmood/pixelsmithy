import {Box, Divider, Group, Input, Space, Stack, Text} from '@mantine/core'
import {MagnifyingGlass, MapPin} from '@phosphor-icons/react/dist/ssr'
import React, {Fragment} from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {FullscreenDrawer} from '@/components/flights/components'

function CurrentLocation() {
  return (
    <Group gap='sm'>
      <Box
        c='primary'
        className='icon-size-md'
        component={MapPin}
        weight='bold'
      />
      <Text fw='500' size='sm'>
        My location
      </Text>
    </Group>
  )
}

function SearchListItem() {
  return (
    <Group className='cursor-pointer' gap='sm'>
      <Box
        c='gray.9'
        className='icon-size-md'
        component={MapPin}
        weight='bold'
      />
      <Stack gap={0}>
        <Text>Saint-Petersburg</Text>
        <Text c='gray.5' size='sm'>
          Russia
        </Text>
      </Stack>
    </Group>
  )
}

function SearchList() {
  return (
    <Fragment>
      <CurrentLocation />

      <Space h='xxxl' />
      <Divider />
      <Space h='xxxl' />

      <Stack gap='xl'>
        <SearchListItem />
      </Stack>
    </Fragment>
  )
}

export function Search() {
  const searchInputLeftSection = (
    <Box className='icon-size-md' component={MagnifyingGlass} weight='bold' />
  )

  return (
    <IOSScreen bg='gray.4' variant='dark'>
      <FullscreenDrawer>
        <Stack gap={0}>
          <Input
            leftSection={searchInputLeftSection}
            placeholder='Where to find an airplane tour?'
            radius='md'
          />
          <Space h='xxxl' />
          <SearchList />
        </Stack>
      </FullscreenDrawer>
    </IOSScreen>
  )
}

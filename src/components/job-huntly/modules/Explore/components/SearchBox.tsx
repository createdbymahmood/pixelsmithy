'use client'

import type {ExploreSearchBoxConfig} from '@job-huntly/modules/Explore'
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {MagnifyingGlass, MapPin} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

interface SearchBoxProps extends ExploreSearchBoxConfig {}

export function SearchBox({form, text}: SearchBoxProps) {
  const searchLeftSection = (
    <Box c='neutrals.6' className='icon-size-lg' component={MagnifyingGlass} />
  )
  const locationLeftSection = (
    <Box c='neutrals.6' className='icon-size-lg' component={MapPin} />
  )
  return (
    <Stack>
      <Paper p='xl' withBorder>
        <Group gap='xl' wrap='nowrap'>
          <TextInput
            classNames={{input: 'borderless'}}
            leftSection={searchLeftSection}
            placeholder={form.controls.search.placeholder}
            size='md'
            w='100%'
          />

          <Divider orientation='vertical' />
          <Autocomplete
            classNames={{input: 'borderless'}}
            leftSection={locationLeftSection}
            placeholder={form.controls.location.placeholder}
            size='md'
            w='100%'
          />
          <Button className='shrink-0' size='md'>
            Search
          </Button>
        </Group>
      </Paper>
      <Text c='neutrals.4'>{text}</Text>
    </Stack>
  )
}

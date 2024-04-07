'use client'

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
import clsx from 'clsx'
import React from 'react'

import styles from './SearchBox.module.scss'

export function SearchBox() {
  return (
    <Stack>
      <Paper p='xl' withBorder>
        <Group gap='xl' wrap='nowrap'>
          <TextInput
            classNames={{
              input: clsx('borderless', styles.input),
              section: styles.section,
            }}
            leftSection={
              <Box
                c='neutrals.6'
                className='icon-size-lg'
                component={MagnifyingGlass}
              />
            }
            placeholder='Job title or keyword'
            size='md'
            w='100%'
          />

          <Divider orientation='vertical' />
          <Autocomplete
            classNames={{input: clsx('borderless', styles.input)}}
            leftSection={
              <Box c='neutrals.6' className='icon-size-lg' component={MapPin} />
            }
            placeholder='Target Location'
            size='md'
            w='100%'
          />
          <Button className='shrink-0' size='md'>
            Search
          </Button>
        </Group>
      </Paper>
      <Text c='neutrals.4'>
        Popular : UI Designer, UX Researcher, Android, Admin
      </Text>
    </Stack>
  )
}

'use client'

import {Box, Button, Group, Text} from '@mantine/core'
import {FunnelSimple, MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function Header() {
  const searchButtonIcon = (
    <Box className='icon-size-lg' component={MagnifyingGlass} weight='bold' />
  )

  const filterButtonIcon = (
    <Box className='icon-size-lg' component={FunnelSimple} weight='bold' />
  )

  return (
    <Group py='xl'>
      <Text fw='600' size='xl'>
        Applications History
      </Text>

      <Button
        c='neutrals.6'
        color='primary.1'
        fw='500'
        leftSection={searchButtonIcon}
        ml='auto'
        size='md'
        variant='outline'
      >
        Search
      </Button>
      <Button
        c='neutrals.6'
        color='primary.1'
        fw='500'
        leftSection={filterButtonIcon}
        size='md'
        variant='outline'
      >
        Filter
      </Button>
    </Group>
  )
}

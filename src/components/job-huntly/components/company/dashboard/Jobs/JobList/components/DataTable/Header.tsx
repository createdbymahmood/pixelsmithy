import {Box, Button, Divider, Group, rem, Stack, Text} from '@mantine/core'
import {FunnelSimple} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function Header() {
  const filterButtonIcon = (
    <Box className='icon-size-lg' component={FunnelSimple} weight='bold' />
  )

  return (
    <Stack gap={0}>
      <Group justify='space-between' px='xl' py={rem(20)}>
        <Text fw='600' size='xl'>
          Job List
        </Text>
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
      <Divider />
    </Stack>
  )
}

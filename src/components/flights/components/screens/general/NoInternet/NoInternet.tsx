import {Box, Button, Card, rem, Stack, Text} from '@mantine/core'
import {WifiHigh} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

export function NoInternet() {
  return (
    <IOSScreen bg='primary' variant='light'>
      <Stack
        align='center'
        c='white'
        flex={1}
        gap={0}
        h='100%'
        justify='space-between'
        px={rem(20)}
      >
        <Box />
        <Stack align='center'>
          <Card
            bg='primary.4'
            c='white'
            component={WifiHigh}
            h={rem(100)}
            mb={rem(24)}
            p={rem(16.3)}
            radius='xl'
            w={rem(100)}
            weight='bold'
          />
          <Text fw='600' mb='sm' size='xs' variant='display'>
            No connection
          </Text>

          <Text px={rem(43)} size='md' ta='center'>
            No internet connection, check the connection and try again
          </Text>
        </Stack>

        <Button
          c='primary'
          color='white'
          mb='sm'
          radius='md'
          size='lg'
          variant='default'
          fullWidth
        >
          Try again
        </Button>
      </Stack>
    </IOSScreen>
  )
}

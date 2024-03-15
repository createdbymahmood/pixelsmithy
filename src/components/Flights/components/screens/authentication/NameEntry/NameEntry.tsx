import type {TextProps} from '@mantine/core'
import {Box, Button, Input, rem, Stack, Text} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

export function NameEntry() {
  const titleProps: TextProps = {
    fw: '700',
    size: 'sm',
    variant: 'display',
  }

  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='xxl' mt={rem(63)} px='lg'>
        <Box w={rem(236)}>
          <Text {...titleProps} component='span'>
            Enter
          </Text>

          <Text component='span' ml='xs' {...titleProps} c='primary'>
            first
          </Text>

          <Text {...titleProps} component='span' ml='xs'>
            &
          </Text>

          <Text {...titleProps} c='primary'>
            last name
          </Text>
        </Box>

        <Input defaultValue='Арт' placeholder='First Name' />
        <Input defaultValue='' placeholder='Last Name' />

        <Box mb='sm' mt='auto' w='100%'>
          <Button radius='md' size='lg' fullWidth>
            Next
          </Button>
        </Box>
      </Stack>
    </IOSScreen>
  )
}

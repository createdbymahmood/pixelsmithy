import type {TextProps} from '@mantine/core'
import {Box, Button, PinInput, rem, Stack, Text} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

export function ConfirmationCode() {
  const titleProps: TextProps = {
    fw: '700',
    size: 'sm',
    variant: 'display',
  }

  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='xxl' mt={rem(63)} px='lg'>
        <Box w={rem(298)}>
          <Text {...titleProps} component='span'>
            Enter the
          </Text>

          <Text {...titleProps} c='primary'>
            confirmation code
          </Text>
        </Box>

        <PinInput
          inputMode='numeric'
          length={5}
          placeholder=''
          radius='md'
          size='lg'
          type={/^[0-3]*$/}
        />

        <Box mb='sm' mt='auto' w='100%'>
          <Button radius='md' size='lg' fullWidth>
            Next
          </Button>
        </Box>
      </Stack>
    </IOSScreen>
  )
}

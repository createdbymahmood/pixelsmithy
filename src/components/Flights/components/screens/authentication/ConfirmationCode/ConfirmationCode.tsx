import type {TextProps} from '@mantine/core'
import {Box, Button, PinInput, rem, Stack, Text} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

const titleProps: TextProps = {
  fw: '700',
  size: 'sm',
  variant: 'display',
}

function Header() {
  return (
    <Box w={rem(298)}>
      <Text {...titleProps} component='span'>
        Enter the
      </Text>

      <Text {...titleProps} c='primary'>
        confirmation code
      </Text>
    </Box>
  )
}

export function ConfirmationCode() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='xxl' mt={rem(63)} px='lg'>
        <Header />
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

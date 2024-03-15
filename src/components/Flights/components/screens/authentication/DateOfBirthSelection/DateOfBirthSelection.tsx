import type {TextProps} from '@mantine/core'
import {Box, Button, rem, Stack, Text} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

const titleProps: TextProps = {
  fw: '700',
  size: 'sm',
  variant: 'display',
}

function Header() {
  return (
    <Box w={rem(236)}>
      <Text {...titleProps} component='span'>
        Select your
      </Text>

      <Text {...titleProps} c='primary'>
        date of birth
      </Text>
    </Box>
  )
}

export function DateOfBirthSelection() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='xxl' mt={rem(63)} px='lg'>
        <Header />

        <Box mb='sm' mt='auto' w='100%'>
          <Button radius='md' size='lg' fullWidth>
            Next
          </Button>
        </Box>
      </Stack>
    </IOSScreen>
  )
}

import type {TextProps} from '@mantine/core'
import {Box, Button, Input, rem, Stack, Text} from '@mantine/core'
import {Flag} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

const titleProps: TextProps = {
  fw: '700',
  size: 'sm',
  variant: 'display',
}

function Header() {
  return (
    <Box maw={rem(236)}>
      <Text {...titleProps} component='span'>
        Enter
      </Text>

      <Text component='span' ml='xs' {...titleProps} c='primary'>
        phone number
      </Text>
    </Box>
  )
}

export function PhoneNumberEntry() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='xxl' mt={rem(63)} px='lg'>
        <Header />

        <Input
          defaultValue='+7 999 896 85 85'
          leftSection={<Flag className='icon-size-lg' weight='duotone' />}
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

import type {TextProps} from '@mantine/core'
import {Box, Button, Input, rem, Stack, Text} from '@mantine/core'
import {Flag} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

export function PhoneNumberEntry() {
  const titleProps: TextProps = {
    fw: '700',
    size: 'sm',
    variant: 'display',
  }

  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack gap='xxl' mt={rem(63)} px='lg' style={{flex: 1}}>
        <Box maw={rem(236)}>
          <Text {...titleProps} component='span'>
            Enter
          </Text>

          <Text component='span' ml='xs' {...titleProps} c='primary'>
            phone number
          </Text>
        </Box>

        <Input
          defaultValue='+7 999 896 85 85'
          leftSection={<Flag className='icon-size-lg' weight='duotone' />}
          size='lg'
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

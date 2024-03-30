import {Box, rem, Stack} from '@mantine/core'
import {Airplane} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'

export function Splash() {
  return (
    <IOSScreen bg='primary' variant='light'>
      <Stack align='center' h='100%' justify='center'>
        <Box
          c='white'
          component={Airplane}
          h={rem(60)}
          w={rem(53.3)}
          weight='fill'
        />
      </Stack>
    </IOSScreen>
  )
}

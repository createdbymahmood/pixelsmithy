import {Box, Button, Skeleton} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {FullscreenDrawer} from '@/components/flights/components'

function DatePickerView() {
  return <Skeleton flex={1} mx='auto' />
}

export function DateSelection() {
  return (
    <IOSScreen bg='gray.4' variant='dark'>
      <FullscreenDrawer>
        <DatePickerView />
        <Box mt='lg'>
          <Button radius='md' size='lg' fullWidth>
            Find tour
          </Button>
        </Box>
      </FullscreenDrawer>
    </IOSScreen>
  )
}

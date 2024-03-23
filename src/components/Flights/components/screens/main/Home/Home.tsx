import type {TextProps} from '@mantine/core'
import {Box, Button, Card, rem, Stack, Text} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {BottomNavigation} from '@/components/Flights/components/screens/general/components'

import {HelpfulInformation, PassengersCount, SearchBox} from './components'

function FormView() {
  return (
    <Stack gap='md'>
      <SearchBox />
      <PassengersCount />
      <Button radius='md' size='lg' fullWidth>
        Find tour
      </Button>
    </Stack>
  )
}

const titleProps: TextProps = {
  fw: '700',
  size: 'sm',
  variant: 'display',
}

function Header() {
  return (
    <Box w={rem(298)}>
      <Text {...titleProps} c='primary'>
        Extreme
      </Text>

      <Text {...titleProps} component='span'>
        airplane flight
      </Text>
    </Box>
  )
}

export function Home() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='md' mt={rem(63)}>
        <Card>
          <Stack gap={rem(40)}>
            <Header />

            <FormView />
          </Stack>
        </Card>

        <Card>
          <HelpfulInformation />
        </Card>
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

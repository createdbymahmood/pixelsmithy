import type {BoxProps, TextProps} from '@mantine/core'
import {Box, Button, Card, rem, Stack, Text} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import type {IconProps} from '@phosphor-icons/react'
import {CalendarBlank} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {BottomNavigation} from '@/components/flights/components/screens/general/components'
import {PassengersCount} from '@/components/flights/components/screens/main/Home/components'

import {SwappableDepartureArrivalSearchInput} from './components'

const leadingIconProps: BoxProps & IconProps = {
  c: 'gray.9',
  className: 'icon-size-lg',
}

function DepartureDatePicker() {
  return (
    <Card p={0} shadow='xl'>
      <DatePickerInput
        className=''
        classNames={{input: 'borderless'}}
        leftSection={<Box {...leadingIconProps} component={CalendarBlank} />}
        placeholder='Date of departure'
      />
    </Card>
  )
}

function ArrivalDatePicker() {
  return (
    <Card p={0} shadow='xl'>
      <DatePickerInput
        className=''
        classNames={{input: 'borderless'}}
        leftSection={<Box {...leadingIconProps} component={CalendarBlank} />}
        placeholder='Date of arrival'
      />
    </Card>
  )
}

function FormView() {
  return (
    <Stack gap='md'>
      <SwappableDepartureArrivalSearchInput />
      <DepartureDatePicker />
      <ArrivalDatePicker />
      <PassengersCount />
      <Button radius='md' size='lg' fullWidth>
        Find
      </Button>
    </Stack>
  )
}

const titleProps: TextProps = {
  fw: '700',
  size: 'xs',
  variant: 'display',
}

function Header() {
  return (
    <Box w={rem(298)}>
      <Text {...titleProps} c='primary'>
        Split the payment
      </Text>

      <Text {...titleProps} component='span'>
        with other passengers
      </Text>
    </Box>
  )
}

export function FlightSearch() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack flex={1} gap='md' mt={rem(63)}>
        <Card>
          <Stack gap={rem(40)}>
            <Header />

            <FormView />
          </Stack>
        </Card>
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

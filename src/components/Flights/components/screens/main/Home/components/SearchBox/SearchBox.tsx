import type {BoxProps} from '@mantine/core'
import {Box, Card, Divider, Input, Stack} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import type {IconProps} from '@phosphor-icons/react'
import {CalendarBlank, MapPin} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const leadingIconProps: BoxProps & IconProps = {
  c: 'gray.9',
  className: 'icon-size-md',
  weight: 'bold',
}

export function SearchBox() {
  return (
    <Card p={0} shadow='xl'>
      <Stack gap={0}>
        <Input
          classNames={{input: 'borderless'}}
          leftSection={<Box component={MapPin} {...leadingIconProps} />}
          placeholder='Where to find an airplane tour?'
        />

        <Divider />

        <DatePickerInput
          classNames={{input: 'borderless'}}
          leftSection={<Box {...leadingIconProps} component={CalendarBlank} />}
          placeholder='Sunday, July 30'
          w='100%'
        />
      </Stack>
    </Card>
  )
}

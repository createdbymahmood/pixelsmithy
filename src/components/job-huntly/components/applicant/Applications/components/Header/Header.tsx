'use client'

import {Box, Group, rem, Stack, Text, Title} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import {CalendarBlank} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'
import React, {useState} from 'react'

export function Header() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date('2023-04-01'),
    new Date('2023-04-07'),
  ])

  const formattedDates = value
    .map((v) => dayJS(v).format('MMMM DD'))
    .join(' - ')

  return (
    <Group justify='space-between'>
      <Stack gap='xs'>
        <Title order={4}>Keep it up, Jake</Title>
        <Text c='neutrals.4' fw='500'>
          Here is job applications status from {formattedDates}.
        </Text>
      </Stack>

      <DatePickerInput
        miw={rem(172.68)}
        rightSection={
          <Box
            c='primary'
            className='icon-size-md'
            component={CalendarBlank}
            weight='bold'
          />
        }
        size='md'
        type='range'
        value={value}
        valueFormat='MMM DD'
        onChange={setValue}
      />
    </Group>
  )
}

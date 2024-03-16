import './DateSelection.scss'

import {Box, Button} from '@mantine/core'
import {enGB} from 'date-fns/locale'
import React, {useState} from 'react'
import type {DateChangeCallBack} from 'react-nice-dates'
import {DatePickerCalendar} from 'react-nice-dates'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {FullscreenDrawer} from '@/components/Flights/components'
import {inter} from '@/lib/styles/font/inter'

function DatePickerCalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div>
      <DatePickerCalendar
        date={date}
        locale={enGB}
        minimumDate={new Date()}
        onDateChange={setDate as unknown as DateChangeCallBack}
      />
    </div>
  )
}

function DatePickerView() {
  return (
    <div className={inter.className}>
      <DatePickerCalendarExample />
    </div>
  )
}

export function DateSelection() {
  return (
    <IOSScreen bg='gray.4' variant='dark'>
      <FullscreenDrawer>
        <DatePickerView />
        <Box mt='auto'>
          <Button radius='md' size='lg' fullWidth>
            Find tour
          </Button>
        </Box>
      </FullscreenDrawer>
    </IOSScreen>
  )
}

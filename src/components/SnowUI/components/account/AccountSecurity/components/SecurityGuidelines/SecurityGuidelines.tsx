import dayjs from 'dayjs'
import React from 'react'

import {CardWithCarousel} from '../common'

const alerts = [
  {
    title:
      'As we approach one year of working remotely, we wanted to take a look back and share some ways teams around the world have collaborated effectively.',
    date: dayjs(),
    cta: 'Explore',
  },
  {
    title:
      'As we approach 2 years of working remotely, we wanted to take a look back and share some ways teams around the world have collaborated effectively.',
    date: dayjs(),
    cta: 'Explore',
  },
  {
    title:
      'As we approach 3 years of working remotely, we wanted to take a look back and share some ways teams around the world have collaborated effectively.',
    date: dayjs(),
    cta: 'Explore',
  },
]

export function SecurityGuidelines() {
  return <CardWithCarousel slides={alerts} title='Security Guidelines' />
}

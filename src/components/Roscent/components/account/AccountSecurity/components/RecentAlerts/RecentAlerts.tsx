import dayjs from 'dayjs'
import React from 'react'

import {CardWithCarousel} from '../common/CardWithCarousel'

const alerts = [
  {
    title:
      'In the last year, you’ve probably had to adapt to new ways of living and working.',
    date: dayjs(),
    cta: 'Learn more',
  },
  {
    title:
      'In the last 3 years, you’ve probably had to adapt to new ways of living and working.',
    date: dayjs(),
    cta: 'Learn more',
  },
  {
    title:
      'In the last 2 years, you’ve probably had to adapt to new ways of living and working.',
    date: dayjs(),
    cta: 'Learn more',
  },
]

export function RecentAlerts() {
  return <CardWithCarousel slides={alerts} title='Recent Alerts' />
}

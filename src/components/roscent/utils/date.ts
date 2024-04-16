import '@/utils/date-plugins'

import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'

export const dateToString = (date: Dayjs) => {
  const isMoreThanFiveMonthAgo = date.isBefore(
    dayJS().subtract(5, 'month'),
    'date',
  )

  if (isMoreThanFiveMonthAgo) return date.format('MMM D, YYYY')
  return date.fromNow()
}

export const toInboxSidebarTime = (date: Dayjs) => {
  const isToday = date.isToday()

  if (isToday) {
    return date.format('HH:mm')
  }

  return date.format('MMM D')
}

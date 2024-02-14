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

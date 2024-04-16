import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isTodayPlugin from 'dayjs/plugin/isToday'
import localeData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'

dayJS.extend(duration)
dayJS.extend(relativeTime)
dayJS.extend(isTodayPlugin)
dayJS.extend(localeData)

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

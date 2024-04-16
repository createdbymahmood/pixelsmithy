import dayJS from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isTodayPlugin from 'dayjs/plugin/isToday'
import localeData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'

dayJS.extend(duration)
dayJS.extend(relativeTime)
dayJS.extend(isTodayPlugin)
dayJS.extend(localeData)

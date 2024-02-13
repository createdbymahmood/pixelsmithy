import {
  Avatar,
  Group,
  rem,
  Stack,
  Text,
  Timeline as OriginalTimeline,
  Title,
} from '@mantine/core'
import clsx from 'clsx'
import dayJS from 'dayjs'
import {range} from 'lodash-es'

import {activities} from '@/components/SnowUI/layout/SnowUILayout/components/RightSidePanel/RightSidePanel'

import styles from './ProjectOverviewTimeline.module.scss'

function generateWeekTimeline() {
  const startingDayOfWeek = dayJS().startOf('week')
  return range(0, 7).map((offset) => {
    return startingDayOfWeek.add(offset, 'days')
  })
}

function Timeline() {
  const content = activities.map((activity) => {
    return (
      <OriginalTimeline.Item
        key={activity.title}
        bullet={<Avatar radius='xl' size={24} src='' />}
        title={activity.title}
      >
        <Text c='dimmed' size='xs'>
          {activity.date.fromNow()}
        </Text>
      </OriginalTimeline.Item>
    )
  })

  return (
    <OriginalTimeline bulletSize={24} lineWidth={1}>
      {content}
    </OriginalTimeline>
  )
}

function TimelineHeader() {
  const timelineDays = generateWeekTimeline().map((day) => ({
    date: day.format('DD'),
    day: day.format('dd'),
    isToday: day.isSame(dayJS(), 'date'),
  }))

  const content = timelineDays.map((day) => (
    <Stack
      key={day.date}
      align='center'
      className={clsx(styles.weekDayWrapper, {
        [styles.activeWeekDayWrapper]: day.isToday,
      })}
      gap={rem(2)}
    >
      <Text className={styles.weekDay} size='xs'>
        {day.day}
      </Text>
      <Text className={styles.weekDate} size='xs'>
        {day.date}
      </Text>
    </Stack>
  ))

  return <Group justify='space-between'>{content}</Group>
}

export function ProjectOverviewTimeline() {
  return (
    <Stack className={styles.card} gap='md'>
      <Title order={5}>What's on the road?</Title>
      <TimelineHeader />
      <Timeline />
    </Stack>
  )
}

import {
  Avatar,
  Card,
  Group,
  rem,
  Stack,
  Text,
  Timeline as OriginalTimeline,
  Title,
} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {range} from 'lodash-es'
import {useState} from 'react'

import {activities} from '@/components/SnowUI/layout/SnowUIDashboardLayout/components/RightSidePanel/RightSidePanel'

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

function useTimelineHeaderState() {
  const today = dayJS()
  const [selectedDay, setSelectedDay] = useState<Dayjs>(today)

  const timelineDays = generateWeekTimeline().map((day) => ({
    instance: day,
    date: day.format('DD'),
    day: day.format('dd'),
    isSelected: selectedDay.isSame(day, 'date'),
  }))

  const onDaySelect = useCallbackRef((d: Dayjs) => () => {
    setSelectedDay(d)
  })

  return {timelineDays, onDaySelect}
}

function TimelineHeader() {
  const {onDaySelect, timelineDays} = useTimelineHeaderState()

  const content = timelineDays.map((day) => (
    <Stack
      key={day.date}
      align='center'
      className={clsx(styles.weekDayWrapper, {
        [styles.activeWeekDayWrapper]: day.isSelected,
      })}
      gap={rem(2)}
      onClick={onDaySelect(day.instance)}
    >
      <Text className={styles.weekDay} size='xs'>
        {day.day}
      </Text>

      <Text className={styles.weekDate} size='xs'>
        {day.date}
      </Text>
    </Stack>
  ))

  return (
    <Group gap='0' justify='space-between' wrap='nowrap'>
      {content}
    </Group>
  )
}

export function ProjectOverviewTimeline() {
  return (
    <Stack component={Card} gap='md'>
      <Title order={5}>What's on the road?</Title>
      <TimelineHeader />
      <Timeline />
    </Stack>
  )
}

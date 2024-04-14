'use client'

import {
  Avatar,
  Box,
  Button,
  Group,
  Paper,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {DotsThree, PencilSimple, Plus} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import styles from './InterviewSchedule.module.scss'

function HeaderAction() {
  const leftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )
  return (
    <Button
      leftSection={leftSection}
      ml='auto'
      pr={0}
      size='md'
      variant='transparent'
    >
      Add Schedule Interview
    </Button>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Text fw='600'>Interview List</Text>
      <HeaderAction />
    </Group>
  )
}

interface Interview {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string
  date: string
  interviewer: string
  stage: string
  schedule: string
  info: string
}

const interviews: Interview[] = [
  {
    id: '1',
    date: 'Tomorrow - 10 July, 2021',
    interviewer: 'Kathryn Murphy',
    stage: 'Written Test',
    schedule: '10:00 AM - 11:30 AM',
    info: 'Silver Crysta Room, Nomad',
  },
  {
    id: '2',
    date: '11 July, 2021',
    interviewer: 'Jenny Wilson',
    stage: 'Written Test 2',
    schedule: '10:00 AM - 11:00 AM',
    info: 'Silver Crysta Room, Nomad',
  },
  {
    id: '3',
    date: '12 July, 2021',
    interviewer: 'Thad Eddings',
    stage: 'Skill Test',
    schedule: '10:00 AM - 11:00 AM',
    info: 'Silver Crysta Room, Nomad',
  },
  {
    id: '4',
    date: '13 July, 2021',
    interviewer: 'Thad Eddings',
    stage: 'Final Test',
    schedule: '10:00 AM - 11:00 AM',
    info: 'Silver Crysta Room, Nomad',
  },
]

function InterviewScheduleCard({
  date,
  info,
  interviewer,
  schedule,
  stage,
}: Interview) {
  const addFeedbackLeftSection = (
    <Box className='icon-size-md' component={PencilSimple} weight='bold' />
  )

  return (
    <Stack gap='xs'>
      <Text c='neutrals.4' size='sm'>
        {date}
      </Text>
      <Paper p='md' withBorder>
        <Group wrap='nowrap'>
          <Avatar size={rem(40)} />

          <Box className={styles.interviewScheduleCardBody}>
            <Stack gap={0}>
              <Text fw='600' lineClamp={1}>
                {interviewer}
              </Text>
              <Text c='neutrals.5' lineClamp={1} size='sm'>
                {stage}
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text fw='600' lineClamp={1}>
                {schedule}
              </Text>
              <Text c='neutrals.5' lineClamp={1} size='sm'>
                {info}
              </Text>
            </Stack>
          </Box>

          <Button
            leftSection={addFeedbackLeftSection}
            ml='auto'
            size='md'
            variant='outline'
          >
            Add Feedback
          </Button>

          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={DotsThree}
            weight='bold'
          />
        </Group>
      </Paper>
    </Stack>
  )
}

export function InterviewSchedule() {
  const content = interviews.map((interivew) => {
    return <InterviewScheduleCard {...interivew} key={interivew.id} />
  })
  return (
    <Stack>
      <Header />
      <Stack>{content}</Stack>
    </Stack>
  )
}

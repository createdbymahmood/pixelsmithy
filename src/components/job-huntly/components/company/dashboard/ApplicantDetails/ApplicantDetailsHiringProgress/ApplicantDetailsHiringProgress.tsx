'use client'

import {
  Anchor,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Indicator,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Stepper,
  Text,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {CaretDown, Plus} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

import {applicationStatusMap} from '@/components/job-huntly/components/applicant/dashboard/Applications/components/ApplicationsList/components'

import {ProfileInfoSection} from '../ApplicantDetailsProfile'

function CurrentStageAction() {
  const leftSection = (
    <Box className='icon-size-md' component={CaretDown} weight='bold' />
  )
  return (
    <Button leftSection={leftSection} ml='auto' size='md' variant='outline'>
      More Action
    </Button>
  )
}

function CurrentStageProgress() {
  return (
    <Stepper active={2} color='blue'>
      <Stepper.Step label='In-Review' />
      <Stepper.Step label='Shortlisted' />
      <Stepper.Step label='Interview' />
      <Stepper.Step label='Hired / Declined' />
    </Stepper>
  )
}

function CurrentStage() {
  return (
    <Stack gap='xl'>
      <Group justify='space-between'>
        <Text fw='600' size='lg'>
          Current Stage
        </Text>

        <CurrentStageAction />
      </Group>

      <CurrentStageProgress />
    </Stack>
  )
}

function StageInfo() {
  const badge = get(applicationStatusMap, 'interview')

  const assignees = (
    <Avatar.Group>
      <Avatar size={rem(40)} />
      <Avatar size={rem(40)} />
      <Avatar size={rem(40)} />
    </Avatar.Group>
  )
  return (
    <Stack align='flex-start' gap='xs'>
      <Text fw='600'>Stage Info</Text>

      <SimpleGrid cols={2}>
        <ProfileInfoSection label='Interview Date' value='10 - 13 July 2021' />
        <ProfileInfoSection label='Interview Status' value={badge} />
        <ProfileInfoSection
          label='Interview Location'
          value='Silver Crysta Room, Nomad Office
          3517 W. Gray St. Utica, Pennsylvania 57867'
        />
        <ProfileInfoSection label='Assigned to' value={assignees} />
      </SimpleGrid>

      <Button mt='md' size='md' variant='outline' disabled>
        Move To Next Step
      </Button>
    </Stack>
  )
}

interface Note {
  id: string
  author: string
  note: string
  date: string
  time: string
  replies?: Note[]
}

const notes: Note[] = [
  {
    id: '1',
    author: 'Maria Kelly',
    note: 'Please, do an interview stage immediately. The design division needs more new employee now',
    date: '10 July, 2021',
    time: '11:30 AM',
    replies: [
      {
        id: '2',
        author: 'Maria Kelly',
        note: 'Please, do an interview stage immediately. The design division needs more new employee now',
        date: '10 July, 2021',
        time: '11:30 AM',
      },
      {
        id: '3',
        author: 'Maria Kelly',
        note: 'Please, do an interview stage immediately. The design division needs more new employee now',
        date: '10 July, 2021',
        time: '11:30 AM',
      },
    ],
  },
  {
    id: '4',
    author: 'Maria Kelly',
    note: 'Please, do an interview stage immediately. ',
    date: '10 July, 2021',
    time: '11:30 AM',
  },
]

function useNoteCardState() {
  const [expanded, fns] = useDisclosure(false)
  return {expanded, fns}
}
interface NoteCardProps extends Note {}

function NoteCard({author, date, id, note, replies, time}: NoteCardProps) {
  const {expanded, fns} = useNoteCardState()

  const _replies = (() => {
    if (!expanded) return null
    return replies?.map((reply) => {
      return <NoteCard {...reply} key={reply.id} />
    })
  })()

  return (
    <Paper p='md' withBorder>
      <Group align='flex-start' wrap='nowrap'>
        <Avatar size={rem(40)} />

        <Stack gap='xs' w='100%'>
          <Group justify='space-between'>
            <Text fw='600'>{author}</Text>

            <Group>
              <Text c='neutrals.4' size='sm'>
                {date}
              </Text>
              <Indicator color='neutrals.4' size={rem(8)} />
              <Text c='neutrals.4' size='sm'>
                {time}
              </Text>
            </Group>
          </Group>

          <Text c='neutrals.5'>{note}</Text>

          {replies?.length && !expanded ? (
            <Anchor onClick={fns.open}>{replies.length} Replies</Anchor>
          ) : null}

          {_replies}
        </Stack>
      </Group>
    </Paper>
  )
}

function NotesHeader() {
  const addNotesLeftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )
  return (
    <Group justify='space-between'>
      <Text fw='600'>Notes</Text>

      <Button
        leftSection={addNotesLeftSection}
        pr={0}
        size='md'
        variant='transparent'
      >
        Add Notes
      </Button>
    </Group>
  )
}

function Notes() {
  const content = notes.map((note) => {
    return <NoteCard key={note.id} {...note} />
  })

  return (
    <Stack>
      <NotesHeader />
      <Stack>{content}</Stack>
    </Stack>
  )
}

export function ApplicantDetailsHiringProgress() {
  return (
    <Stack>
      <CurrentStage />
      <StageInfo />
      <Divider />
      <Notes />
    </Stack>
  )
}

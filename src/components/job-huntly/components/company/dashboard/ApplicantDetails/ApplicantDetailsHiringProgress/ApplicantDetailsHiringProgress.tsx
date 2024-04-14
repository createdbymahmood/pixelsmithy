'use client'

import {
  Avatar,
  Box,
  Button,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Stepper,
  Text,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
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

export function ApplicantDetailsHiringProgress() {
  return (
    <Stack>
      <CurrentStage />
      <StageInfo />
    </Stack>
  )
}

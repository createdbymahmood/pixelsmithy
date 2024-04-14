import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Indicator,
  Paper,
  Rating,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ChatCenteredText} from '@phosphor-icons/react/dist/ssr'
import {find} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import React, {Fragment} from 'react'

import type {Applicant} from '@/components/job-huntly/mock/applicants'
import {applicants} from '@/components/job-huntly/mock/applicants'

interface Props {
  applicant: Applicant
}

function InfoProfile({applicant}: Props) {
  return (
    <Group wrap='nowrap'>
      <Avatar size={rem(94)} />
      <Stack gap='xs'>
        <Title lineClamp={1} order={5}>
          {applicant.fullName}
        </Title>

        <Text c='neutrals.5'>{applicant.jobRole}</Text>
        <Group>
          <Rating count={1} value={applicant.score} />
          <Text>{applicant.score}</Text>
        </Group>
      </Stack>
    </Group>
  )
}

function InfoAppliedJobs() {
  return (
    <Paper bg='neutrals.0' p='md'>
      <Stack>
        <Group justify='space-between' wrap='nowrap'>
          <Text lineClamp={1}>Applied Jobs</Text>
          <Text c='neutrals.4' lineClamp={1}>
            2 days ago
          </Text>
        </Group>
        <Divider />

        <Stack gap={rem(2)}>
          <Text fw='600' lineClamp={1}>
            Product Development
          </Text>
          <Text c='neutrals.5' lineClamp={1}>
            Marketing{' • '}Full-Time
          </Text>
        </Stack>
      </Stack>
    </Paper>
  )
}

function InfoInterviewStage() {
  return (
    <Paper bg='neutrals.0' p='md'>
      <Group gap='xs'>
        <Text>Stage</Text>

        <Indicator color='blue' ml='auto' mr='xs' />
        <Text c='blue'>Interview</Text>
      </Group>
    </Paper>
  )
}

function InfoActions() {
  return (
    <Group>
      <Button flex={1} size='md' variant='outline'>
        Schedule Interview
      </Button>

      <ActionIcon size='md' variant='outline'>
        <Box
          className='icon-size-lg'
          component={ChatCenteredText}
          weight='bold'
        />
      </ActionIcon>
    </Group>
  )
}

function Info({applicant}: Props) {
  return (
    <Stack gap='xl'>
      <InfoProfile applicant={applicant} />
      <InfoAppliedJobs />
      <InfoInterviewStage />
      <InfoActions />
    </Stack>
  )
}

function Contact(props: Applicant) {
  return <Fragment />
}

interface QueryParams extends Params {
  applicantId: string
}

function useSidebarState(): {applicant: Applicant} {
  const params = useParams<QueryParams>()
  const applicant = find(applicants, {id: params.applicantId})!
  return {applicant}
}

export function Sidebar() {
  const state = useSidebarState()
  return (
    <Paper p='xl' withBorder>
      <Stack gap='xl'>
        <Info applicant={state.applicant} />
      </Stack>
    </Paper>
  )
}

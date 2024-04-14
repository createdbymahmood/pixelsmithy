import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Indicator,
  Paper,
  Progress,
  Rating,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {
  ChatCenteredText,
  DeviceMobile,
  Envelope,
  Globe,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'
import {find, range} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {useParams} from 'next/navigation'
import React from 'react'

import type {Applicant} from '@/components/job-huntly/mock/applicants'
import {applicants} from '@/components/job-huntly/mock/applicants'

import styles from './Sidebar.module.scss'

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
      <Stack>
        <Group gap='xs'>
          <Text>Stage</Text>

          <Indicator color='blue' ml='auto' mr='xs' />
          <Text c='blue'>Interview</Text>
        </Group>

        <Progress.Root radius={0} size='lg'>
          {range(0, 3).map((index) => {
            return (
              <Progress.Section
                key={index}
                className={styles.interviewStageProgressSection}
                color='blue'
                value={25}
              />
            )
          })}
        </Progress.Root>
      </Stack>
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

interface ContactItemProps {
  label: string
  value: string
  icon: Icon
  type: 'href' | 'text'
}

function ContactItem({icon, label, type, value}: ContactItemProps) {
  const Component = type === 'href' ? Anchor : Text
  return (
    <Group align='flex-start'>
      <Box c='neutrals.4' className='icon-size-lg' component={icon} />

      <Stack gap={rem(2)}>
        <Text c='neutrals.4'>{label}</Text>
        <Component fw='400'>{value}</Component>
      </Stack>
    </Group>
  )
}

const items: ContactItemProps[] = [
  {
    label: 'Email',
    value: 'jeromeBell45@email.com',
    icon: Envelope,
    type: 'text',
  },
  {
    label: 'Phone',
    value: '+44 1245 572 135',
    icon: DeviceMobile,
    type: 'text',
  },
  {
    label: 'Instagram',
    value: 'instagram.com/jakegyll',
    icon: InstagramLogo,
    type: 'href',
  },
  {
    label: 'Twitter',
    value: 'twitter.com/jeromebell',
    icon: TwitterLogo,
    type: 'href',
  },
  {
    label: 'Website',
    value: 'www.jeromebell.com',
    icon: Globe,
    type: 'href',
  },
]

function Contact() {
  const content = items.map((contact) => {
    return <ContactItem {...contact} key={contact.label} />
  })

  return <Stack>{content}</Stack>
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
    <Paper p='xl' pos='sticky' top={0} withBorder>
      <Stack gap='xl'>
        <Info applicant={state.applicant} />
        <Divider />
        <Contact />
      </Stack>
    </Paper>
  )
}

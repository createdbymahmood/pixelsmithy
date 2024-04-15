'use client'

import {
  Box,
  Button,
  Group,
  Indicator,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import {capitalize, find, head} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useParams} from 'next/navigation'
import type {ReactNode} from 'react'

import {GroupLink} from '@/components/common'
import type {Job} from '@/components/job-huntly/mock/jobs'
import {jobs} from '@/components/job-huntly/mock/jobs'
import {urls} from '@/constants'

function Action() {
  const leftSection = (
    <Box className='icon-size-md' component={CaretDown} weight='bold' />
  )
  return (
    <Button leftSection={leftSection} ml='auto' size='md' variant='outline'>
      More Action
    </Button>
  )
}

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      h={rem(40)}
      href={urls.Modernize.dashboard.coupons.index}
      p='xxs'
      w={rem(40)}
    >
      <Box component={ArrowLeft} h='100%' w='100%' weight='bold' />
    </GroupLink>
  )
}

interface HeaderInfoProps {
  job: Job
}

function HeaderInfo({job}: HeaderInfoProps) {
  return (
    <Stack gap='xs'>
      <Title order={4}>{job.role}</Title>
      <Group gap='xs'>
        <Text size='xl'>{capitalize(head(job.categories)?.label)}</Text>
        <Indicator color='neutrals.6' size={rem(4)} />
        <Text size='xl'>{capitalize(job.type)}</Text>
        <Indicator color='neutrals.6' size={rem(4)} />

        <Text size='xl'>{job.needsInfo.hired}</Text>
        <Text size='xl'>/</Text>
        <Text c='neutrals.4' size='xl'>
          {job.needsInfo.needs} Hired
        </Text>
      </Group>
    </Stack>
  )
}

interface HeaderProps {
  job: Job
}

function Header({job}: HeaderProps) {
  return (
    <Group>
      <BackButton />
      <HeaderInfo job={job} />
      <Box ml='auto'>
        <Action />
      </Box>
    </Group>
  )
}
interface JobLayoutProps {
  children: ReactNode
}

interface QueryParams extends Params {
  jobId: string
}

function useJobLayoutState() {
  const params = useParams<QueryParams>()
  const id = params.jobId

  const job = find(jobs, {id})!
  return {job}
}

export function JobLayout({children}: JobLayoutProps) {
  const state = useJobLayoutState()
  return (
    <Stack>
      <Header job={state.job} />
    </Stack>
  )
}

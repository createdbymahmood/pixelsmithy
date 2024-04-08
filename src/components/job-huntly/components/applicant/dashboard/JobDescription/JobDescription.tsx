'use client'

import {JobApplicationsStatus} from '@job-huntly/components/applicant/dashboard/Jobs/components/JobsList/components'
import type {Job} from '@job-huntly/mock/jobs'
import {jobs} from '@job-huntly/mock/jobs'
import {
  Anchor,
  Badge,
  Box,
  Divider,
  Grid,
  Group,
  List,
  Paper,
  rem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ArrowRight, CheckCircle} from '@phosphor-icons/react/dist/ssr'
import {capitalize, head} from 'lodash-es'
import React from 'react'

import {Header} from './components'

function Description() {
  return (
    <Stack>
      <Title order={4}>Description</Title>
      <Text c='neutrals.5'>
        Nomad is looking for Social Media Marketing expert to help manage our
        online networks. You will be responsible for monitoring our social media
        channels, creating content, finding effective ways to engage the
        community and incentivize others to engage on our channels.
      </Text>
    </Stack>
  )
}

interface SectionWithCheckListProps {
  title: string
  list: string[]
}

function SectionWithCheckList(props: SectionWithCheckListProps) {
  const icon = (
    <Box
      c='green.5'
      className='icon-size-md'
      component={CheckCircle}
      weight='bold'
    />
  )

  const list = props.list.map((responsibility) => {
    return <List.Item key={responsibility}>{responsibility}</List.Item>
  })

  return (
    <Stack>
      <Title order={4}>{props.title}</Title>
      <List c='neutrals.5' icon={icon} spacing='xs'>
        {list}
      </List>
    </Stack>
  )
}

function Responsibilities() {
  const list = [
    'Community engagement to ensure that is supported and actively represented online',
    'Focus on social media content development and publication',
    'Marketing and strategy support',
    'Stay on top of trends on social media platforms, and suggest content ideas to the team',
    'Engage with online communities',
  ]

  return <SectionWithCheckList list={list} title='Responsibilities' />
}

function WhoYouAre() {
  const list = [
    'You get energy from people and building the ideal work environment',
    'You have a sense for beautiful spaces and office experiences',
    'You are a confident office manager, ready for added responsibilities',
    "You're detail-oriented and creative",
    "You're a growth marketer and know how to run campaigns",
  ]

  return <SectionWithCheckList list={list} title='Who You Are' />
}

function NiceToHaves() {
  const list = [
    'Fluent in English',
    'Project management skills',
    'Copy editing skills',
  ]

  return <SectionWithCheckList list={list} title='Nice-to-Haves' />
}

function AboutRole(props: Pick<Job, 'applicationsInfo'>) {
  return (
    <Stack gap='xl'>
      <Title order={4}>About this role</Title>
      <Paper bg='neutrals.0' p='md'>
        <JobApplicationsStatus applicationsInfo={props.applicationsInfo} />
      </Paper>

      <Stack gap='xl'>
        <Group justify='space-between' w='100%'>
          <Text c='neutrals.5'>Apply Before</Text>
          <Text fw='600'>July 31, 2021</Text>
        </Group>

        <Group justify='space-between' w='100%'>
          <Text c='neutrals.5'>Job Posted On</Text>
          <Text fw='600'>July 1, 2021</Text>
        </Group>

        <Group justify='space-between' w='100%'>
          <Text c='neutrals.5'>Job Type</Text>
          <Text fw='600'>Full-Time</Text>
        </Group>

        <Group justify='space-between' w='100%'>
          <Text c='neutrals.5'>Salary</Text>
          <Text fw='600'>$75k-$85k USD</Text>
        </Group>
      </Stack>
    </Stack>
  )
}

function Categories(props: Pick<Job, 'categories'>) {
  const categories = props.categories.map((category) => {
    return (
      <Badge
        key={category.label}
        color={category.color}
        fw='600'
        py='md'
        size='lg'
        variant='light'
      >
        {capitalize(category.label)}
      </Badge>
    )
  })
  return (
    <Stack gap='xl'>
      <Title order={4}>Categories</Title>
      <Group gap='xs'>{categories}</Group>
    </Stack>
  )
}

function RequiredSkills() {
  const skills = ['Project Management', 'Copywriting'].map((skill) => {
    return (
      <Badge
        key={skill}
        bg='neutrals.0'
        color='primary'
        fw='400'
        py='md'
        radius={0}
        size='lg'
        variant='light'
      >
        {skill}
      </Badge>
    )
  })
  return (
    <Stack gap='xl'>
      <Title order={4}>Required Skills</Title>
      <Group gap='xs'>{skills}</Group>
    </Stack>
  )
}

interface PerksAndBenefitsCardProps {
  title: string
  description: string
}

function PerksAndBenefitsCard({description, title}: PerksAndBenefitsCardProps) {
  return (
    <Stack gap='xl'>
      <Skeleton h={rem(48)} w={rem(48)} />
      <Title order={5}>{title}</Title>
      <Text c='neutrals.5'>{description}</Text>
    </Stack>
  )
}

function PerksAndBenefits() {
  const list = [
    {
      title: 'Full Healthcare',
      description:
        'We believe in thriving communities and that starts with our team being happy and healthy.',
    },
    {
      title: 'Unlimited Vacation',
      description:
        'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
    },
    {
      title: 'Skill Development',
      description:
        "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
    },
    {
      title: 'Team Summits',
      description:
        'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
    },
  ]

  const content = list.map((item) => {
    return (
      <PerksAndBenefitsCard
        key={item.title}
        description={item.description}
        title={item.title}
      />
    )
  })
  return (
    <Stack gap='xl'>
      <Stack gap='xs'>
        <Title order={4}>Perks & Benefits</Title>
        <Text c='neutrals.5'>
          This job comes with several perks and benefits
        </Text>
      </Stack>

      <SimpleGrid cols={{xl: 4, lg: 3, md: 2}}>{content}</SimpleGrid>
    </Stack>
  )
}

function AboutCompany() {
  return (
    <Group wrap='nowrap'>
      <Stack gap='xxxl' w='100%'>
        <Group gap='xxxl'>
          <Skeleton h={rem(64)} w={rem(64)} />
          <Stack gap={0}>
            <Title order={3}>Nomad</Title>

            <Group c='primary' className='cursor-pointer'>
              <Anchor fw='600' underline='never'>
                Read more about Nomad
              </Anchor>
              <Box
                className='icon-size-lg'
                component={ArrowRight}
                weight='bold'
              />
            </Group>
          </Stack>
        </Group>
        <Text c='neutrals.5'>
          Nomad is a technology company that builds economic infrastructure for
          the internet. Businesses of every size—from new startups to public
          companies—use our software to accept payments and manage their
          businesses online.
        </Text>
      </Stack>

      <Skeleton h={rem(276)} w='100%' />
    </Group>
  )
}

export function JobDescription() {
  const job = head(jobs)!
  return (
    <Stack gap='xxxl' py='xxxl'>
      <Header job={job} />

      <Grid gutter='xxxl'>
        <Grid.Col span={{xl: 9, lg: 8}}>
          <Stack gap={rem(40)}>
            <Description />
            <Responsibilities />
            <WhoYouAre />
            <NiceToHaves />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{xl: 3, lg: 4}}>
          <Stack gap={rem(40)}>
            <AboutRole applicationsInfo={job.applicationsInfo} />
            <Divider />
            <Categories categories={job.categories} />
            <Divider />
            <RequiredSkills />
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider />
      <PerksAndBenefits />
      <Divider />
      <AboutCompany />
    </Stack>
  )
}

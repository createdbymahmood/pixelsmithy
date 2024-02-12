'use client'

import {Group, SimpleGrid, Stack, Text, Title} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  CurrencyCircleDollar,
  Folder,
  TrendDown,
  TrendUp,
  UsersThree,
} from '@phosphor-icons/react'
import {range} from 'lodash-es'
import React from 'react'

import {ProjectCard} from '@/components/SnowUI/components'

import styles from './Projects.module.scss'

interface ProjectOverviewCardProps {
  title: string
  insight: string
  value: string
  icon: React.FC<IconProps>
  valueIcon: React.FC<IconProps>
}

function ProjectOverviewCard({
  icon: Icon,
  insight,
  title,
  value,
  valueIcon: ValueIcon,
}: ProjectOverviewCardProps) {
  return (
    <Stack className={styles.card}>
      <Group justify='space-between'>
        <Text className={styles.cardTitle} size='sm'>
          {title}
        </Text>
        <Icon size={24} />
      </Group>

      <Group justify='space-between'>
        <Title order={3}>{insight}</Title>
        <Group gap='xs'>
          <Text size='sm'>{value}</Text>
          <ValueIcon size={16} weight='fill' />
        </Group>
      </Group>
    </Stack>
  )
}

const overviews: ProjectOverviewCardProps[] = [
  {
    title: 'Current Projects',
    icon: Folder,
    insight: '268',
    value: '+11.02%',
    valueIcon: TrendUp,
  },
  {
    title: 'Project Finance',
    icon: CurrencyCircleDollar,
    insight: '$3,290',
    value: '+11.02%',
    valueIcon: TrendDown,
  },
  {
    title: 'Our clients',
    icon: UsersThree,
    insight: '31',
    value: '+15.03%',
    valueIcon: TrendUp,
  },
]

function ProjectsOverview() {
  const content = overviews.map((overview) => {
    return <ProjectOverviewCard key={overview.title} {...overview} />
  })

  return (
    <SimpleGrid cols={{xl: 3, lg: 2, md: 2, sm: 1, xs: 1}}>
      {content}
    </SimpleGrid>
  )
}

function ProjectsList() {
  const content = range(0, 20).map((index) => <ProjectCard key={index} />)
  return (
    <SimpleGrid cols={{xl: 3, lg: 2, md: 2, sm: 1, xs: 1}}>
      {content}
    </SimpleGrid>
  )
}

export function Projects() {
  return (
    <Stack gap='xl'>
      <Title order={5}>My Projects</Title>
      <ProjectsOverview />
      <ProjectsList />
    </Stack>
  )
}

'use client'

import type {MantineColor, MantineSpacing} from '@mantine/core'
import {
  Box,
  Card,
  Grid,
  Group,
  NumberFormatter,
  Paper,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {
  Briefcase,
  CaretDown,
  CaretUp,
  Eye,
} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

type StatType = 'growing' | 'regressing'
interface StatCardProps {
  title: string
  icon: Icon
  iconBackgroundColor: MantineColor
  value: number
  type: StatType
  percentage: number
  description: string
}

function StatCard({
  description,
  icon,
  iconBackgroundColor,
  percentage,
  title,
  type,
  value,
}: StatCardProps) {
  const typeIconMap: Record<StatType, JSX.Element> = {
    growing: (
      <Box
        c='green'
        className='icon-size-md'
        component={CaretUp}
        weight='fill'
      />
    ),
    regressing: (
      <Box
        c='red'
        className='icon-size-md'
        component={CaretDown}
        weight='fill'
      />
    ),
  }

  const typeIcon = get(typeIconMap, type)
  const typePercentageColor: MantineColor = type === 'growing' ? 'green' : 'red'

  return (
    <Paper p='md' w='100%' withBorder>
      <Stack gap='xl'>
        <Group justify='space-between'>
          <Text c='neutrals.4' fw='600' size='xl'>
            {title}
          </Text>

          <Card
            bg={iconBackgroundColor}
            c='white'
            component={icon}
            h={rem(36)}
            p='xs'
            radius='xl'
            w={rem(36)}
            weight='bold'
          />
        </Group>

        <Stack gap={0}>
          <Group align='flex-end'>
            <Text fw='600' size={rem(48)}>
              <NumberFormatter value={value} thousandSeparator />
            </Text>

            <Group gap='xxs'>
              <Text c={typePercentageColor} fw='500' size='lg'>
                {percentage}%
              </Text>

              {typeIcon}
            </Group>
          </Group>

          <Text c='neutrals.4'>{description}</Text>
        </Stack>
      </Stack>
    </Paper>
  )
}

function TotalViews() {
  return (
    <StatCard
      description='vs last day'
      icon={Eye}
      iconBackgroundColor='blue'
      percentage={6.4}
      title='Total Views'
      type='growing'
      value={23564}
    />
  )
}

function TotalApplied() {
  return (
    <StatCard
      description='vs last day'
      icon={Briefcase}
      iconBackgroundColor='primary.4'
      percentage={0.4}
      title='Total Applied'
      type='regressing'
      value={132}
    />
  )
}

function JobListingViewStats() {
  return (
    <Paper p='xl' withBorder>
      <Stack gap='xl'>
        <Group justify='space-between'>
          <Title order={5}>Job Listing View stats</Title>
          <Skeleton h={rem(50)} w={rem(151)} />
        </Group>

        <Skeleton h={rem(353)} />
      </Stack>
    </Paper>
  )
}

/* function TrafficChannel() {
  return <Box>TrafficChannel</Box>
}

function VisitorsByCountry() {
  return <Box>VisitorsByCountry</Box>
}
 */
const gutterSize: MantineSpacing = 'xl'

export function JobAnalytics() {
  return (
    <Grid mt='xl'>
      <Grid.Col span={8}>
        <Stack gap={gutterSize}>
          <Group gap={gutterSize} w='100%' wrap='nowrap'>
            <TotalViews />
            <TotalApplied />
          </Group>
          <JobListingViewStats />
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap={gutterSize} />
      </Grid.Col>
    </Grid>
  )
}

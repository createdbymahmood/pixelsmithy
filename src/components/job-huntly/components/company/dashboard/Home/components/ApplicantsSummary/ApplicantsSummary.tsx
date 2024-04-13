import type {MantineColor} from '@mantine/core'
import {
  Group,
  Paper,
  Progress,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

import {epilogue} from '@/lib/styles/font/epilogue'

interface Summary {
  label: string
  value: number
  color: MantineColor
}

const summary: Summary[] = [
  {
    label: 'Full time',
    value: 45,
    color: 'primary.3',
  },
  {
    label: 'Part-Time',
    value: 24,
    color: 'green',
  },
  {
    label: 'Remote',
    value: 22,
    color: 'blue',
  },
  {
    label: 'Internship',
    value: 32,
    color: 'yellow',
  },
  {
    label: 'Contract',
    value: 10,
    color: 'red',
  },
]

interface SummaryLabelProps extends Summary {}

function SummaryLabel({color, label, value}: SummaryLabelProps) {
  return (
    <Group gap='xs' wrap='nowrap'>
      <Paper bg={color} h={rem(20)} radius='sm' w={rem(20)} />
      <Text c='neutrals.5' lineClamp={1}>
        {label}:
      </Text>
      <Text fw='500'>{value}</Text>
    </Group>
  )
}

export function ApplicantsSummary() {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Title order={5}>Applicants Summary</Title>

        <Group align='flex-end' gap='xs'>
          <Title ff={epilogue.style.fontFamily} order={1}>
            67
          </Title>

          <Text c='neutrals.5' mb='sm' size='xl'>
            Applicants
          </Text>
        </Group>

        <Progress.Root radius={0} size='xl'>
          {summary.map((item) => {
            return (
              <Progress.Section
                key={item.label}
                color={item.color}
                value={item.value}
              />
            )
          })}
        </Progress.Root>

        <SimpleGrid cols={2} spacing='xs'>
          {summary.map((item) => {
            return <SummaryLabel {...item} key={item.label} />
          })}
        </SimpleGrid>
      </Stack>
    </Paper>
  )
}

'use client'

import type {MantineColor} from '@mantine/core'
import {
  Badge,
  Card,
  Group,
  NumberFormatter,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  ChartLine,
  ClockCounterClockwise,
  Cube,
  TrendDown,
  TrendUp,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

type StatType = 'growing' | 'regressing'

interface StatValue {
  title: string
  value: number
  type: StatType
  icon: React.FC<IconProps>
  description: string
  gorwingOrRegressingPercentage: number
  iconColor: MantineColor
}

const growthRateBadgeMap: Record<StatType, JSX.Element> = {
  growing: <TrendUp weight='bold' />,
  regressing: <TrendDown weight='bold' />,
}

const growthRateColorMap: Record<StatType, string> = {
  growing: 'var(--mantine-color-green-9)',
  regressing: 'var(--mantine-color-red-7)',
}

interface StatProps extends StatValue {}

function Stat({
  description,
  gorwingOrRegressingPercentage,
  icon,
  iconColor,
  title,
  type,
  value,
}: StatProps) {
  const Icon = icon
  const badge = get(growthRateBadgeMap, type)
  const color = get(growthRateColorMap, type)
  return (
    <Card component={Stack} gap='md' w='100%'>
      <Group justify='space-between'>
        <Stack gap='xs'>
          <Text c='gray.7'>{title}</Text>

          <Title order={5}>
            <NumberFormatter value={value} thousandSeparator />
          </Title>
        </Stack>

        <Badge
          className='icon-size-sm'
          color={iconColor}
          h={rem(60)}
          radius='lg'
          styles={{
            label: {lineHeight: 0},
          }}
          variant='light'
          w={rem(60)}
        >
          <Icon className='icon-size-lg' weight='duotone' />
        </Badge>
      </Group>

      <Group gap={rem(4)} wrap='nowrap'>
        <Group c={color} gap='xs' wrap='nowrap'>
          {badge}
          <Text fw='600'>{gorwingOrRegressingPercentage}%</Text>
        </Group>

        <Text c='gray.7' fw='600' lineClamp={1}>
          {description}
        </Text>
      </Group>
    </Card>
  )
}

const stats: StatValue[] = [
  {
    title: 'Total User',
    value: 40689,
    description: 'Up from yesterday',
    gorwingOrRegressingPercentage: 8.5,
    icon: UsersThree,
    type: 'growing',
    iconColor: 'primary',
  },
  {
    title: 'Total Order',
    value: 10293,
    description: 'Up from past week',
    gorwingOrRegressingPercentage: 1.3,
    icon: Cube,
    type: 'growing',
    iconColor: 'yellow',
  },
  {
    title: 'Total Sales',
    value: 89000,
    description: 'Down from yesterday',
    gorwingOrRegressingPercentage: 4.3,
    icon: ChartLine,
    type: 'regressing',
    iconColor: 'green',
  },
  {
    title: 'Total Pending',
    value: 2040,
    description: 'Up from yesterday',
    gorwingOrRegressingPercentage: 8.5,
    icon: ClockCounterClockwise,
    type: 'growing',
    iconColor: 'orange',
  },
]

export function Stats() {
  const content = stats.map((stat) => {
    return <Stat key={stat.value} {...stat} />
  })

  return (
    <Group gap='md' wrap='nowrap'>
      {content}
    </Group>
  )
}

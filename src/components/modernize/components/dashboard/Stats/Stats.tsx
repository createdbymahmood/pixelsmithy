import {
  Avatar,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  CaretDown,
  CaretUp,
  CurrencyDollar,
  ShoppingCart,
  User,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

type StatCardType = 'growing' | 'regressing'

interface StatsCardProps {
  value: string
  title: string
  amount: string
  type: StatCardType
  icon: React.FC<IconProps>
}

const growthRateBadgeMap: Record<StatCardType, JSX.Element> = {
  growing: <CaretUp weight='bold' />,
  regressing: <CaretDown weight='bold' />,
}
const growthRateColorMap: Record<StatCardType, string> = {
  growing: 'var(--mantine-color-green-7)',
  regressing: 'var(--mantine-color-red-7)',
}

function StatsCard({amount, icon: Icon, title, type, value}: StatsCardProps) {
  const badge = get(growthRateBadgeMap, type)
  const color = get(growthRateColorMap, type)

  return (
    <Card radius={0} w='100%'>
      <Group justify='space-between'>
        <Stack gap={0}>
          <Title order={6}>{value}</Title>
          <Text c='general.5' size='sm'>
            {title}
          </Text>

          <Group c={color} gap={rem(6)} mt={rem(12)}>
            <Text c={color} size='sm'>
              {amount}
            </Text>
            {badge}
          </Group>
        </Stack>

        <Avatar color='primary' size={rem(40)}>
          <Icon className='icon-size-sm' weight='bold' />
        </Avatar>
      </Group>
    </Card>
  )
}

export function Stats() {
  return (
    <Card p={0} radius='md'>
      <Group gap={0} wrap='nowrap'>
        <StatsCard
          amount='22.45%'
          icon={CurrencyDollar}
          title='Total Revenue'
          type='growing'
          value='$10.540'
        />
        <Divider orientation='vertical' />
        <StatsCard
          amount='15.34%'
          icon={ShoppingCart}
          title='orders'
          type='growing'
          value='1,056'
        />
        <Divider orientation='vertical' />
        <StatsCard
          amount='18.25%'
          icon={User}
          title='Active Sessions'
          type='regressing'
          value='$10.540'
        />
        <Divider orientation='vertical' />
        <StatsCard
          amount='22.45%'
          icon={UsersThree}
          title='Total Sessions'
          type='growing'
          value='5.420'
        />
      </Group>
    </Card>
  )
}

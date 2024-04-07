import {Card, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  Airplane,
  Heart,
  RoadHorizon,
  User,
} from '@phosphor-icons/react/dist/ssr'
import type {FC} from 'react'
import React from 'react'

interface BottomNavigationItemProps {
  title: string
  icon: FC<IconProps>
  index: number
}

function BottomNavigationItem({
  icon: Icon,
  index,
  title,
}: BottomNavigationItemProps) {
  const active = index === 0
  const c = active
    ? 'var(--mantine-primary-color-5)'
    : 'var(--mantine-color-gray-6)'

  return (
    <Stack
      align='center'
      c={c}
      className='cursor-pointer'
      gap={rem(2)}
      w='100%'
    >
      <Icon className='icon-size-lg' />
      <Text size='xs'>{title}</Text>
    </Stack>
  )
}

export function BottomNavigation() {
  return (
    <Card
      className='shrink-0'
      pb='sm'
      px='sm'
      radius={0}
      shadow='bottomNavigation'
    >
      <Group wrap='nowrap'>
        <BottomNavigationItem icon={RoadHorizon} index={0} title='Explore' />
        <BottomNavigationItem icon={Airplane} index={1} title='Flights' />
        <BottomNavigationItem icon={Heart} index={2} title='Favorites' />
        <BottomNavigationItem icon={User} index={3} title='Profile' />
      </Group>
    </Card>
  )
}

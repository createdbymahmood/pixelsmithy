'use client'

import type {MantineColor} from '@mantine/core'
import {Box, Group, Text, Title} from '@mantine/core'
import {CaretRight} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {epilogue} from '@/lib/styles/font/epilogue'

interface Stat {
  title: string
  count: number
  color: MantineColor
}

interface StatCardProps extends Stat {}

function StatCard(props: StatCardProps) {
  return (
    <Group
      bg={props.color}
      c='white'
      className='cursor-pointer'
      p='xl'
      w='100%'
      wrap='nowrap'
    >
      <Title ff={epilogue.style.fontFamily} order={2}>
        {props.count}
      </Title>

      <Text fw='500' lineClamp={1} size='lg'>
        {props.title}
      </Text>

      <Box
        className='icon-size-lg'
        component={CaretRight}
        ml='auto'
        weight='bold'
      />
    </Group>
  )
}

const stats: Stat[] = [
  {
    color: 'primary',
    count: 76,
    title: 'New candidates to review',
  },
  {
    color: 'green',
    count: 3,
    title: 'Schedule for today',
  },
  {
    color: 'blue',
    count: 24,
    title: 'Messages received',
  },
]

export function Stats() {
  const content = stats.map((stat) => {
    return <StatCard {...stat} key={stat.title} />
  })

  return (
    <Group gap='xl' wrap='nowrap'>
      {content}
    </Group>
  )
}

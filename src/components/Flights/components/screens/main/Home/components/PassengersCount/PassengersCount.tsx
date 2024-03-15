import {ActionIcon, Box, Card, Group, rem, Text} from '@mantine/core'
import {useCounter} from '@mantine/hooks'
import type {IconProps} from '@phosphor-icons/react'
import {Minus, Plus, SmileyWink} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const iconProps: IconProps = {
  className: 'icon-size-sm',
  weight: 'bold',
}

function Counter() {
  const [count, handlers] = useCounter(0, {min: 0})

  return (
    <Group gap={0} justify='space-between' w={rem(100)}>
      <ActionIcon
        c='black'
        color='gray.5'
        size='md'
        variant='light'
        onClick={handlers.decrement}
      >
        <Minus {...iconProps} />
      </ActionIcon>

      <Text c='gray.9' fw='500' size='xs' variant='display'>
        {count}
      </Text>

      <ActionIcon
        c='black'
        color='gray.5'
        size='md'
        variant='light'
        onClick={handlers.increment}
      >
        <Plus {...iconProps} />
      </ActionIcon>
    </Group>
  )
}

export function PassengersCount() {
  return (
    <Card bg='white' px='sm' py={0} shadow='lg'>
      <Group h={rem(50)}>
        <Box
          c='black'
          className='icon-size-md'
          component={SmileyWink}
          weight='bold'
        />
        <Text c='gray.9'>Passengers</Text>
        <Box ml='auto'>
          <Counter />
        </Box>
      </Group>
    </Card>
  )
}

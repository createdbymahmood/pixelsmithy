import {Card, Chip, Group, Input, rem, Stack, Text} from '@mantine/core'
import {X} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function CustomersTags() {
  const tags = ['Vip Customer', 'Europe']
  const content = tags.map((tag) => {
    return (
      <Chip
        key={tag}
        color='general.5'
        icon={<X weight='bold' />}
        radius='sm'
        variant='light'
        defaultChecked
      >
        T-{tag}
      </Chip>
    )
  })

  return (
    <Card>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Tags</Text>
        <Input.Wrapper label='Add Tags' w='100%'>
          <Input placeholder='Enter tag name' type='text' />
        </Input.Wrapper>
        <Group gap={rem(8)}>{content}</Group>
      </Stack>
    </Card>
  )
}

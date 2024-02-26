import {Button, Group, Stack, Title} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function Header() {
  return (
    <Group>
      <Title order={5}>Orders</Title>
      <Group ml='auto'>
        <Button variant='default'>Export</Button>
        <Button leftSection={<Plus className='icon-size-md' weight='bold' />}>
          Add Order
        </Button>
      </Group>
    </Group>
  )
}

export function OrdersList() {
  return (
    <Stack>
      <Header />
    </Stack>
  )
}

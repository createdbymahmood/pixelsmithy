import {ActionIcon, Autocomplete, Group, Input, rem} from '@mantine/core'
import {
  CaretDown,
  MagnifyingGlass,
  PencilSimpleLine,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function TableFilters() {
  return (
    <Group>
      <Autocomplete
        data={['React', 'Angular', 'Vue', 'Svelte']}
        placeholder='Filter'
        rightSection={<CaretDown weight='bold' />}
        w={rem(180)}
      />

      <Input
        leftSection={<MagnifyingGlass className='icon-size-md' weight='bold' />}
        placeholder='Search...'
        w={rem(350)}
      />

      <ActionIcon c='primary' ml='auto' size='lg' variant='default'>
        <PencilSimpleLine className='icon-size-md' weight='bold' />
      </ActionIcon>

      <ActionIcon c='primary' size='lg' variant='default'>
        <Trash className='icon-size-md' weight='bold' />
      </ActionIcon>
    </Group>
  )
}

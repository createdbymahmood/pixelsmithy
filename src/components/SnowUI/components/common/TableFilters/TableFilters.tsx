import {Card, Group, Input} from '@mantine/core'
import {
  FunnelSimple,
  MagnifyingGlass,
  Plus,
  SortAscending,
} from '@phosphor-icons/react'
import React from 'react'

import styles from './TableFilters.module.scss'

export function TableFilters() {
  return (
    <Card className={styles.root}>
      <Group>
        <Group>
          <Plus />
          <FunnelSimple />
          <SortAscending />
        </Group>

        <Input
          leftSection={<MagnifyingGlass />}
          ml='auto'
          placeholder='Search'
          size='xs'
        />
      </Group>
    </Card>
  )
}

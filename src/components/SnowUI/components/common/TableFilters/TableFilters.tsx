'use client'

import {Card, Group} from '@mantine/core'
import {FunnelSimple, Plus, SortAscending} from '@phosphor-icons/react/dist/ssr'

import {SearchInput} from '@/components/SnowUI'

import styles from './TableFilters.module.scss'

export function TableFilters() {
  return (
    <Card className={styles.root}>
      <Group>
        <Group>
          <Plus className={styles.icon} />
          <FunnelSimple className={styles.icon} />
          <SortAscending className={styles.icon} />
        </Group>
        <SearchInput ml='auto' size='xs' />
      </Group>
    </Card>
  )
}

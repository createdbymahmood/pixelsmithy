'use client'

import {Card, Group} from '@mantine/core'
import {FunnelSimple, Plus, SortAscending} from '@phosphor-icons/react/dist/ssr'
import {SearchInput} from '@roscent/components'
import clsx from 'clsx'

import styles from './TableFilters.module.scss'

export function TableFilters() {
  return (
    <Card className={styles.root}>
      <Group>
        <Group>
          <Plus
            className={clsx('icon-size-md', styles.icon, 'cursor-pointer')}
          />
          <FunnelSimple
            className={clsx('icon-size-md', styles.icon, 'cursor-pointer')}
          />
          <SortAscending
            className={clsx('icon-size-md', styles.icon, 'cursor-pointer')}
          />
        </Group>
        <SearchInput ml='auto' size='xs' />
      </Group>
    </Card>
  )
}

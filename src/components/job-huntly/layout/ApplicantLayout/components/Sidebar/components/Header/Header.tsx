import {Button, Group, Indicator, Title} from '@mantine/core'
import {Bell} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import styles from './Header.module.scss'

export function Header() {
  return (
    <Group className={clsx(styles.header)} p='xxxl'>
      <Title order={3}>Dashboard</Title>
      <Button ml='auto' size='md' variant='outline'>
        Back to homepage
      </Button>

      <Indicator
        color='orange'
        offset={7}
        position='top-end'
        size={12}
        inline
        withBorder
      >
        <Bell className={clsx('icon-size-lg', 'cursor-pointer')} />
      </Indicator>
    </Group>
  )
}

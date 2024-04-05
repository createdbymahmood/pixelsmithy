import {Button, Group, Indicator, rem, Title} from '@mantine/core'
import {Bell} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import styles from './Header.module.scss'

interface HeaderProps {
  title: string
}

export const JOB_HUNTLY_HEADER_HEIGHT = rem(107)

export function Header({title}: HeaderProps) {
  return (
    <Group bg='white' className={clsx(styles.header)} p='xxxl'>
      <Title order={3}>{title}</Title>
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

import {Box, Button, Group, Indicator, rem, Title} from '@mantine/core'
import {ArrowLeft, Bell} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEmpty} from 'lodash-es'
import Link from 'next/link'
import React from 'react'

import styles from './Header.module.scss'

interface HeaderProps {
  title: string
  callbackURL?: string
}

export const JOB_HUNTLY_HEADER_HEIGHT = rem(107)

export function Header({callbackURL, title}: HeaderProps) {
  const withCallbackURL = !isEmpty(callbackURL)

  const backArrow = withCallbackURL ? (
    <Link href={callbackURL!}>
      <Box
        className='cursor-pointer'
        component={ArrowLeft}
        h={rem(40)}
        w={rem(40)}
        weight='bold'
      />
    </Link>
  ) : null

  return (
    <Group bg='white' className={clsx(styles.header)} p='xxxl'>
      <Group gap='xs'>
        {backArrow}
        <Title order={3}>{title}</Title>
      </Group>

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

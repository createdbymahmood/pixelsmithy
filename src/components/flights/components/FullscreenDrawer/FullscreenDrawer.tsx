import {Box, Card, rem} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './Search.module.scss'

interface FullscreenDrawerProps {
  children: ReactNode
}

function Trigger() {
  return (
    <Box
      bg='gray.3'
      h={rem(4)}
      mb='md'
      mx='auto'
      style={{borderRadius: 'var(--mantine-radius-lg)'}}
      w={rem(32)}
    />
  )
}

export function FullscreenDrawer({children}: FullscreenDrawerProps) {
  return (
    <Card
      bottom={0}
      className={styles.content}
      flex={1}
      left={0}
      pb='xxxl'
      pos='absolute'
      radius='lg'
      right={0}
      top={rem(47)}
    >
      <Trigger />
      {children}
    </Card>
  )
}

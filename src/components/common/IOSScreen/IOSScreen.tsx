import Battery from '@flights/assets/icons/battery.svg'
import type {MantineColor, StackProps} from '@mantine/core'
import {Box, Group, rem, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {omit} from 'lodash-es'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './IOSScreen.module.scss'

interface IOSScreenProps extends StackProps {
  children: ReactNode
  variant?: 'dark' | 'light'
}

interface Props {
  color: MantineColor
}

function StatusBar({color}: Props) {
  return (
    <Group
      c={color}
      className={clsx(styles.statusBar, 'shrink-0')}
      justify='space-between'
      left={0}
      pos='absolute'
      px={rem(27)}
      py='xs'
      right={0}
      top={0}
    >
      <Text c='currentColor' fw='600'>
        9:41
      </Text>

      <Group>
        <Box c={color} component={Battery} />
      </Group>
    </Group>
  )
}

function HomeIndicator({color}: Props) {
  return (
    <Group
      align='flex-end'
      bottom={0}
      c={color}
      className='shrink-0'
      h={rem(34)}
      justify='center'
      left={0}
      pb={rem(8)}
      pos='absolute'
      right={0}
    >
      <Box
        bg='currentColor'
        className={styles.homeIndicator}
        h={rem(5)}
        w={rem(134)}
      />
    </Group>
  )
}

export function IOSScreen({
  children,
  variant = 'light',
  className,
  ...props
}: IOSScreenProps) {
  const color: MantineColor = variant === 'dark' ? 'black' : 'white'

  return (
    <Stack
      className={clsx('shrink-0', styles.screen, className)}
      color={color}
      h={rem(844)}
      pos='relative'
      w={rem(390)}
      {...omit(props, ['h', 'w'])}
    >
      <StatusBar color={color} />
      <Stack gap={0} h={`calc(100% - ${rem(34)})`}>
        {children}
      </Stack>
      <HomeIndicator color={color} />
    </Stack>
  )
}

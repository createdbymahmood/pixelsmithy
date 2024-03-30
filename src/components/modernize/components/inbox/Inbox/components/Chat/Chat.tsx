'use client'

import {Badge, Box, Button, Group, Input, rem, Stack, Text} from '@mantine/core'
import {
  Gear,
  Paperclip,
  User,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import {ChatMessages} from '../ChatMessage'
import styles from './Chat.module.scss'

function ChatHeader() {
  return (
    <Box px={rem(28)}>
      <Group className={styles.chatHeader} gap={0} py={rem(24)}>
        <Group gap={rem(4)}>
          <Text fw='bold'>Luis Pittman</Text>
          <Badge
            bg='green.5'
            className={styles.onlineBadge}
            h={rem(10)}
            radius='xl'
            w={rem(10)}
          />
        </Group>
        <Group c='general.5' gap={rem(20)} ml='auto'>
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={User}
            p={rem(3)}
            weight='bold'
          />
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={VideoCamera}
            p={rem(3)}
            weight='bold'
          />
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={Gear}
            p={rem(3)}
            weight='bold'
          />
        </Group>
      </Group>
    </Box>
  )
}

export function Chat() {
  return (
    <Stack h='100%' w='100%'>
      <ChatHeader />
      <ChatMessages />
      <Compose />
    </Stack>
  )
}

function Compose() {
  return (
    <Group
      className={styles.compose}
      gap={rem(24)}
      mt='auto'
      px={rem(14)}
      py={rem(12)}
      w='100%'
      wrap='nowrap'
    >
      <Input
        classNames={{input: styles.input}}
        placeholder='Your message…'
        size='sm'
        w='100%'
      />
      <Paperclip
        className={clsx('icon-size-md', 'cursor-pointer', 'shrink-0')}
      />
      <Button className='shrink-0'>Send</Button>
    </Group>
  )
}

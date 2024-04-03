'use client'

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  CaretDown,
  DotsThreeVertical,
  Paperclip,
  PaperPlaneRight,
  PushPin,
  Smiley,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './Chat.module.scss'

function HeaderUserInfo() {
  return (
    <Group>
      <Avatar size={rem(56)} />

      <Stack gap='xxs'>
        <Text fw='600'>Jan Mayer</Text>
        <Text c='neutrals.5'>Recruiter at Nomad</Text>
      </Stack>
    </Group>
  )
}

function HeaderActions() {
  return (
    <Group c='neutrals.4' gap='xl'>
      <Box
        className={clsx('cursor-pointer', 'icon-size-lg')}
        component={PushPin}
        weight='bold'
      />
      <Box
        className={clsx('cursor-pointer', 'icon-size-lg')}
        component={Star}
        weight='bold'
      />
      <Box
        className={clsx('cursor-pointer', 'icon-size-lg')}
        component={DotsThreeVertical}
        weight='bold'
      />
    </Group>
  )
}

function Header() {
  return (
    <Group className={styles.header} justify='space-between' p='xxxl'>
      <HeaderUserInfo />
      <HeaderActions />
    </Group>
  )
}

function Compose() {
  return (
    <Group className={styles.compose} mt='auto' mx='xxxl' p='xs' wrap='nowrap'>
      <Box
        c='neutrals.4'
        className={clsx('cursor-pointer', 'icon-size-lg')}
        component={Paperclip}
        weight='bold'
      />

      <Input
        classNames={{input: clsx('borderless', 'p-0')}}
        placeholder='Reply message'
        size='md'
        w='100%'
      />

      <Box
        c='neutrals.4'
        className={clsx('cursor-pointer', 'icon-size-lg')}
        component={Smiley}
        weight='bold'
      />

      <ActionIcon h={rem(40)} radius={0} w={rem(73)}>
        <Box
          className={clsx('cursor-pointer', 'icon-size-md')}
          component={PaperPlaneRight}
          weight='bold'
        />
      </ActionIcon>
    </Group>
  )
}

function ChatInfo() {
  return (
    <Stack align='center' gap='xs'>
      <Avatar size={rem(88)} />
      <Title order={4}>Jan Mayer</Title>

      <Group c='neutrals.5' gap='xs'>
        <Text>Recruiter at</Text>
        <Text c='primary'>Nomad</Text>
      </Group>

      <Group c='neutrals.5' gap='xs' justify='center'>
        <Text>This is the very beginning of your direct message with</Text>
        <Text c='neutrals.6' fw='500'>
          Jan Mayer
        </Text>
      </Group>
    </Stack>
  )
}

interface MessageProps {
  direction: 'LTR' | 'RTL'
  content: string
  sender: string
  date: string
}

function Message({direction, content, sender, date}: MessageProps) {
  const isLTR = direction === 'LTR'

  return (
    <Group
      className={clsx(
        {[styles.rtl]: !isLTR},
        [{'flex-dir-row-reverse': !isLTR}],
        [{'flex-dir-row': isLTR}],
      )}
      w='fit-content'
    >
      <Avatar size={rem(48)} />
      <Stack align={isLTR ? 'flex-start' : 'flex-end'} gap='xs'>
        <Text fw='600'>{sender}</Text>

        <Box
          className={clsx(
            styles.message,
            {[styles.messageRTL]: !isLTR},
            {[styles.messageLTR]: isLTR},
            {[styles.messageRTLTextContent]: !isLTR},
            {[styles.messageLTRTextContent]: isLTR},
          )}
        >
          <Text c='neutrals.5' lineClamp={Infinity}>
            {content}
          </Text>
        </Box>

        <Text c='neutrals.4'>{date}</Text>
      </Stack>
    </Group>
  )
}

function ChatContent() {
  const dividerCTA = (
    <Button
      c='neutrals.6'
      className={styles.dividerButton}
      color='gray.4'
      fw='500'
      leftSection={<Box className='icon-size-md' component={CaretDown} />}
      size='md'
      variant='outline'
    >
      Today
    </Button>
  )

  return (
    <Stack px='xxxl'>
      <ChatInfo />
      <Divider label={dividerCTA} labelPosition='center' my='xs' />
      <Message
        content='Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work.'
        date='12 mins ago'
        direction='LTR'
        sender='Jan Mayer'
      />

      <Message
        content='Hi Jan, sure I would love to. Thanks for taking the time to see my work!'
        date='12 mins ago'
        direction='RTL'
        sender='You'
      />
    </Stack>
  )
}

export function Chat() {
  return (
    <Stack h='100%' pb='xxxl'>
      <Header />
      <PerfectScrollbar>
        <ChatContent />
      </PerfectScrollbar>
      <Compose />
    </Stack>
  )
}

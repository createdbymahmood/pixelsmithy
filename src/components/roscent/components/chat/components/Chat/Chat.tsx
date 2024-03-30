'use client'

import {
  Avatar,
  Box,
  Card,
  Group,
  Input,
  rem,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import {
  ArrowBendUpLeft,
  DotsThree,
  Image,
  Microphone,
  PaperPlaneRight,
  Phone,
  SmileySticker,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './Chat.module.scss'

function HeaderUserInfo() {
  return (
    <Group align='flex-start' gap='xs'>
      <Avatar size={24} />
      <Stack gap={0}>
        <Text>ByeWind</Text>
        <Text c='dimmed' size='xs'>
          byewind@twitter.com
        </Text>
      </Stack>
    </Group>
  )
}

function HeaderActions() {
  return (
    <Group>
      <Phone className={clsx('icon-size-md', 'cursor-pointer')} />
      <VideoCamera className={clsx('icon-size-md', 'cursor-pointer')} />
      <DotsThree className={clsx('icon-size-md', 'cursor-pointer')} />
    </Group>
  )
}

function Header() {
  return (
    <Group className={styles.header} justify='space-between' p='xs'>
      <HeaderUserInfo />
      <HeaderActions />
    </Group>
  )
}

interface MessageProps {
  direction: 'LTR' | 'RTL'
  content: string
  type: 'image' | 'text'
}

function Message({direction, content: _content, type}: MessageProps) {
  const isLTR = direction === 'LTR'
  const isText = type === 'text'
  const content = (() => {
    if (type === 'image')
      return (
        <Stack
          className={clsx(styles.messageImageContent, {
            [styles.messageImageContentRTL]: !isText && !isLTR,
            [styles.messageImageContentLTR]: !isText && isLTR,
          })}
          gap='xs'
        >
          <Skeleton animate={false} h={rem(200)} radius='lg' w={rem(350)} />

          <Stack gap={0} p='xs'>
            <Text c='indigo' size='xs'>
              roscent.byewind.com
            </Text>
            <Text size='sm'>Roscent</Text>
          </Stack>
        </Stack>
      )
    return <Text size='sm'>{_content}</Text>
  })()

  return (
    <Group
      className={clsx(styles.messageContainer, {[styles.rtl]: !isLTR})}
      w='fit-content'
    >
      {!isLTR && <MessageActions />}
      <Box
        className={clsx(
          styles.message,
          {[styles.messageRTL]: !isLTR},
          {[styles.messageLTR]: isLTR},
          {[styles.messageRTLTextContent]: !isLTR && isText},
          {[styles.messageLTRTextContent]: isLTR && isText},
          {[styles.textContentMessage]: isText},
        )}
      >
        {content}
      </Box>
      {isLTR ? <MessageActions /> : null}
    </Group>
  )
}

function MessagesList() {
  return (
    <PerfectScrollbar>
      <Stack p='sm'>
        <Message
          content="hi ByeWind, I saw your work on Dribbble and it's awesome. I would like to know more about it. Could you send me your website?"
          direction='RTL'
          type='text'
        />
        <Message
          content='Thank you. Of course. Just a moment, please.'
          direction='LTR'
          type='text'
        />
        <Message content='' direction='LTR' type='image' />
        <Message content='Got it, thank you.' direction='RTL' type='text' />
        <Message content='😉' direction='LTR' type='text' />
      </Stack>
    </PerfectScrollbar>
  )
}

function MessageActions() {
  return (
    <Group className={styles.actions}>
      <SmileySticker className={clsx('icon-size-md', 'cursor-pointer')} />
      <ArrowBendUpLeft className={clsx('icon-size-md', 'cursor-pointer')} />
      <DotsThree className={clsx('icon-size-md', 'cursor-pointer')} />
    </Group>
  )
}

function MessageInput() {
  return (
    <Card m='md' px='md' py={rem(5)}>
      <Group wrap='nowrap'>
        <Microphone className={clsx('icon-size-md', 'cursor-pointer')} />
        <Image className={clsx('icon-size-md', 'cursor-pointer')} />
        <SmileySticker className={clsx('icon-size-md', 'cursor-pointer')} />
        <Input
          classNames={{input: styles.input}}
          placeholder='Type Message'
          w='100%'
        />
        <PaperPlaneRight
          className={clsx('icon-size-md', 'cursor-pointer', styles.send)}
        />
      </Group>
    </Card>
  )
}

export function Chat() {
  return (
    <Stack className={styles.chat} gap={0} h='100%'>
      <Header />
      <MessagesList />
      <MessageInput />
    </Stack>
  )
}

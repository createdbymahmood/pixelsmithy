import {Avatar, Box, Group, rem, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayjs from 'dayjs'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {dateTimeFormat} from '@/constants'

import styles from './ChatMessage.module.scss'

interface ChatMessageProps {
  direction: 'LTR' | 'RTL'
  content: string
  type: 'image' | 'text'
  date: Dayjs
}

function ChatMessage({content, date, direction, type}: ChatMessageProps) {
  const isLTR = direction === 'LTR'
  const isText = type === 'text'

  return (
    <Stack gap={rem(8)}>
      <Group
        className={clsx(styles.messageContainer, {[styles.rtl]: !isLTR})}
        w='fit-content'
      >
        {isLTR ? <Avatar size={rem(36)} /> : null}
        <Box
          className={clsx(
            styles.message,

            {[styles.messageRTLTextContent]: !isLTR && isText},
            {[styles.messageLTRTextContent]: isLTR && isText},
            {[styles.textContentMessage]: isText},
          )}
        >
          <Text>{content}</Text>
        </Box>
        {!isLTR ? <Avatar size={rem(36)} /> : null}
      </Group>
      <Text
        c='general.3'
        ml={!isLTR ? 'auto' : 0}
        mr={isLTR ? 'auto' : 0}
        size='xs'
      >
        {date.format(dateTimeFormat)}
      </Text>
    </Stack>
  )
}

export function ChatMessages() {
  return (
    <PerfectScrollbar>
      <Box h='100%' px={rem(28)}>
        <Stack p='sm'>
          <ChatMessage
            content='Hi Luis, can you please be more specific?'
            date={dayjs()}
            direction='LTR'
            type='text'
          />
          <ChatMessage
            content='Hi Luis, can you please be more specific?'
            date={dayjs()}
            direction='RTL'
            type='text'
          />

          <ChatMessage
            content='Sure, I want to know when the new spring collection for men is coming'
            date={dayjs()}
            direction='LTR'
            type='text'
          />
          <ChatMessage
            content='Thank you for taking interest in our upcoming products. You can have a look at the upcoming colection in our blog post.'
            date={dayjs()}
            direction='RTL'
            type='text'
          />

          <ChatMessage
            content='Hi Luis, can you please be more specific?'
            date={dayjs()}
            direction='LTR'
            type='text'
          />
          <ChatMessage
            content='Hi Luis, can you please be more specific?'
            date={dayjs()}
            direction='RTL'
            type='text'
          />

          <ChatMessage
            content='Sure, I want to know when the new spring collection for men is coming'
            date={dayjs()}
            direction='LTR'
            type='text'
          />
          <ChatMessage
            content='Thank you for taking interest in our upcoming products. You can have a look at the upcoming colection in our blog post.'
            date={dayjs()}
            direction='RTL'
            type='text'
          />
        </Stack>
      </Box>
    </PerfectScrollbar>
  )
}

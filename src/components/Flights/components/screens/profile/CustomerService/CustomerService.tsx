import {Box, Card, Group, Input, rem, Stack, Text} from '@mantine/core'
import {Paperclip, PaperPlaneTilt, Smiley} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEmpty} from 'lodash-es'
import React, {useState} from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/Flights/components/common'

import styles from './CustomerService.module.scss'

interface MessageProps {
  content: string
  time: string
  dir: 'ltr' | 'rtl'
}

function Message({content, time, dir}: MessageProps) {
  const isLTR = dir === 'ltr'
  return (
    <Group
      align='flex-end'
      className={clsx(
        [{'flex-dir-row-reverse': !isLTR}],
        [{'flex-dir-row': isLTR}],
      )}
      wrap='nowrap'
    >
      <Card
        className={clsx(
          styles.message,
          {[styles.ltr]: isLTR},
          {[styles.rtl]: !isLTR},
        )}
        radius='md'
      >
        {content}
      </Card>

      <Text c='gray.6' size='xs'>
        {time}
      </Text>
    </Group>
  )
}

function MessagesList() {
  return (
    <Stack className={styles.messagsList} flex={1} gap='xxxl'>
      <Message
        content='How do I add a new payment method?'
        dir='rtl'
        time='12:04'
      />

      <Message
        content='Good afternoon, how can we help you?'
        dir='ltr'
        time='12:02'
      />

      <Text c='gray.6' size='sm' ta='center'>
        Today
      </Text>
    </Stack>
  )
}

function Compose() {
  const [value, setValue] = useState<string>()
  const hasValue = !isEmpty(value)
  const commonIconProps = {
    className: clsx('icon-size-md', 'cursor-pointer'),
  }
  const leftSection = <Box {...commonIconProps} component={Smiley} />
  const rightSection = (
    <Group
      justify={hasValue ? 'space-between' : 'flex-end'}
      ml='auto'
      mr='sm'
      wrap='nowrap'
    >
      <Box {...commonIconProps} component={Paperclip} />
      {hasValue ? (
        <Box
          {...commonIconProps}
          c='primary'
          component={PaperPlaneTilt}
          weight='fill'
        />
      ) : null}
    </Group>
  )
  return (
    <Input
      classNames={{wrapper: styles.composeInputWrapper}}
      leftSection={leftSection}
      leftSectionPointerEvents='all'
      placeholder='Message'
      radius='md'
      rightSection={rightSection}
      rightSectionPointerEvents='all'
      value={value}
      variant='filled'
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  )
}

export function CustomerService() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='Customer service' />
        <MessagesList />
        <Compose />
      </Stack>
    </IOSScreen>
  )
}

import {Box, Group, Input, rem, Stack} from '@mantine/core'
import {Paperclip, PaperPlaneTilt, Smiley} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEmpty} from 'lodash-es'
import React, {useState} from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/Flights/components/common'

import styles from './CustomerService.module.scss'

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
        <Box flex={1} id='messages-list' />
        <Compose />
      </Stack>
    </IOSScreen>
  )
}

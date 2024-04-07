import type {GroupProps} from '@mantine/core'
import {Box, Group, Text} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react'
import clsx from 'clsx'
import React from 'react'

interface ScreenHeaderProps extends GroupProps {
  title: string
}

export function ScreenHeader({className, title, ...props}: ScreenHeaderProps) {
  return (
    <Group
      className={clsx(className, 'cursor-pointer')}
      justify='space-between'
      mb='xxxl'
      {...props}
    >
      <Box className='icon-size-md' component={ArrowLeft} weight='bold' />
      <Text fw='500' size='md'>
        {title}
      </Text>
      <Box className='icon-size-md' />
    </Group>
  )
}

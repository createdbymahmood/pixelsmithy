import type {GroupProps} from '@mantine/core'
import {Box, Group, Text} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react'
import React from 'react'

interface ScreenHeaderProps extends GroupProps {
  title: string
}

export function ScreenHeader({title, ...props}: ScreenHeaderProps) {
  return (
    <Group justify='space-between' {...props} px='md'>
      <Box className='icon-size-md' component={ArrowLeft} weight='bold' />
      <Text fw='500' size='md'>
        {title}
      </Text>
      <Box className='icon-size-md' />
    </Group>
  )
}

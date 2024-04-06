import {Box, Group} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {ChatSidebar} from '../ChatSidebar'

interface ChatLayoutProps {
  children: ReactNode
}

export function ChatLayout({children}: ChatLayoutProps) {
  return (
    <Group align='flex-start' gap={0} h='100%' w='100%' wrap='nowrap'>
      <ChatSidebar />

      <Box h='100%' style={{alignSelf: 'stretch'}} w='100%'>
        {children}
      </Box>
    </Group>
  )
}

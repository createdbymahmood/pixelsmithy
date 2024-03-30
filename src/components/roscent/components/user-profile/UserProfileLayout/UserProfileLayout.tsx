'use client'

import {Box, Group} from '@mantine/core'
import {SideUsersList} from '@roscent/components/user-profile/UserProfileLayout/components'
import type {ReactNode} from 'react'
import React from 'react'

interface UserProfileLayoutProps {
  children: ReactNode
}

export function UserProfileLayout({children}: UserProfileLayoutProps) {
  return (
    <Group align='flex-start' h='100%' wrap='nowrap'>
      <SideUsersList />
      <Box w='100%'>{children}</Box>
    </Group>
  )
}

'use client'

import {Box, Group} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {SideUsersList} from '@/components/Roscent/components/user-profile/UserProfileLayout/components'

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

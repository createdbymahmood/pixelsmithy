import {Card, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

interface AuthenticationLayoutProps {
  children: ReactNode
}

export function AuthenticationLayout({children}: AuthenticationLayoutProps) {
  return (
    <Stack align='center' bg='primary.4' h='100vh' justify='center' w='100vw'>
      <Card p='xl'>{children}</Card>
    </Stack>
  )
}

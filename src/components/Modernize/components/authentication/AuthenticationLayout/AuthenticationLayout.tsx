import {Card, rem, Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

interface AuthenticationLayoutProps {
  children: ReactNode
}

export function AuthenticationLayout({children}: AuthenticationLayoutProps) {
  return (
    <Stack align='center' bg='general.0' justify='center' mih='100vh'>
      <Card miw={rem(540)} p='md' radius='sm'>
        {children}
      </Card>
    </Stack>
  )
}

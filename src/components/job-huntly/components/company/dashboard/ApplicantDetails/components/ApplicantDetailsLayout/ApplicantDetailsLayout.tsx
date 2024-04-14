import {Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {Header} from './components'

interface ApplicantDetailsLayoutProps {
  children: ReactNode
}

export function ApplicantDetailsLayout({
  children,
}: ApplicantDetailsLayoutProps) {
  return (
    <Stack>
      <Header />
      {children}
    </Stack>
  )
}

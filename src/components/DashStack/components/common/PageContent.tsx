import {Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

interface PageContentProps {
  children: ReactNode
}

export function PageContent({children}: PageContentProps) {
  return (
    <Stack gap='md' pb='md'>
      {children}
    </Stack>
  )
}

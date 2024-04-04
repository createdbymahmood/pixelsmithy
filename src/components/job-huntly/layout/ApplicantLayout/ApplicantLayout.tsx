'use client'

import {Group} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {Sidebar} from '@/components/job-huntly/layout/ApplicantLayout/components'

interface ApplicantLayoutProps {
  children: ReactNode
}

export function ApplicantLayout({children}: ApplicantLayoutProps) {
  return (
    <Group
      align='stretch'
      className='overflow-y-hidden'
      display='flex'
      gap='0'
      h='100vh'
      wrap='nowrap'
    >
      <Sidebar />
      {children}
    </Group>
  )
}

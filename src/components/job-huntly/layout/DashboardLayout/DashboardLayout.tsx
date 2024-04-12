'use client'

import {Group} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import {Sidebar} from '@/components/job-huntly/layout/DashboardLayout/components'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({children}: DashboardLayoutProps) {
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

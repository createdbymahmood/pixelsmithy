import {Group} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import type {SidebarProps} from '@/components/job-huntly/layout/DashboardLayout/components'
import {Sidebar} from '@/components/job-huntly/layout/DashboardLayout/components'

interface DashboardLayoutProps extends SidebarProps {
  children: ReactNode
}

export function DashboardLayout({children, sections}: DashboardLayoutProps) {
  return (
    <Group
      align='stretch'
      className='overflow-hidden'
      display='flex'
      gap='0'
      h='100vh'
      wrap='nowrap'
    >
      <Sidebar sections={sections} />
      {children}
    </Group>
  )
}

'use client'

import {
  Buildings,
  Calendar,
  ChatCenteredText,
  ClipboardText,
  Gear,
  HouseSimple,
  Question,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'
import React from 'react'

import type {SidebarSection} from '@/components/roscent'
import {urls} from '@/constants'

import {DashboardLayout} from './DashboardLayout'

const sections: SidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: HouseSimple,
        href: urls.JobHuntly.company.dashboard.home,
        activeSegment: ['home'],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ChatCenteredText,
        href: '',
        activeSegment: ['chat'],
        unread: 1,
      },
      {
        id: 'company-profile',
        title: 'Company Profile',
        icon: Buildings,
        href: '',
        activeSegment: ['null'],
      },

      {
        id: 'all-applicants',
        title: 'All Applicants',
        icon: UsersThree,
        href: '',
        activeSegment: ['null'],
      },
      {
        id: 'job-listing',
        title: 'Job Listing',
        icon: ClipboardText,
        href: '',
        activeSegment: ['null'],
      },
      {
        id: 'my-schedule',
        title: 'My Schedule',
        icon: Calendar,
        href: '',
        activeSegment: ['null'],
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        id: 'settings',
        title: 'Settings',
        icon: Gear,
        href: '',
        activeSegment: ['settings', 'my-profile'],
      },
      {
        id: 'help-center',
        title: 'Help Center',
        icon: Question,
        href: '',
        activeSegment: ['help-center'],
      },
    ],
  },
]

interface CompanyDashboardLayoutProps {
  children: ReactNode
}

export function CompanyDashboardLayout({
  children,
}: CompanyDashboardLayoutProps) {
  return <DashboardLayout sections={sections}>{children}</DashboardLayout>
}

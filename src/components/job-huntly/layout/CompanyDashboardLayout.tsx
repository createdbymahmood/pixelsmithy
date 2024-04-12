'use client'

import {
  Buildings,
  ChatCenteredText,
  FileText,
  Gear,
  HouseSimple,
  MagnifyingGlass,
  Question,
  User,
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
        href: urls.JobHuntly.applicant.dashboard.home,
        activeSegment: ['home'],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ChatCenteredText,
        href: urls.JobHuntly.applicant.dashboard.chat,
        activeSegment: ['chat'],
        unread: 1,
      },
      {
        id: 'my-applications',
        title: 'My Applications',
        icon: FileText,
        href: urls.JobHuntly.applicant.dashboard.applications.index,
        activeSegment: ['applications'],
      },
      {
        id: 'jobs',
        title: 'Find Jobs',
        icon: MagnifyingGlass,
        href: urls.JobHuntly.applicant.dashboard.jobs,
        activeSegment: ['jobs'],
      },
      {
        id: 'browse-companies',
        title: 'Browse Companies',
        icon: Buildings,
        href: urls.JobHuntly.applicant.dashboard.companies,
        activeSegment: ['companies'],
      },
      {
        id: 'my-public-profile',
        title: 'My Public Profile',
        icon: User,
        href: urls.JobHuntly.applicant.dashboard.profile,
        activeSegment: ['profile'],
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
        href: urls.JobHuntly.applicant.dashboard.settings.profile,
        activeSegment: ['settings', 'my-profile'],
      },
      {
        id: 'help-center',
        title: 'Help Center',
        icon: Question,
        href: urls.JobHuntly.applicant.dashboard.helpCenter.index,
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

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

import {CompanyDashboardPageLayout} from './CompanyDashboardPageLayout'
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
        href: urls.JobHuntly.company.dashboard.chat,
        activeSegment: ['chat'],
        unread: 1,
      },
      {
        id: 'company-profile',
        title: 'Company Profile',
        icon: Buildings,
        href: urls.JobHuntly.company.dashboard.companyProfile,
        activeSegment: ['company-profile'],
      },

      {
        id: 'all-applicants',
        title: 'All Applicants',
        icon: UsersThree,
        href: urls.JobHuntly.company.dashboard.applicants.all,
        activeSegment: ['all-applicants'],
      },
      {
        id: 'job-listing',
        title: 'Job Listing',
        icon: ClipboardText,
        href: urls.JobHuntly.company.dashboard.jobListing,
        activeSegment: ['job-listing'],
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
  return (
    <DashboardLayout sections={sections}>
      <CompanyDashboardPageLayout>{children}</CompanyDashboardPageLayout>
    </DashboardLayout>
  )
}

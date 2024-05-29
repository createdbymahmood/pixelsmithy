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

import type {SidebarSection} from '@/components/roscent'
import {
  JobhuntlyCompanyDashboardApplicants,
  JobhuntlyCompanyDashboardChat,
  JobhuntlyCompanyDashboardCompanyprofile,
  JobhuntlyCompanyDashboardHome,
  JobhuntlyCompanyDashboardJobs,
  JobhuntlyCompanyDashboardSettingsOverview,
} from '@/lib/declarative-routing'

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
        href: JobhuntlyCompanyDashboardHome(),
        activeSegment: ['home'],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ChatCenteredText,
        href: JobhuntlyCompanyDashboardChat(),
        activeSegment: ['chat'],
        unread: 1,
      },
      {
        id: 'company-profile',
        title: 'Company Profile',
        icon: Buildings,
        href: JobhuntlyCompanyDashboardCompanyprofile(),
        activeSegment: ['company-profile'],
      },

      {
        id: 'applicants',
        title: 'All Applicants',
        icon: UsersThree,
        href: JobhuntlyCompanyDashboardApplicants(),
        activeSegment: ['applicants'],
      },
      {
        id: 'job-listing',
        title: 'Job Listing',
        icon: ClipboardText,
        href: JobhuntlyCompanyDashboardJobs(),
        activeSegment: ['jobs'],
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
        href: JobhuntlyCompanyDashboardSettingsOverview(),
        activeSegment: ['settings'],
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

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

import type {SidebarSection} from '@/components/roscent'
import {
  JobhuntlyApplicantDashboardApplications,
  JobhuntlyApplicantDashboardChat,
  JobhuntlyApplicantDashboardCompanies,
  JobhuntlyApplicantDashboardHelpcenter,
  JobhuntlyApplicantDashboardHome,
  JobhuntlyApplicantDashboardJobs,
  JobhuntlyApplicantDashboardProfile,
  JobhuntlyApplicantDashboardSettingsMyprofile,
} from '@/lib/declarative-routing'

import {DashboardLayout} from './DashboardLayout'

const sections: SidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: HouseSimple,
        href: JobhuntlyApplicantDashboardHome(),
        activeSegment: ['home'],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ChatCenteredText,
        href: JobhuntlyApplicantDashboardChat(),
        activeSegment: ['chat'],
        unread: 1,
      },
      {
        id: 'my-applications',
        title: 'My Applications',
        icon: FileText,
        href: JobhuntlyApplicantDashboardApplications(),
        activeSegment: ['applications'],
      },
      {
        id: 'jobs',
        title: 'Find Jobs',
        icon: MagnifyingGlass,
        href: JobhuntlyApplicantDashboardJobs(),
        activeSegment: ['jobs'],
      },
      {
        id: 'browse-companies',
        title: 'Browse Companies',
        icon: Buildings,
        href: JobhuntlyApplicantDashboardCompanies(),
        activeSegment: ['companies'],
      },
      {
        id: 'my-public-profile',
        title: 'My Public Profile',
        icon: User,
        href: JobhuntlyApplicantDashboardProfile(),
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
        href: JobhuntlyApplicantDashboardSettingsMyprofile(),
        activeSegment: ['settings', 'my-profile'],
      },
      {
        id: 'help-center',
        title: 'Help Center',
        icon: Question,
        href: JobhuntlyApplicantDashboardHelpcenter(),
        activeSegment: ['help-center'],
      },
    ],
  },
]

interface ApplicantDashboardLayoutProps {
  children: ReactNode
}

export function ApplicantDashboardLayout({
  children,
}: ApplicantDashboardLayoutProps) {
  return <DashboardLayout sections={sections}>{children}</DashboardLayout>
}

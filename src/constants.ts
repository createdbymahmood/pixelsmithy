import type {MantineColorScheme} from '@mantine/core'

import {
  DashstackDashboard,
  Flights,
  JobhuntlyApplicantDashboardHome,
  JobhuntlyCompanyDashboardHome,
  Joblocation,
  ModernizeDashboard,
  RoscentDashboard,
} from '@/lib/declarative-routing'

export const defaultThemeColorScheme: MantineColorScheme = 'light'
export const defaultDateFormat = 'DD MMMM YYYY'
export const defaultLoadingScreenDelayMS = 500
export const dateTimeFormat = 'MMM D, hh:mm A'
export const CALLBACK_URL_PARAM_KEY = 'callback'

export const applications = [
  {
    title: 'Job Huntly - Company',
    description: 'Job Search Dashboard',
    href: JobhuntlyCompanyDashboardHome(),
    info: 'Desktop version',
  },
  {
    title: 'Job Huntly - Applicant',
    description: 'Job Search Dashboard',
    href: JobhuntlyApplicantDashboardHome(),
    info: 'Desktop version',
  },
  {
    title: 'Roscent',
    description: 'Design System and UI Kit',
    href: RoscentDashboard(),
    info: 'Desktop version',
  },
  {
    title: 'Modernize',
    description: 'Dashboard UI Kit',
    href: ModernizeDashboard(),
    info: 'Desktop version',
  },
  {
    title: 'DashStack',
    description: 'Dashboard UI Kit',
    href: DashstackDashboard(),
    info: 'Desktop version',
  },
  {
    title: 'Flights',
    description: 'Flight Schedule App',
    href: Flights(),
    info: 'Mobile Version Only, But also viewable on desktop',
  },
  {
    title: 'Job Location',
    description: 'A Simple Job Search Page',
    href: Joblocation(),
  },
]

import type {MantineColorScheme} from '@mantine/core'
import urlCat from 'urlcat'

export const defaultThemeColorScheme: MantineColorScheme = 'light'
export const defaultDateFormat = 'DD MMMM YYYY'
export const defaultLoadingScreenDelayMS = 500
export const urls = {
  JobLocation: {
    index: '/job-location',
  },
  SnowUI: {
    index: '/snow-ui/dashboard',
    projects: {
      index: '/snow-ui/dashboard/projects',
      overview: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/overview', {projectId}),
      targets: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/targets', {projectId}),
      budget: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/budget', {projectId}),
      users: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/users', {projectId}),
      files: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/files', {projectId}),
      activity: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/activity', {projectId}),
      settings: (projectId: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/settings', {projectId}),
    },
    account: {
      index: '/snow-ui/dashboard/account',
      overview: '/snow-ui/dashboard/account/overview',
      settings: '/snow-ui/dashboard/account/settings',
      security: '/snow-ui/dashboard/account/security',
      billing: '/snow-ui/dashboard/account/billing',
      statements: '/snow-ui/dashboard/account/statements',
      referrals: '/snow-ui/dashboard/account/referrals',
      apiKey: '/snow-ui/dashboard/account/api-key',
      logs: '/snow-ui/dashboard/account/logs',
    },
    email: {
      index: '/snow-ui/dashboard/email/inbox',
      inbox: (emailId: string) =>
        urlCat('/snow-ui/dashboard/email/inbox/:emailId', {emailId}),
      compose: '/snow-ui/dashboard/email/compose',
      sent: '/snow-ui/dashboard/email/sent',
      draft: '/snow-ui/dashboard/email/draft',
      spam: '/snow-ui/dashboard/email/spam',
      trash: '/snow-ui/dashboard/email/trash',
      archive: '/snow-ui/dashboard/email/archive',
    },
    userProfile: (userId: string) =>
      urlCat('/snow-ui/dashboard/user-profile/:userId', {userId}),
    emailTemplate: '/snow-ui/email-template',
    chat: '/snow-ui/dashboard/chat',
    authentication: {
      forgotPassword: '/snow-ui/authentication/forgot-password',
      signUp: '/snow-ui/authentication/sign-up',
    },
  },
}
export const applications = [
  {
    id: 1,
    title: 'Job Location',
    description: 'A dashboard page',
    href: urls.JobLocation.index,
  },
  {
    id: 2,
    title: 'Snow UI',
    description: 'Design system and UI Kit',
    href: urls.SnowUI.index,
  },
]

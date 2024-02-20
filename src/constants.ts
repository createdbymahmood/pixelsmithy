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
      overview: '/snow-ui/dashboard/projects',
      details: (projectId: string, section: string) =>
        urlCat('/snow-ui/dashboard/projects/:projectId/:section', {
          projectId,
          section,
        }),
    },
    account: {
      index: '/snow-ui/dashboard/account/overview',
      page: (section: string) =>
        urlCat('/snow-ui/dashboard/account/:section', {section}),
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

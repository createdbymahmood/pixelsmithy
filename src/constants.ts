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
    index: '/snow-ui',
    projects: {
      overview: '/snow-ui/projects',
      details: (projectId: string, section: string) =>
        urlCat('/snow-ui/projects/:projectId/:section', {
          projectId,
          section,
        }),
    },
    account: {
      index: '/snow-ui/account/overview',
      page: (section: string) => urlCat('/snow-ui/account/:section', {section}),
    },
    email: {
      index: '/snow-ui/email/inbox',
      inbox: (emailId: string) =>
        urlCat('/snow-ui/email/inbox/:emailId', {emailId}),
      compose: '/snow-ui/email/compose',
      sent: '/snow-ui/email/sent',
      draft: '/snow-ui/email/draft',
      spam: '/snow-ui/email/spam',
      trash: '/snow-ui/email/trash',
      archive: '/snow-ui/email/archive',
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

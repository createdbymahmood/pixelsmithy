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
        urlCat('/snow-ui/projects/:projectId/details/:section', {
          projectId,
          section,
        }),
    },
    account: {
      index: '/snow-ui/account',
      page: (section: string) => urlCat('/snow-ui/account/:section', {section}),
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

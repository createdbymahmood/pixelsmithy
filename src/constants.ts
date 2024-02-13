import type {MantineColorScheme} from '@mantine/core'

export const defaultThemeColorScheme: MantineColorScheme = 'light'
export const defaultDateFormat = 'DD MMMM YYYY'
export const urls = {
  JobLocation: {
    index: '/job-location',
  },
  SnowUI: {
    index: '/snow-ui',
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

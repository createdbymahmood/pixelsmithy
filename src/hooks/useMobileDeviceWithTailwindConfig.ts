import {useMediaQuery} from '@mantine/hooks'

import {tailwindConfig} from '@/components/job-location/lib/tailwind'

export function useMobileDeviceWithTailwindConfig() {
  return useMediaQuery(`(max-width: ${tailwindConfig.theme.screens.md})`, false)
}

import {useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'

export function useMobileDevice() {
  const theme = useMantineTheme()
  return useMediaQuery(`(max-width: ${theme.breakpoints.lg})`)
}

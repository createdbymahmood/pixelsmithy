import {useMediaQuery} from '@mantine/hooks'
import {useMemo} from 'react'

import {tailwindConfig} from '@/components/job-location/lib/tailwind'

const {screens} = tailwindConfig.theme as {
  screens: Record<'2xl' | 'lg' | 'md' | 'sm' | 'xl', string>
}

type Breakpoints = keyof typeof screens

type ResponsiveValue<T> = T extends boolean
  ? boolean
  : T extends string
    ? T
    : keyof T

export type ResponsiveProps<T> = {
  [K in Breakpoints]?: ResponsiveValue<T>
} & {base: ResponsiveValue<T>}

function getScreenValue(key: string) {
  return Number.parseInt(screens[key as Breakpoints].replace('px', ''), 10)
}

/**
 * Custom hook for handling responsive behavior based on breakpoints.
 * @param props - The responsive props containing breakpoints and base value.
 * @returns The responsive value based on the current breakpoint.
 */
export function useResponsiveVariant<T>(props: ResponsiveProps<T>) {
  const {base, ...breakpoints} = props

  const mediaQueries = Object.keys(breakpoints)
    .sort((a, b) => {
      if (getScreenValue(a) > getScreenValue(b)) {
        return 1
      }

      return -1
    })
    .reverse()
    .map((breakpoint) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useMediaQuery(`(min-width: ${screens[breakpoint as Breakpoints]})`)
        ? breakpoints[breakpoint as Breakpoints]
        : undefined,
    )
    .filter(Boolean)

  const size = useMemo(() => {
    return mediaQueries[0] ?? base
  }, [base, mediaQueries])

  return size
}

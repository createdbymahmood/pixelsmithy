import {useMediaQuery} from '@mantine/hooks'
import {useMemo} from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig as unknown as any)

const {screens} = fullConfig.theme as {
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
} & {initial: ResponsiveValue<T>}

function getScreenValue(key: string) {
  return Number.parseInt(screens[key as Breakpoints].replace('px', ''), 10)
}

/**
 * Custom hook for handling responsive behavior based on breakpoints.
 * @param props - The responsive props containing breakpoints and initial value.
 * @returns The responsive value based on the current breakpoint.
 */
export function useResponsiveVariant<T>(props: ResponsiveProps<T>) {
  const {initial, ...breakpoints} = props

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
    return mediaQueries[0] ?? initial
  }, [initial, mediaQueries])

  return size
}
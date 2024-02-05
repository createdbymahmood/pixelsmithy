import type {MantineColorScheme} from '@mantine/core'
import {defineProperties} from '@vanilla-extract/sprinkles'

import {defaultThemeColorScheme} from '@/constants'
import {colors} from '@/lib/ui/colors'

export const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: {'@media': '(prefers-color-scheme: dark)'},
  },
  defaultCondition: defaultThemeColorScheme as Exclude<
    MantineColorScheme,
    'auto'
  >,
  properties: {
    color: colors,
    background: colors,
  },
})

import type {DefaultMantineColor} from '@mantine/core'

type ExtendedCustomColors =
  | DefaultMantineColor
  | 'neutrals'
  | 'primary'
  | 'tertiary'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}

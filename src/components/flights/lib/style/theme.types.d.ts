import type {DefaultMantineColor} from '@mantine/core'

type ExtendedCustomColors =
  | DefaultMantineColor
  | 'blue-light'
  | 'error'
  | 'mint'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}

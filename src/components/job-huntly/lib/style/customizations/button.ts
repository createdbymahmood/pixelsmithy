import type {ButtonCssVariables, ButtonProps} from '@mantine/core'
import {rem} from '@mantine/core'

type ButtonSizeResolverReturn = Record<
  'root',
  Partial<Record<ButtonCssVariables['root'], string>>
>

export const buttonSizeResolver = (
  size: ButtonProps['size'],
): ButtonSizeResolverReturn => {
  switch (size) {
    case 'lg':
      return {
        root: {
          '--button-fz': rem(18),
          '--button-height': rem(57),
        },
      }

    case 'md':
      return {
        root: {
          '--button-fz': rem(16),
          '--button-height': rem(50),
        },
      }

    default:
      return {root: {}}
  }
}

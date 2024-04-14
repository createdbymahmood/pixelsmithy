import type {ActionIconCssVariables, ActionIconProps} from '@mantine/core'
import {rem} from '@mantine/core'

type ActionIconSizeResolverReturn = Record<
  'root',
  Partial<Record<ActionIconCssVariables['root'], string>>
>

export const actionIconSizeResolver = (
  size: ActionIconProps['size'],
): ActionIconSizeResolverReturn => {
  switch (size) {
    case 'lg':
      return {
        root: {
          '--ai-size': rem(57),
        },
      }

    case 'md':
      return {
        root: {
          '--ai-size': rem(50),
        },
      }

    case 'sm':
      return {
        root: {
          '--ai-size': rem(42),
        },
      }

    default:
      return {root: {}}
  }
}

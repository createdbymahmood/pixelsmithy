import type {TextCssVariables, TextProps} from '@mantine/core'
import {rem} from '@mantine/core'

type DisplayTextResolverReturn = Record<
  'root',
  Partial<Record<TextCssVariables['root'], string>>
>

export const displayTextResolver = (
  size: TextProps['size'],
): DisplayTextResolverReturn => {
  switch (size) {
    case 'xl':
      return {
        root: {
          '--text-fz': rem(72),
          '--text-lh': rem(72),
        },
      }
    case 'lg':
      return {
        root: {
          '--text-fz': rem(48),
          '--text-lh': rem(48),
        },
      }

    case 'md':
      return {
        root: {
          '--text-fz': rem(20),
          '--text-lh': rem(24),
        },
      }

    default:
      return {root: {}}
  }
}

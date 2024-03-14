import type {
  MantineThemeComponents,
  TextCssVariables,
  TextProps,
  TextStylesNames,
} from '@mantine/core'
import {rem, Text} from '@mantine/core'

type DisplayTextResolverReturn = Record<
  TextStylesNames,
  Partial<Record<TextCssVariables['root'], string>>
>

const displayTextResolver = (
  size: TextProps['size'],
): DisplayTextResolverReturn => {
  switch (size) {
    case 'xxl':
      return {
        root: {
          '--text-fz': rem(72),
          '--text-lh': rem(90),
        },
      }

    case 'xl':
      return {
        root: {
          '--text-fz': rem(60),
          '--text-lh': rem(72),
        },
      }
    case 'lg':
      return {
        root: {
          '--text-fz': rem(48),
          '--text-lh': rem(60),
        },
      }

    case 'md':
      return {
        root: {
          '--text-fz': rem(36),
          '--text-lh': rem(44),
        },
      }

    case 'sm':
      return {
        root: {
          '--text-fz': rem(30),
          '--text-lh': rem(38),
        },
      }

    case 'xs':
      return {
        root: {
          '--text-fz': rem(24),
          '--text-lh': rem(32),
        },
      }

    default:
      return {root: {}}
  }
}

export const components: MantineThemeComponents = {
  Text: Text.extend({
    vars: (theme, props) => {
      if (props.variant === 'display') {
        return displayTextResolver(props.size)
      }

      return {root: {}}
    },
  }),
}

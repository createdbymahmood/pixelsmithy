import type {
  MantineThemeComponents,
  TextCssVariables,
  TextProps,
} from '@mantine/core'
import {Badge, Button, rem, Text} from '@mantine/core'

import BadgeStyles from './Badge.module.scss'

type DisplayTextResolverReturn = Record<
  'root',
  Partial<Record<TextCssVariables['root'], string>>
>

const displayTextResolver = (
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

export const components: MantineThemeComponents = {
  Text: Text.extend({
    vars: (theme, props) => {
      if (props.variant === 'display') {
        return displayTextResolver(props.size)
      }

      return {root: {}}
    },
  }),
  Button: Button.extend({
    defaultProps: {
      fw: '700',
    },
  }),
  Badge: Badge.extend({
    classNames(theme, props, ctx) {
      return {
        root: BadgeStyles.root,
      }
    },
  }),
}

import type {MantineThemeComponents} from '@mantine/core'
import {Button} from '@mantine/core'
import clsx from 'clsx'

import ButtonStyles from './Button.module.scss'

export const components: MantineThemeComponents = {
  Button: Button.extend({
    defaultProps: {
      radius: 'sm',
    },
    classNames(theme, props, ctx) {
      return {
        root: clsx(ButtonStyles.root),
      }
    },
  }),
}

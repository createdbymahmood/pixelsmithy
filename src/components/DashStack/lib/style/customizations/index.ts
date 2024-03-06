import type {MantineThemeComponents} from '@mantine/core'
import {Card} from '@mantine/core'

export const components: MantineThemeComponents = {
  Card: Card.extend({
    defaultProps: {
      p: 'sm',
      radius: 'lg',
    },
  }),
}

import type {MantineThemeComponents} from '@mantine/core'
import {Badge, Card, rem, Table} from '@mantine/core'

import BadgeStyles from './Badge.module.scss'
import TableStyles from './Table.module.scss'

export const components: MantineThemeComponents = {
  Card: Card.extend({
    defaultProps: {
      p: 'sm',
      radius: 'lg',
    },
  }),
  Table: Table.extend({
    defaultProps: {
      verticalSpacing: rem(16),
      withRowBorders: false,
    },
    classNames(theme, props, ctx) {
      return {
        table: TableStyles.table,
        thead: TableStyles.thead,
        th: TableStyles.th,
        tr: TableStyles.tr,
        td: TableStyles.td,
      }
    },
  }),
  Badge: Badge.extend({
    defaultProps: {
      size: 'lg',
    },
    classNames(theme, props, ctx) {
      return {
        label: BadgeStyles.label,
      }
    },
  }),
}

import type {MantineThemeComponents} from '@mantine/core'
import {
  Badge,
  Card,
  Input,
  InputWrapper,
  rem,
  Select,
  Table,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'

import BadgeStyles from './Badge.module.scss'
import InputStyles from './Input.module.scss'
import TableStyles from './Table.module.scss'

export const components: MantineThemeComponents = {
  Card: Card.extend({
    defaultProps: {
      p: 'sm',
      radius: 'lg',
    },
  }),
  Select: Select.extend({
    defaultProps: {
      rightSection: <CaretDown />,
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

  InputWrapper: InputWrapper.extend({
    classNames(theme, props, ctx) {
      return {
        label: InputStyles.label,
      }
    },
  }),

  Input: Input.extend({
    defaultProps: {
      variant: 'filled',
    },

    classNames(theme, props, ctx) {
      return {
        wrapper: InputStyles.wrapper,
      }
    },
  }),
}

import type {MantineThemeComponents} from '@mantine/core'
import {
  Button,
  Card,
  MultiSelect,
  Pagination,
  rem,
  Table,
  Timeline,
} from '@mantine/core'
import {CaretLeft, CaretRight} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import AutocompleteStyles from './Autocomplete.module.scss'
import ButtonStyles from './Button.module.scss'
import CardStyles from './Card.module.scss'
import PaginationStyles from './Pagination.module.scss'
import TableStyles from './Table.module.scss'
import TimelineStyles from './Timeline.module.scss'

export const components: MantineThemeComponents = {
  Autocomplete: MultiSelect.extend({
    classNames(theme, props, ctx) {
      return {
        root: AutocompleteStyles.root,
        input: AutocompleteStyles.input,
        dropdown: AutocompleteStyles.dropdown,
        options: AutocompleteStyles.options,
      }
    },
  }),
  Timeline: Timeline.extend({
    classNames(theme, props, ctx) {
      return {
        item: TimelineStyles.item,
        itemTitle: TimelineStyles.itemTitle,
      }
    },
  }),

  Table: Table.extend({
    defaultProps: {
      verticalSpacing: rem(8),
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
  Card: Card.extend({
    classNames(theme, props, ctx) {
      return {
        root: CardStyles.root,
      }
    },
  }),
  Button: Button.extend({
    classNames(theme, props, ctx) {
      const isLightVariant = props.variant === 'light'
      return {
        root: clsx(ButtonStyles.root, {[ButtonStyles.light]: isLightVariant}),
      }
    },
  }),
  Pagination: Pagination.extend({
    defaultProps: {
      nextIcon: CaretRight,
      previousIcon: CaretLeft,
    },
    classNames(theme, props, ctx) {
      return {
        root: PaginationStyles.root,
        control: PaginationStyles.control,
      }
    },
  }),
}

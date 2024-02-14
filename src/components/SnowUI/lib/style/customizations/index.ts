import type {MantineThemeComponents} from '@mantine/core'
import {Card, MultiSelect, rem, Table, Timeline} from '@mantine/core'

import AutocompleteStyles from './Autocomplete.module.scss'
import CardStyles from './Card.module.scss'
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
}

import type {MantineThemeComponents} from '@mantine/core'
import {
  ActionIcon,
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  Input,
  MultiSelect,
  Pagination,
  rem,
  Table,
  Tabs,
  Timeline,
} from '@mantine/core'
import {CaretLeft, CaretRight} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import ActionIconStyles from './ActionIcon.module.scss'
import AlertStyles from './Alert.module.scss'
import AutocompleteStyles from './Autocomplete.module.scss'
import BadgeStyles from './Badge.module.scss'
import ButtonStyles from './Button.module.scss'
import CardStyles from './Card.module.scss'
import DividerStyles from './Divider.module.scss'
import InputStyles from './Input.module.scss'
import PaginationStyles from './Pagination.module.scss'
import TableStyles from './Table.module.scss'
import TabsStyles from './Tabs.module.scss'
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
      const isDefaultVariant = props.variant === 'default'
      return {
        root: clsx(
          ButtonStyles.root,
          {[ButtonStyles.light]: isLightVariant},
          {[ButtonStyles.default]: isDefaultVariant},
        ),
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
  Tabs: Tabs.extend({
    classNames(theme, props, ctx) {
      return {
        list: TabsStyles.list,
        tab: TabsStyles.tab,
      }
    },
  }),
  Badge: Badge.extend({
    classNames(theme, props, ctx) {
      const colorClassName = clsx({
        [BadgeStyles.yellow]: props.color === 'yellow',
        [BadgeStyles.indigo]: props.color === 'indigo',
        [BadgeStyles.green]: props.color === 'green',
        [BadgeStyles.blue]: props.color === 'blue',
      })
      return {
        root: clsx(BadgeStyles.root, colorClassName),
      }
    },
  }),
  Input: Input.extend({
    classNames(theme, props, ctx) {
      return {
        input: InputStyles.root,
      }
    },
  }),
  Alert: Alert.extend({
    defaultProps: {
      radius: 'lg',
    },
    classNames(theme, props, ctx) {
      return {
        icon: AlertStyles.icon,
        message: AlertStyles.message,
        title: AlertStyles.title,
        body: AlertStyles.body,
      }
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      radius: 'lg',
    },
    classNames(theme, props, ctx) {
      const isLightVariant = props.variant === 'light'
      return {
        root: clsx(ButtonStyles.root, {
          [ActionIconStyles.light]: isLightVariant,
        }),
      }
    },
  }),
  Divider: Divider.extend({
    classNames(theme, props, ctx) {
      return {
        label: DividerStyles.label,
      }
    },
  }),
}

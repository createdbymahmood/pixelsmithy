import type {MantineThemeComponents} from '@mantine/core'
import {
  Autocomplete,
  Badge,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  Pagination,
  rem,
  Select,
  Stack,
  Switch,
  Table,
  Tabs,
  Textarea,
} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import {ArrowLeft, ArrowRight, CaretDown} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import BadgeStyles from './Badge.module.scss'
import ButtonStyles from './Button.module.scss'
import CheckboxStyles from './Checkbox.module.scss'
import DatePickerInputStyles from './DatePickerInput.module.scss'
import InputStyles from './Input.module.scss'
import InputWrapperStyles from './InputWrapper.module.scss'
import PaginationStyles from './Pagination.module.scss'
import SwitchStyles from './Switch.module.scss'
import TableStyles from './Table.module.scss'
import TabsStyles from './Tabs.module.scss'
import TextareaStyles from './Textarea.module.scss'

export const components: MantineThemeComponents = {
  Button: Button.extend({
    defaultProps: {
      radius: 'sm',
    },
    classNames(theme, props, ctx) {
      const isDefaultVariant = props.variant === 'default'

      return {
        root: clsx(ButtonStyles.root, {
          [ButtonStyles.variantDefault]: isDefaultVariant,
        }),
        section: ButtonStyles.section,
      }
    },
  }),
  InputWrapper: Input.Wrapper.extend({
    classNames(theme, props, ctx) {
      return {
        label: InputWrapperStyles.label,
      }
    },
  }),
  Input: Input.extend({
    defaultProps: {
      size: 'md',
    },
    classNames(theme, props, ctx) {
      return {
        input: InputStyles.input,
      }
    },
  }),
  Checkbox: Checkbox.extend({
    classNames(theme, props, ctx) {
      return {
        label: CheckboxStyles.label,
      }
    },
  }),
  Stack: Stack.extend({
    defaultProps: {
      gap: 'xs',
    },
  }),

  Group: Group.extend({
    defaultProps: {
      gap: 'xs',
    },
  }),
  Badge: Badge.extend({
    defaultProps: {
      radius: 'sm',
      size: 'lg',
    },
    classNames(theme, props, ctx) {
      const colorClassName = clsx({
        [BadgeStyles.yellow]: props.color === 'yellow',
        [BadgeStyles.indigo]: props.color === 'indigo',
        [BadgeStyles.green]: props.color === 'green',
        [BadgeStyles.blue]: props.color === 'blue',
        [BadgeStyles.general]: props.color === 'general',
      })
      return {
        root: clsx(BadgeStyles.root, colorClassName),
      }
    },
  }),
  Table: Table.extend({
    defaultProps: {
      verticalSpacing: rem(10),
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
  Pagination: Pagination.extend({
    defaultProps: {
      previousIcon: () => <ArrowLeft weight='bold' />,
      nextIcon: () => <ArrowRight weight='bold' />,
    },
    classNames(theme, props, ctx) {
      return {
        control: PaginationStyles.control,
      }
    },
  }),
  Switch: Switch.extend({
    classNames(theme, props, ctx) {
      return {
        root: SwitchStyles.root,
      }
    },
  }),
  Select: Select.extend({
    defaultProps: {
      rightSection: <CaretDown weight='bold' />,
      size: 'md',
    },
  }),
  Autocomplete: Autocomplete.extend({
    defaultProps: {
      rightSection: <CaretDown weight='bold' />,
      size: 'md',
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
  Card: Card.extend({
    defaultProps: {
      p: rem(28),
      radius: 'md',
    },
  }),
  Textarea: Textarea.extend({
    defaultProps: {
      size: 'md',
    },
    classNames(theme, props, ctx) {
      return {
        label: TextareaStyles.label,
      }
    },
  }),
  DatePickerInput: DatePickerInput.extend({
    defaultProps: {
      size: 'md',
      popoverProps: {
        styles: {dropdown: {padding: 'var(--mantine-spacing-xs)'}},
      },
    },
    classNames(theme, props, ctx) {
      return {
        label: DatePickerInputStyles.label,
      }
    },
  }),
}

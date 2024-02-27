import type {MantineThemeComponents} from '@mantine/core'
import {
  Badge,
  Button,
  Checkbox,
  Group,
  Input,
  Pagination,
  rem,
  Stack,
  Table,
} from '@mantine/core'
import {ArrowLeft, ArrowRight} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import BadgeStyles from './Badge.module.scss'
import ButtonStyles from './Button.module.scss'
import CheckboxStyles from './Checkbox.module.scss'
import InputStyles from './Input.module.scss'
import InputWrapperStyles from './InputWrapper.module.scss'
import PaginationStyles from './Pagination.module.scss'
import TableStyles from './Table.module.scss'

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
}
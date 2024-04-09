import type {ButtonStylesNames, MantineThemeComponents} from '@mantine/core'
import {
  Accordion,
  ActionIcon,
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Pagination,
  Paper,
  Progress,
  rem,
  Skeleton,
  Table,
  Text,
  TextInput,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import type {CSSProperties} from 'react'

import {inter} from '@/lib/styles/font/inter'

import AccordionStyles from './Accordion.module.scss'
import BadgeStyles from './Badge.module.scss'
import {buttonSizeResolver} from './button'
import ButtonStyles from './Button.module.scss'
import CheckboxStyles from './Checkbox.module.scss'
import {CONTAINER_SIZES} from './container'
import PaginationStyles from './Pagination.module.scss'
import TableStyles from './Table.module.scss'
import {displayTextResolver} from './text'

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
    vars: (theme, props) => {
      return buttonSizeResolver(props.size)
    },
    defaultProps: {
      fw: '700',
      radius: 0,
    },
    classNames(theme, props, ctx) {
      return {
        root: ButtonStyles.root,
      }
    },
    styles(theme, props, ctx) {
      if (props.variant === 'outline') {
        return {
          root: {
            fontFamily: inter.style.fontFamily,
          },
        } as Partial<Record<ButtonStylesNames, CSSProperties>>
      }

      return {}
    },
  }),
  TextInput: TextInput.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Skeleton: Skeleton.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Paper: Paper.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Progress: Progress.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Autocomplete: Autocomplete.extend({
    defaultProps: {
      rightSection: (
        <Box className='icon-size-sm' component={CaretDown} weight='bold' />
      ),
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Card: Card.extend({
    defaultProps: {
      radius: 0,
    },
  }),
  Badge: Badge.extend({
    classNames() {
      return {
        root: BadgeStyles.root,
      }
    },
  }),
  Pagination: Pagination.extend({
    classNames() {
      return {
        root: clsx(PaginationStyles.root, inter.className),
        control: clsx(PaginationStyles.control, 'borderless'),
        dots: PaginationStyles.dots,
      }
    },
  }),
  Table: Table.extend({
    defaultProps: {
      striped: 'even',
      withRowBorders: false,
      verticalSpacing: 'var(--mantine-spacing-xl)',
      horizontalSpacing: 'var(--mantine-spacing-xl)',
    },
    classNames() {
      return {
        table: TableStyles.table,
        thead: TableStyles.thead,
        th: TableStyles.th,
      }
    },
  }),
  Container: Container.extend({
    vars: (_, {fluid, size}) => {
      const containerSize = (() => {
        if (fluid) return '100%'

        if (size !== undefined && size in CONTAINER_SIZES) {
          return get(CONTAINER_SIZES, size)
        }

        return rem(size)
      })()

      return {
        root: {
          '--container-size': containerSize,
        },
      }
    },
  }),
  Accordion: Accordion.extend({
    classNames() {
      return AccordionStyles
    },
  }),
  Checkbox: Checkbox.extend({
    classNames() {
      return CheckboxStyles
    },
  }),
}

import type {ButtonStylesNames, MantineThemeComponents} from '@mantine/core'
import {
  Accordion,
  ActionIcon,
  Anchor,
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Group,
  Input,
  InputWrapper,
  Pagination,
  Paper,
  Pill,
  Progress,
  Radio,
  Rating,
  rem,
  SegmentedControl,
  Select,
  Skeleton,
  Table,
  Tabs,
  TagsInput,
  Text,
  TextInput,
} from '@mantine/core'
import {Dropzone} from '@mantine/dropzone'
import {CaretDown, Star} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import type {CSSProperties} from 'react'

import {inter} from '@/lib/styles/font/inter'

import AccordionStyles from './Accordion.module.scss'
import {actionIconSizeResolver} from './actionIcon'
import BadgeStyles from './Badge.module.scss'
import {buttonSizeResolver} from './button'
import ButtonStyles from './Button.module.scss'
import CheckboxStyles from './Checkbox.module.scss'
import {CONTAINER_SIZES} from './container'
import DropzoneStyles from './Dropzone.module.scss'
import InputStyles from './InputStyles.module.scss'
import InputWrapperStyles from './InputWrapper.module.scss'
import PaginationStyles from './Pagination.module.scss'
import RadioStyles from './Radio.module.scss'
import SegmentedControlStyles from './SegmentedControl.module.scss'
import TableStyles from './Table.module.scss'
import TabsStyles from './Tabs.module.scss'
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
  Anchor: Anchor.extend({
    defaultProps: {
      fw: '600',
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
  Select: Select.extend({
    defaultProps: {
      rightSection: (
        <Box
          c='neutrals.6'
          className='icon-size-md'
          component={CaretDown}
          weight='bold'
        />
      ),
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      radius: 0,
    },
    vars: (theme, props) => {
      return actionIconSizeResolver(props.size)
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
  Tabs: Tabs.extend({
    classNames() {
      return TabsStyles
    },
  }),

  Divider: Divider.extend({
    defaultProps: {
      color: 'secondary.0',
    },
  }),

  InputWrapper: InputWrapper.extend({
    classNames() {
      return InputWrapperStyles
    },
  }),

  Input: Input.extend({
    classNames() {
      return InputStyles
    },
  }),
  Radio: Radio.extend({
    classNames() {
      return RadioStyles
    },
  }),
  SegmentedControl: SegmentedControl.extend({
    defaultProps: {
      radius: 0,
    },
    classNames() {
      return SegmentedControlStyles
    },
  }),
  Rating: Rating.extend({
    defaultProps: {
      emptySymbol: (
        <Group>
          <Box className='icon-size-md' component={Star} weight='bold' />
        </Group>
      ),
      fullSymbol: (
        <Group>
          <Box
            c='yellow.4'
            className='icon-size-md'
            component={Star}
            weight='fill'
          />
        </Group>
      ),
    },
  }),
  TagsInput: TagsInput.extend({
    defaultProps: {
      rightSection: (
        <Box
          c='neutrals.6'
          className='icon-size-md'
          component={CaretDown}
          weight='bold'
        />
      ),
    },
  }),
  Dropzone: Dropzone.extend({
    classNames() {
      return DropzoneStyles
    },
  }),
  Pill: Pill.extend({
    defaultProps: {
      bg: 'neutrals.0',
      c: 'primary',
      radius: 0,
      size: 'lg',
    },
  }),
}

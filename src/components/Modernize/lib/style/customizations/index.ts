import type {MantineThemeComponents} from '@mantine/core'
import {Button, Checkbox, Group, Input, Stack} from '@mantine/core'
import clsx from 'clsx'

import ButtonStyles from './Button.module.scss'
import CheckboxStyles from './Checkbox.module.scss'
import InputStyles from './Input.module.scss'
import InputWrapperStyles from './InputWrapper.module.scss'

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
}

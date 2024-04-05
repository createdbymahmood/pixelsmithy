import type {ButtonStylesNames, MantineThemeComponents} from '@mantine/core'
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  Input,
  rem,
  Text,
} from '@mantine/core'
import {get} from 'lodash-es'
import type {CSSProperties} from 'react'

import {inter} from '@/lib/styles/font/inter'

import BadgeStyles from './Badge.module.scss'
import {CONTAINER_SIZES} from './container'
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
    defaultProps: {
      fw: '700',
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
  Input: Input.extend({
    defaultProps: {
      radius: 0,
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
  Container: Container.extend({
    vars: (_, {size, fluid}) => {
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
}

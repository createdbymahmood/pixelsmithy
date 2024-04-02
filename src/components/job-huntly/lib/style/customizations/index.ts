import type {MantineThemeComponents} from '@mantine/core'
import {Badge, Button, Container, Input, rem, Text} from '@mantine/core'
import {get} from 'lodash-es'

import BadgeStyles from './Badge.module.scss'
import {CONTAINER_SIZES} from './container'
import {displayTextResolver} from './text'

export const components: MantineThemeComponents = {
  Text: Text.extend({
    defaultProps: {
      lineClamp: 1,
    },
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
  }),
  Input: Input.extend({
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

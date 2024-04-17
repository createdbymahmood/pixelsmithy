import type {
  MantineComponent,
  StackCssVariables,
  StackProps,
  StackStylesNames,
} from '@mantine/core'
import {Stack as MantineStack} from '@mantine/core'
import type {HTMLAttributeAnchorTarget} from 'react'

export const StackLink = MantineStack as MantineComponent<{
  props: StackProps & {
    href?: string
    target?: HTMLAttributeAnchorTarget
  }
  ref: HTMLDivElement
  stylesNames: StackStylesNames
  vars: StackCssVariables
}>

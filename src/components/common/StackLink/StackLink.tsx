import type {
  MantineComponent,
  StackCssVariables,
  StackProps,
  StackStylesNames,
} from '@mantine/core'
import {Stack as MantineStack} from '@mantine/core'

export const StackLink = MantineStack as MantineComponent<{
  props: StackProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: StackStylesNames
  vars: StackCssVariables
}>

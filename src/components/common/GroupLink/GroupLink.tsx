import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {Group as MantineGroup} from '@mantine/core'
import type {HTMLAttributeAnchorTarget} from 'react'

export const GroupLink = MantineGroup as MantineComponent<{
  props: GroupProps & {
    href?: string
    target?: HTMLAttributeAnchorTarget
  }
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

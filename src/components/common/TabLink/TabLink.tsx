import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Tabs} from '@mantine/core'

export const TabLink = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href?: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

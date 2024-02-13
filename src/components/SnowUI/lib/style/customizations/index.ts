import type {MantineThemeComponents} from '@mantine/core'
import {MultiSelect, Timeline} from '@mantine/core'

import AutocompleteStyles from './Autocomplete.module.scss'
import TimelineStyles from './Timeline.module.scss'

export const components: MantineThemeComponents = {
  Autocomplete: MultiSelect.extend({
    classNames(theme, props, ctx) {
      return {
        root: AutocompleteStyles.root,
        input: AutocompleteStyles.input,
        dropdown: AutocompleteStyles.dropdown,
        options: AutocompleteStyles.options,
      }
    },
  }),
  Timeline: Timeline.extend({
    classNames(theme, props, ctx) {
      return {
        item: TimelineStyles.item,
        itemTitle: TimelineStyles.itemTitle,
      }
    },
  }),
}

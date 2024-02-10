import type {MantineThemeComponents} from '@mantine/core'
import {MultiSelect} from '@mantine/core'

import AutocompleteStyles from './Autocomplete.module.scss'

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
}

import {useCallbackRef} from '@mantine/hooks'
import {useSelections} from 'ahooks'
import type {ChangeEvent} from 'react'

export function useTableState<T>(items: T[], defaultSelected?: T[]) {
  const selections = useSelections<T>(items, defaultSelected)

  const onAllSelectionsChange = useCallbackRef(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        selections.selectAll()
      } else {
        selections.unSelectAll()
      }
    },
  )

  const onItemSelectionChange = useCallbackRef(
    (value: T) => (e: ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        selections.select(value)
      } else {
        selections.unSelect(value)
      }
    },
  )

  const indeterminate = !(selections.allSelected || selections.noneSelected)

  return {
    onAllSelectionsChange,
    onItemSelectionChange,
    selections,
    indeterminate,
  }
}

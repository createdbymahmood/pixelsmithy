import {Accordion, Badge, Checkbox, Group} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import type {useSelections} from 'ahooks'
import React from 'react'

import type {JobFilterCheckboxItem} from '@/components/JobLocation/components/JobFilters/components/constants'

import styles from './SelectableAccordionPanel.module.scss'

interface SelectableAccordionPanel {
  item: JobFilterCheckboxItem
  selections: ReturnType<typeof useSelections<string>>
}

export function SelectableAccordionPanel({
  item,
  selections,
}: SelectableAccordionPanel) {
  const onChange = useCallbackRef(
    ({target: {checked: isChecked}}: React.ChangeEvent<HTMLInputElement>) => {
      if (isChecked) {
        selections.select(item.label)
      } else {
        selections.unSelect(item.label)
      }
    },
  )

  const badgeColor = selections.isSelected(item.label) ? 'blue' : 'gray'

  return (
    <Accordion.Panel key={item.label} classNames={{content: styles.panel}}>
      <Group>
        <Checkbox label={item.label} onChange={onChange} />
        <Badge classNames={{root: styles.checkboxBadge}} color={badgeColor}>
          {item.count}
        </Badge>
      </Group>
    </Accordion.Panel>
  )
}

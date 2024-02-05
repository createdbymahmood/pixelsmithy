import {useSelections} from 'ahooks'

import {AccordionItem} from '@/components/JobLocation/JobFilters/components/AccordionItem'
import {seniorityLevels} from '@/components/JobLocation/JobFilters/components/constants'
import {SelectableAccordionPanel} from '@/components/JobLocation/JobFilters/components/SelectableAccordionPanel'

export const SeniorityLevel = () => {
  const selections = useSelections(seniorityLevels.map((toe) => toe.label))

  const items = seniorityLevels.map((toe) => {
    return (
      <SelectableAccordionPanel
        key={toe.label}
        item={toe}
        selections={selections}
      />
    )
  })

  return (
    <AccordionItem _key='seniorityLevel' title='Seniority Level'>
      {items}
    </AccordionItem>
  )
}

import {useSelections} from 'ahooks'

import {AccordionItem} from '@/components/JobLocation/components/JobFilters/components/AccordionItem'
import {seniorityLevels} from '@/components/JobLocation/components/JobFilters/components/constants'
import {SelectableAccordionPanel} from '@/components/JobLocation/components/JobFilters/components/SelectableAccordionPanel'

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

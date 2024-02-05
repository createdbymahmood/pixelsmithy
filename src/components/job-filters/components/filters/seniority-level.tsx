import {useSelections} from 'ahooks'

import {AccordionItem} from '@/components/job-filters/components/accordion-item'
import {seniorityLevels} from '@/components/job-filters/components/constants'
import {SelectableAccordionPanel} from '@/components/job-filters/components/selectable-accordion-panel'

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

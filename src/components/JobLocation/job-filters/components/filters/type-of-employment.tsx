import {useSelections} from 'ahooks'

import {AccordionItem} from '@/components/JobLocation/job-filters/components/accordion-item'
import {typesOfEmployment} from '@/components/JobLocation/job-filters/components/constants'
import {SelectableAccordionPanel} from '@/components/JobLocation/job-filters/components/selectable-accordion-panel'

export const TypeOfEmployment = () => {
  const selections = useSelections(typesOfEmployment.map((toe) => toe.label))

  const items = typesOfEmployment.map((toe) => {
    return (
      <SelectableAccordionPanel
        key={toe.label}
        item={toe}
        selections={selections}
      />
    )
  })

  return (
    <AccordionItem _key='typeOfEmployment' title='Type of Employment'>
      {items}
    </AccordionItem>
  )
}

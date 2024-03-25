import {useSelections} from 'ahooks'

import {AccordionItem} from '@/components/job-location/components/JobFilters/components/AccordionItem'
import {typesOfEmployment} from '@/components/job-location/components/JobFilters/components/constants'
import {SelectableAccordionPanel} from '@/components/job-location/components/JobFilters/components/SelectableAccordionPanel'

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
// import {Stack} from '@phosphor-icons/react'
import {useCallbackRef} from '@mantine/hooks'
import {useSelections} from 'ahooks'
import React from 'react'

import {Box, Stack} from '@/components/job-location/components/ui'

import type {JobFiltersCheckboxOption} from './job-filters-checkbox'
import {JobFiltersCheckbox} from './job-filters-checkbox'
import {
  SectionAccordion,
  SectionAccordionContent,
  SectionAccordionItem,
  SectionAccordionTrigger,
} from './job-filters-section-accordion'

function Sections() {
  const selections = useSelections<string>([])

  const onCheckedChange = useCallbackRef(
    (label: string) => (isChecked: boolean) => {
      if (isChecked) {
        selections.select(label)
      } else {
        selections.unSelect(label)
      }
    },
  )

  const options: JobFiltersCheckboxOption[] = [
    {
      label: 'Full Time Jobs',
      value: '159',
    },
    {
      label: 'Part Time Jobs',
      value: '38',
    },
    {
      label: 'Remote Jobs',
      value: '50',
    },
    {
      label: 'Internship Jobs',
      value: '76',
    },
    {
      label: 'Training Jobs',
      value: '15',
    },
  ]
  return (
    <SectionAccordion className='w-full' type='single' collapsible>
      <SectionAccordionItem value='item-1'>
        <SectionAccordionTrigger>Type of Employment</SectionAccordionTrigger>
        <SectionAccordionContent>
          <Stack className='w-full' direction='col' gap='md'>
            {options.map((option) => {
              return (
                <JobFiltersCheckbox
                  key={option.label}
                  isSelected={selections.isSelected(option.label)}
                  label={option.label}
                  value={option.value}
                  onCheckedChange={onCheckedChange(option.label)}
                />
              )
            })}
          </Stack>
        </SectionAccordionContent>
      </SectionAccordionItem>
    </SectionAccordion>
  )
}

export function JobFilters() {
  return (
    <Box className='mx-3 max-w-[268px]'>
      <Sections />
    </Box>
  )
}

// import {Stack} from '@phosphor-icons/react'
import {useCallbackRef} from '@mantine/hooks'
import {useSelections} from 'ahooks'
import {identity, isEmpty, isUndefined, values} from 'lodash-es'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'

import {Box, Button, Stack} from '@/components/job-location/components/ui'

import type {JobFiltersCheckboxOption} from './job-filters-checkbox'
import {JobFiltersCheckbox} from './job-filters-checkbox'
import {JobFiltersSalaryRange} from './job-filters-salary-range'
import {
  SectionAccordion,
  SectionAccordionContent,
  SectionAccordionItem,
  SectionAccordionTrigger,
} from './job-filters-section-accordion'

interface SelectableSectionContentProps {
  options?: JobFiltersCheckboxOption[]
  title: string
  children?: ReactNode
}

function SelectableSectionContent({
  children,
  options,
  title,
}: SelectableSectionContentProps) {
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

  const content = (() => {
    const hasOptions = !isEmpty(options) && !isUndefined(options)

    if (hasOptions) {
      return (
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
      )
    }

    return <Box className='py-4'>{children}</Box>
  })()

  return (
    <Fragment>
      <SectionAccordionTrigger>{title}</SectionAccordionTrigger>
      <SectionAccordionContent>{content}</SectionAccordionContent>
    </Fragment>
  )
}

function Sections() {
  const typeOfEmploymentOptions: JobFiltersCheckboxOption[] = [
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

  const seniorityLevelOptions: JobFiltersCheckboxOption[] = [
    {
      label: 'Student Level',
      value: '38',
    },
    {
      label: 'Entry Level',
      value: '50',
    },
    {
      label: 'Mid Level',
      value: '45',
    },
    {
      label: 'Senior Level',
      value: '30',
    },
    {
      label: 'Directors',
      value: '20',
    },
    {
      label: 'VP or Above',
      value: '15',
    },
  ]

  const accordionItemValues = {
    typeOfEmployment: 'type-of-employment',
    seniorityLevel: 'seniority-level',
    salaryRange: 'salary-range',
  }

  return (
    <SectionAccordion
      defaultValue={
        values(accordionItemValues).map(identity) as unknown as string[]
      }
      type='multiple'
    >
      <SectionAccordionItem value={accordionItemValues.typeOfEmployment}>
        <SelectableSectionContent
          options={typeOfEmploymentOptions}
          title='Type of Employment'
        />
      </SectionAccordionItem>

      <SectionAccordionItem value={accordionItemValues.seniorityLevel}>
        <SelectableSectionContent
          options={seniorityLevelOptions}
          title='Seniority Level'
        />
      </SectionAccordionItem>

      <SectionAccordionItem value={accordionItemValues.salaryRange}>
        <SelectableSectionContent title='Salary Range'>
          <JobFiltersSalaryRange />
        </SelectableSectionContent>
      </SectionAccordionItem>
    </SectionAccordion>
  )
}

function Actions() {
  return (
    <Stack>
      <Button>Apply</Button>
      <Button disabled>Reset</Button>
    </Stack>
  )
}

export function JobFilters() {
  return (
    <Stack
      align='start'
      className='mx-3 max-w-[268px] pb-32'
      direction='col'
      gap='md'
    >
      <Sections />
      <Actions />
    </Stack>
  )
}

import {useCallbackRef} from '@mantine/hooks'
import {useSelections} from 'ahooks'
import {identity, isEmpty, isUndefined, values} from 'lodash-es'
import {Menu} from 'lucide-react'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'

import {
  Box,
  Button,
  Group,
  Sheet,
  SheetContent,
  SheetTrigger,
  Stack,
} from '@/components/job-location/components/ui'
import {useMobileDeviceWithTailwindConfig} from '@/hooks/useMobileDeviceWithTailwindConfig'

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
        <Stack className='w-full' gap='sm'>
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

    return <Box className='pb-4 pt-2'>{children}</Box>
  })()

  return (
    <Fragment>
      <SectionAccordionTrigger>{title}</SectionAccordionTrigger>
      <SectionAccordionContent>{content}</SectionAccordionContent>
    </Fragment>
  )
}
enum AccordionItemValues {
  TypeOfEmployment = 'TypeOfEmployment',
  SeniorityLevel = 'SeniorityLevel',
  SalaryRange = 'SalaryRange',
}

function Sections() {
  const typeOfEmploymentOptions: JobFiltersCheckboxOption[] = [
    {label: 'Full Time Jobs', value: '159'},
    {label: 'Part Time Jobs', value: '38'},
    {label: 'Remote Jobs', value: '50'},
    {label: 'Internship Jobs', value: '76'},
    {label: 'Training Jobs', value: '15'},
  ]

  const seniorityLevelOptions: JobFiltersCheckboxOption[] = [
    {label: 'Student Level', value: '38'},
    {label: 'Entry Level', value: '50'},
    {label: 'Mid Level', value: '45'},
    {label: 'Senior Level', value: '30'},
    {label: 'Directors', value: '20'},
    {label: 'VP or Above', value: '15'},
  ]

  const defaultAccordionValue = values(AccordionItemValues).map(
    identity,
  ) as unknown as string[]

  return (
    <SectionAccordion defaultValue={defaultAccordionValue} type='multiple'>
      <SectionAccordionItem value={AccordionItemValues.TypeOfEmployment}>
        <SelectableSectionContent
          options={typeOfEmploymentOptions}
          title='Type of Employment'
        />
      </SectionAccordionItem>

      <SectionAccordionItem value={AccordionItemValues.SeniorityLevel}>
        <SelectableSectionContent
          options={seniorityLevelOptions}
          title='Seniority Level'
        />
      </SectionAccordionItem>

      <SectionAccordionItem value={AccordionItemValues.SalaryRange}>
        <SelectableSectionContent title='Salary Range'>
          <JobFiltersSalaryRange />
        </SelectableSectionContent>
      </SectionAccordionItem>
    </SectionAccordion>
  )
}

function Actions() {
  return (
    <Group>
      <Button>Apply</Button>
      <Button disabled>Reset</Button>
    </Group>
  )
}

function JobFiltersContent() {
  return (
    <Stack align='start' className='mx-3 w-[268px] shrink-0 ' gap='md'>
      <Sections />
      <Actions />
    </Stack>
  )
}

export function JobFilters() {
  const isMobile = useMobileDeviceWithTailwindConfig()

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='my-2 cursor-pointer' />
        </SheetTrigger>

        <SheetContent>
          <JobFiltersContent />
        </SheetContent>
      </Sheet>
    )
  }

  return <JobFiltersContent />
}

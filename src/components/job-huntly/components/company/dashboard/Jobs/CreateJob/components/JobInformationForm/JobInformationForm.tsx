import {Checkbox, Divider, Stack, TextInput} from '@mantine/core'
import React from 'react'

import {
  FormHeader,
  FormSection,
} from '@/components/job-huntly/components/common/form'

import {SalaryRangePicker} from './SalaryRangePicker'

function JobTitle() {
  return (
    <FormSection
      description='Job titles must be describe one position'
      title='Job Title'
    >
      <TextInput
        description='At least 80 characters'
        placeholder='e.g. Software Engineer'
        size='md'
      />
    </FormSection>
  )
}

function TypeOfEmployment() {
  const types = ['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract']

  const content = types.map((type) => {
    return <Checkbox key={type} label={type} />
  })

  return (
    <FormSection
      description='You can select multiple type of employment'
      title='Type of Employment'
    >
      <Stack gap='xl'>{content}</Stack>
    </FormSection>
  )
}

function Salary() {
  return (
    <FormSection
      description='Please specify the estimated salary range for the role. *You can leave this blank'
      title='Salary'
    >
      <SalaryRangePicker />
    </FormSection>
  )
}

export function JobInformationForm() {
  return (
    <Stack gap='xl'>
      <FormHeader
        description='This information will be displayed publicly'
        title='Basic Information'
      />
      <Divider />
      <JobTitle />
      <Divider />
      <TypeOfEmployment />
      <Divider />
      <Salary />
    </Stack>
  )
}

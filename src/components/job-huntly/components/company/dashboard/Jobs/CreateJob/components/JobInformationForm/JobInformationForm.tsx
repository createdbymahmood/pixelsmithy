import {
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Pill,
  Stack,
  TagsInput,
  TextInput,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
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

function Categories() {
  return (
    <FormSection
      description='You can select multiple job categories'
      title='Categories'
    >
      <TagsInput
        label='Select Job Categories'
        placeholder='Select Job Categories'
        size='md'
      />
    </FormSection>
  )
}

function RequiredSkills() {
  const skills = ['Graphic Design', 'Communication', 'Illustrator']
  const buttonLeftSection = <Box className='icon-size-md' component={Plus} />
  return (
    <FormSection
      description='Add required skills for the job'
      title='Required Skills'
    >
      <Stack align='flex-start'>
        <Button leftSection={buttonLeftSection} size='sm' variant='outline'>
          Add Skills
        </Button>

        <Group>
          {skills.map((skill) => {
            return (
              <Pill
                key={skill}
                bg='neutrals.0'
                c='primary'
                radius={0}
                size='lg'
                withRemoveButton
              >
                {skill}
              </Pill>
            )
          })}
        </Group>
      </Stack>
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
      <Divider />
      <Categories />
      <Divider />
      <RequiredSkills />
    </Stack>
  )
}

import {Divider, Stack} from '@mantine/core'
import React from 'react'

import {
  DescriptionInput,
  FormHeader,
  FormSection,
} from '@/components/job-huntly/components/common/form'

function JobDescription() {
  return (
    <FormSection
      description='Job titles must be describe one position'
      title='Job Descriptions'
    >
      <DescriptionInput />
    </FormSection>
  )
}

function Responsibilities() {
  return (
    <FormSection
      description='Outline the core responsibilities of the position'
      title='Responsibilities'
    >
      <DescriptionInput />
    </FormSection>
  )
}

function WhoYouAre() {
  return (
    <FormSection
      description='Add your preferred candidates qualifications'
      title='Who You Are'
    >
      <DescriptionInput />
    </FormSection>
  )
}

function NiceToHaves() {
  return (
    <FormSection
      description='Add your preferred candidates qualifications'
      title='Nice-To-Haves'
    >
      <DescriptionInput />
    </FormSection>
  )
}

export function JobDescriptionForm() {
  return (
    <Stack>
      <FormHeader
        description='Add the description of the job, responsibilities, who you are, and nice-to-haves.'
        title='Details'
      />
      <Divider />
      <JobDescription />
      <Divider />
      <Responsibilities />
      <Divider />
      <WhoYouAre />
      <Divider />
      <NiceToHaves />
    </Stack>
  )
}

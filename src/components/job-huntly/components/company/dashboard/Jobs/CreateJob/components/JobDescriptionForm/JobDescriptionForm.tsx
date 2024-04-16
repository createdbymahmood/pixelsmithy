import {Divider, Stack, Textarea} from '@mantine/core'
import React, {useState} from 'react'

import {
  FormHeader,
  FormSection,
} from '@/components/job-huntly/components/common/form'

function JobDescriptionInput() {
  const MAX_LENGTH = 500
  const [value, setValue] = useState('')

  return (
    <Textarea
      description={`Maximum ${MAX_LENGTH} characters`}
      // description='Salam'
      maxLength={MAX_LENGTH}
      rows={7}
      size='md'
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  )
}

function JobDescription() {
  return (
    <FormSection
      description='Job titles must be describe one position'
      title='Job Descriptions'
    >
      <JobDescriptionInput />
    </FormSection>
  )
}

function Responsibilities() {
  return (
    <FormSection
      description='Outline the core responsibilities of the position'
      title='Responsibilities'
    >
      <JobDescriptionInput />
    </FormSection>
  )
}

function WhoYouAre() {
  return (
    <FormSection
      description='Add your preferred candidates qualifications'
      title='Who You Are'
    >
      <JobDescriptionInput />
    </FormSection>
  )
}

function NiceToHaves() {
  return (
    <FormSection
      description='Add your preferred candidates qualifications'
      title='Nice-To-Haves'
    >
      <JobDescriptionInput />
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

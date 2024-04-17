import {Stack, TextInput} from '@mantine/core'
import React from 'react'

import {FormSection} from '@/components/job-huntly/components/common/form'

function FormView() {
  return (
    <FormSection
      description='Add elsewhere links to your company profile. You can add only username without full https links.'
      title='Basic Information'
    >
      <Stack gap='xl'>
        <TextInput
          label='Instagram'
          placeholder='eg: instagram.com/createdbymahmood'
          size='md'
        />
        <TextInput
          label='Facebook'
          placeholder='eg: fb.com/createdbymahmood'
          size='md'
        />
        <TextInput
          label='Twitter'
          placeholder='eg: twitter.com/madebymahmood'
          size='md'
        />
        <TextInput
          label='Linkedin'
          placeholder='eg: linkedin.com/in/createdbymahmood'
          size='md'
        />
        <TextInput
          label='Youtube'
          placeholder='eg: yt.com/createdbymahmood'
          size='md'
        />
      </Stack>
    </FormSection>
  )
}

export function SocialLinksSettings() {
  return (
    <Stack gap='xl'>
      <FormView />
    </Stack>
  )
}

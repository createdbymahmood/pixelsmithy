import {FormSection} from '@job-huntly/components/applicant/dashboard/Settings/common'
import {Button, Checkbox, Divider, rem, Stack, Text} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Stack gap='xxs'>
      <Text fw='600' size='lg'>
        Basic Information
      </Text>

      <Text c='neutrals.5'>
        This is notifications preferences that you can update anytime.
      </Text>
    </Stack>
  )
}

const options = [
  {
    label: 'Applications',
    description: 'These are notifications for jobs that you have applied to',
    defaultChecked: true,
  },
  {
    label: 'Jobs',
    description:
      'These are notifications for job openings that suit your profile',
    defaultChecked: false,
  },
  {
    label: 'Recommendations',
    description:
      'These are notifications for personalized recommendations from our recruiters',
    defaultChecked: false,
  },
]

function Notifications() {
  const checkboxes = options.map((option) => {
    const label = (
      <Stack gap='xxs'>
        <Text c='neutrals.6' fw='500'>
          {option.label}
        </Text>
        <Text>{option.description}</Text>
      </Stack>
    )

    return (
      <Checkbox
        key={option.label}
        defaultChecked={option.defaultChecked}
        label={label}
        size='md'
      />
    )
  })

  return (
    <FormSection
      description='Customize your preferred notification settings'
      title='Notifications'
    >
      <Stack align='flex-start' maw={rem(336)}>
        {checkboxes}

        <Button size='md'>Update Notifications</Button>
      </Stack>
    </FormSection>
  )
}

export function NotificationsSettings() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
      <Notifications />
    </Stack>
  )
}

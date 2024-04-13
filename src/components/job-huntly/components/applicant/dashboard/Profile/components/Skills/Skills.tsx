import {
  AddButton,
  EditButton,
  ProfileSection,
} from '@job-huntly/components/common'
import {Badge, Group} from '@mantine/core'
import React from 'react'

const skills = [
  'Communication',
  'Analytics',
  'Facebook Ads',
  'Content Planning',
  'Community Manager',
]

export function Skills() {
  const content = skills.map((skill) => {
    return (
      <Badge
        key={skill}
        bg='neutrals.0'
        color='primary'
        fw='400'
        py='md'
        radius={0}
        size='lg'
        variant='light'
      >
        {skill}
      </Badge>
    )
  })
  return (
    <ProfileSection
      action={
        <Group gap='xs'>
          <AddButton />
          <EditButton />
        </Group>
      }
      title='Skills'
    >
      <Group>{content}</Group>
    </ProfileSection>
  )
}

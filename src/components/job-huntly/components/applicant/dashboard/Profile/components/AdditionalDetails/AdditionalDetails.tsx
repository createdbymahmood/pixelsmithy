import {EditButton} from '@job-huntly/components/common'
import {Box, Group, rem, Stack, Text} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {DeviceMobile, Envelope, Translate} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {ProfileSection} from '../common'

interface Detail {
  title: string
  value: string
  icon: Icon
}

const details: Detail[] = [
  {
    title: 'Email',
    value: 'jakegyll@email.com',
    icon: Envelope,
  },
  {
    title: 'Phone',
    value: '+44 1245 572 135',
    icon: DeviceMobile,
  },
  {
    title: 'Languages',
    value: 'English, French',
    icon: Translate,
  },
]

interface DetailItemProps extends Detail {}

function DetailItem({icon, title, value}: DetailItemProps) {
  return (
    <Group align='flex-start'>
      <Box
        c='neutrals.4'
        className='icon-size-lg'
        component={icon}
        weight='bold'
      />

      <Stack gap={rem(2)}>
        <Text c='neutrals.4'>{title}</Text>
        <Text>{value}</Text>
      </Stack>
    </Group>
  )
}

export function AdditionalDetails() {
  const content = details.map((detail) => {
    return <DetailItem {...detail} key={detail.title} />
  })

  return (
    <ProfileSection action={<EditButton />} title='Additional Details'>
      <Stack>{content}</Stack>
    </ProfileSection>
  )
}

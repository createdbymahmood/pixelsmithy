import {Box, Group, rem, Stack, Text} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {DeviceMobile, Envelope, Translate} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {EditButton, ProfileSection} from '../common'

interface Details {
  key: string
  value: string
  icon: Icon
}

const details: Details[] = [
  {
    key: 'Email',
    value: 'jakegyll@email.com',
    icon: Envelope,
  },
  {
    key: 'Phone',
    value: '+44 1245 572 135',
    icon: DeviceMobile,
  },
  {
    key: 'Languages',
    value: 'English, French',
    icon: Translate,
  },
]

interface DetailItemProps extends Details {}

function DetailItem({icon, key, value}: DetailItemProps) {
  return (
    <Group align='flex-start'>
      <Box
        c='neutrals.4'
        className='icon-size-lg'
        component={icon}
        weight='bold'
      />

      <Stack gap={rem(2)}>
        <Text c='neutrals.4'>{key}</Text>
        <Text>{value}</Text>
      </Stack>
    </Group>
  )
}

export function AdditionalDetails() {
  const content = details.map((detail) => {
    return <DetailItem {...detail} key={detail.key} />
  })

  return (
    <ProfileSection action={<EditButton />} title='Additional Details'>
      <Stack>{content}</Stack>
    </ProfileSection>
  )
}

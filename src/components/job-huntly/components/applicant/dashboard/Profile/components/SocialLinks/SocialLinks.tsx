import {EditButton, ProfileSection} from '@job-huntly/components/common'
import {Anchor, Box, Group, rem, Stack, Text} from '@mantine/core'
import type {Icon} from '@phosphor-icons/react'
import {Globe, InstagramLogo, TwitterLogo} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

interface Link {
  title: string
  link: string
  icon: Icon
}

const links: Link[] = [
  {
    title: 'Instagram',
    link: 'instagram.com/jakegyll',
    icon: InstagramLogo,
  },
  {
    title: 'Phone',
    link: 'twitter.com/jakegyll',
    icon: TwitterLogo,
  },
  {
    title: 'Languages',
    link: 'jakegyll.com',
    icon: Globe,
  },
]

interface LinkItemProps extends Link {}

function LinkItem({icon, link, title}: LinkItemProps) {
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
        <Anchor fw='400' target='_blank' underline='never'>
          {link}
        </Anchor>
      </Stack>
    </Group>
  )
}

export function SocialLinks() {
  const content = links.map((detail) => {
    return <LinkItem {...detail} key={detail.title} />
  })

  return (
    <ProfileSection action={<EditButton />} title='Social Links'>
      <Stack>{content}</Stack>
    </ProfileSection>
  )
}

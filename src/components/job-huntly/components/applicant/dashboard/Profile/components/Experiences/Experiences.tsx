import {Anchor, Avatar, Group, rem, Stack, Text} from '@mantine/core'
import type {FC, SVGProps} from 'react'
import React from 'react'

import {AddButton, EditButton, ProfileSection} from '../common'
import GoDaddy from './assets/godaddy.svg'
import Twitter from './assets/twitter.svg'
import styles from './Experiences.module.scss'

interface Experience {
  id: string
  logo: FC<SVGProps<SVGElement>>
  company: string
  role: string
  type: string
  duration: string
  location: string
  description: string
}

const experiences: Experience[] = [
  {
    id: '1',
    logo: Twitter,
    company: 'Twitter',
    role: 'Product Designer',
    type: 'Full-Time',
    duration: 'Jun 2019 - Present (1y 1m)',
    location: 'Manchester, UK',
    description:
      'Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.',
  },
  {
    id: '2',
    logo: GoDaddy,
    company: 'GoDaddy',
    role: 'Growth Marketing Designer',
    type: 'Full-Time',
    duration: 'Jun 2011 - May 2019 (8y)',
    location: 'Manchester, UK',
    description:
      'Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives',
  },
]

interface ExperienceCardProps extends Experience {}

function ExperienceCard({
  company,
  description,
  duration,
  id,
  location,
  logo,
  role,
  type,
}: ExperienceCardProps) {
  return (
    <Group
      align='flex-start'
      className={styles.experience}
      gap='xl'
      pb='xl'
      wrap='nowrap'
    >
      <Avatar className='shrink-0' component={logo} h={rem(80)} w={rem(80)} />
      <Stack gap='0' w='100%'>
        <Group justify='space-between'>
          <Text fw='600' size='lg'>
            {role}
          </Text>
          <EditButton />
        </Group>

        <Group gap='xs' mt={rem(5.5)}>
          <Text fw='500'>{company}</Text>
          <Text>•</Text>
          <Text c='neutrals.5'>{type}</Text>
          <Text c='neutrals.5'>{duration}</Text>
        </Group>

        <Text c='neutrals.4' mt={rem(6.5)}>
          {location}
        </Text>

        <Text mt={rem(11)}>{description}</Text>
      </Stack>
    </Group>
  )
}

export function Experiences() {
  const content = experiences.map((experience) => {
    return <ExperienceCard key={experience.id} {...experience} />
  })

  return (
    <ProfileSection action={<AddButton />} title='Experiences'>
      <Stack gap='0'>
        {content}

        <Anchor mx='auto' underline='never'>
          Show 3 more experiences
        </Anchor>
      </Stack>
    </ProfileSection>
  )
}

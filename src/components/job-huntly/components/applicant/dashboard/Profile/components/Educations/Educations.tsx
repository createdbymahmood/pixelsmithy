import {AddButton, EditButton} from '@job-huntly/components/common'
import {Anchor, Avatar, Group, rem, Stack, Text} from '@mantine/core'
import {isEmpty} from 'lodash-es'
import type {FC, SVGProps} from 'react'
import React from 'react'

import {ProfileSection} from '../common'
import Harvard from './assets/harvard.svg'
import Toronto from './assets/toronto.svg'
import styles from './Educations.module.scss'

interface Education {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string
  university: string
  title: string
  duration: string
  description: string
  logo: FC<SVGProps<SVGElement>>
}
const educations: Education[] = [
  {
    id: '1',
    logo: Harvard,
    university: 'Harvard University',
    title: 'Postgraduate degree, Applied Psychology',
    duration: '2010 - 2012',
    description:
      'As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.',
  },
  {
    id: '2',
    logo: Toronto,
    university: 'University of Toronto',
    title: 'Bachelor of Arts, Visual Communication',
    duration: '2005 - 2009',
    description: '',
  },
]

interface EducationCardProps extends Education {}

function EducationCard({
  description,
  duration,
  logo,
  title,
  university,
}: EducationCardProps) {
  return (
    <Group
      align='flex-start'
      className={styles.education}
      gap='xl'
      pb='xl'
      wrap='nowrap'
    >
      <Avatar className='shrink-0' component={logo} h={rem(80)} w={rem(80)} />
      <Stack gap='0' w='100%'>
        <Group justify='space-between'>
          <Text fw='600' size='lg'>
            {university}
          </Text>

          <EditButton />
        </Group>

        <Text c='neutrals.4' mt={rem(6)}>
          {title}
        </Text>

        <Text c='neutrals.4' mt={rem(6)}>
          {duration}
        </Text>

        {!isEmpty(description) ? <Text mt={rem(11)}>{description}</Text> : null}
      </Stack>
    </Group>
  )
}

export function Educations() {
  const content = educations.map((education) => {
    return <EducationCard key={education.id} {...education} />
  })
  return (
    <ProfileSection action={<AddButton />} title='Educations'>
      <Stack gap='0'>
        {content}

        <Anchor mx='auto' underline='never'>
          Show 2 more educations
        </Anchor>
      </Stack>
    </ProfileSection>
  )
}

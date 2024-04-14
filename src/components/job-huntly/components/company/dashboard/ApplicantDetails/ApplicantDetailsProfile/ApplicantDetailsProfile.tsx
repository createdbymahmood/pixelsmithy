import {Badge, Divider, Group, SimpleGrid, Stack, Text} from '@mantine/core'
import type {ReactNode} from 'react'
import React, {isValidElement} from 'react'

interface ProfileInfoSectionProps {
  label: string
  value: ReactNode
}

function ProfileInfoSection({label, value}: ProfileInfoSectionProps) {
  const _value = isValidElement(value) ? (
    value
  ) : (
    <Text className='white-space-pre-line'>{value}</Text>
  )

  return (
    <Stack gap={0}>
      <Text c='neutrals.4'>{label}</Text>
      {_value}
    </Stack>
  )
}

function PersonalInfo() {
  return (
    <Stack>
      <Text fw='600' size='xl'>
        Personal Info
      </Text>

      <SimpleGrid cols={2}>
        <ProfileInfoSection label='Full Name' value='Jerome Bell' />
        <ProfileInfoSection label='Gender' value='Male' />
        <ProfileInfoSection
          label='Date of Birth'
          value='March 23, 1995 (26 y.o) '
        />
        <ProfileInfoSection label='Language' value='English, French, Bahasa' />
        <ProfileInfoSection
          label='Address'
          value='4517 Washington Ave. Manchester, Kentucky 39495'
        />
      </SimpleGrid>
    </Stack>
  )
}

function ProfessionalInfo() {
  const skills = ['Project Management', 'Copywriting', 'English'].map(
    (skill) => {
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
    },
  )
  return (
    <Stack>
      <Text fw='600' size='xl'>
        Professional Info
      </Text>

      <ProfileInfoSection
        label='About Me'
        value={`I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.\n For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.`}
      />
      <SimpleGrid cols={2}>
        <ProfileInfoSection label='Current Job' value='Product Designer' />
        <ProfileInfoSection label='Experience in Years' value='4 Years' />
        <ProfileInfoSection
          label='Highest Qualification Held'
          value='Bachelors in Engineering'
        />
        <ProfileInfoSection
          label='Skill set'
          value={<Group gap='xxs'>{skills}</Group>}
        />
      </SimpleGrid>
    </Stack>
  )
}

export function ApplicantDetailsProfile() {
  return (
    <Stack gap='xl'>
      <PersonalInfo />
      <Divider />
      <ProfessionalInfo />
    </Stack>
  )
}

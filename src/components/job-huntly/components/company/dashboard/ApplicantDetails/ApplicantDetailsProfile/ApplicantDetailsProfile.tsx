import {SimpleGrid, Stack, Text} from '@mantine/core'
import React from 'react'

interface ProfileInfoSectionProps {
  label: string
  value: string
}

function ProfileInfoSection({label, value}: ProfileInfoSectionProps) {
  return (
    <Stack gap={0}>
      <Text c='neutrals.4'>{label}</Text>
      <Text>{value}</Text>
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

// function ProfessionalInfo() {}

export function ApplicantDetailsProfile() {
  return (
    <Stack>
      <PersonalInfo />
    </Stack>
  )
}

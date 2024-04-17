'use client'

import {
  ActionIcon,
  Box,
  Button,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core'
import {Plus, Rows} from '@phosphor-icons/react'
import {SquaresFour} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {FormSection} from '@/components/job-huntly/components/common/form'
import {TeamMemberCard} from '@/components/job-huntly/components/company/dashboard/CompanyProfile'
import {team} from '@/components/job-huntly/mock/team'

function Actions() {
  return (
    <Group gap={0} ml={rem(48)}>
      <ActionIcon radius='sm' size='sm' variant='light'>
        <Box className='icon-size-lg' component={SquaresFour} weight='fill' />
      </ActionIcon>

      <ActionIcon c='neutrals.4' radius='sm' size='sm' variant='transparent'>
        <Box className='icon-size-lg' component={Rows} />
      </ActionIcon>
    </Group>
  )
}

function Header() {
  const addMemberButtonLeftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )

  return (
    <Group>
      <Title order={4}>50 Members</Title>

      <Button
        leftSection={addMemberButtonLeftSection}
        ml='auto'
        radius='sm'
        size='sm'
      >
        Add Members
      </Button>
      <Actions />
    </Group>
  )
}

function List() {
  const content = team.map((member) => {
    return <TeamMemberCard key={member.name} member={member} />
  })

  return <SimpleGrid cols={3}>{content}</SimpleGrid>
}

function FormView() {
  return (
    <FormSection
      description='Add team members of your company'
      title='Basic Information'
      fluid
    >
      <Stack gap='xl'>
        <Header />
        <List />
      </Stack>
    </FormSection>
  )
}

export function TeamSettings() {
  return (
    <Stack>
      <FormView />
    </Stack>
  )
}

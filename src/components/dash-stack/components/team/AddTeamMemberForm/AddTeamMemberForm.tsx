'use client'
import {PageHeader} from '@dash-stack/components'
import {
  Avatar,
  Button,
  Card,
  Input,
  rem,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import {Image} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function UploadPhoto() {
  return (
    <Stack align='center' gap='sm'>
      <Avatar size={rem(80)}>
        <Image />
      </Avatar>
      <Text c='primary' fw='700' size='sm'>
        Upload Photo
      </Text>
    </Stack>
  )
}

function FormView() {
  return (
    <Card p='xl'>
      <Stack align='center' gap={rem(60)}>
        <UploadPhoto />
        <SimpleGrid cols={2} spacing={rem(60)} w='100%'>
          <Input.Wrapper label='First Name' size='md'>
            <Input placeholder='Enter your first name' size='md' />
          </Input.Wrapper>

          <Input.Wrapper label='Last Name' size='md'>
            <Input placeholder='Enter your Last name' size='md' />
          </Input.Wrapper>

          <Input.Wrapper label='Email' size='md'>
            <Input
              name='email'
              placeholder='Enter your Email'
              size='md'
              type='email'
            />
          </Input.Wrapper>

          <Input.Wrapper label='Phone Number' size='md'>
            <Input placeholder='Enter your Phone number' size='md' />
          </Input.Wrapper>

          <Input.Wrapper label='Position' size='md'>
            <Input placeholder='CEO' size='md' />
          </Input.Wrapper>

          <Select
            data={['Male', 'Female']}
            defaultValue='Male'
            label='Gender'
            maw={rem(177)}
            size='md'
          />
        </SimpleGrid>

        <Button color='primary.4' radius='md' size='lg' w={rem(274)}>
          Add now
        </Button>
      </Stack>
    </Card>
  )
}

export function AddTeamMemberForm() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Add Team Member</PageHeader>
      <FormView />
    </Stack>
  )
}

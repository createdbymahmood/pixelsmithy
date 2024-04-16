'use client'

import type {MantineSize} from '@mantine/core'
import {
  Box,
  Button,
  Divider,
  Group,
  Radio,
  rem,
  Select,
  Skeleton,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import type {DropzoneProps} from '@mantine/dropzone'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {Image, Upload, X} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {FormHeader} from '@/components/job-huntly/components/common/form/FormHeader'
import {FormSection} from '@/components/job-huntly/components/common/form/FormSection'

function ProfilePhotoSettingsDropzone(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 ** 2}
      w='100%'
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      {...props}
      p={0}
    >
      <Group
        h={144}
        justify='center'
        px='sm'
        py='xl'
        style={{pointerEvents: 'none'}}
        wrap='nowrap'
      >
        <Dropzone.Accept>
          <Box c='primary.6' component={Upload} h={rem(52)} w={rem(52)} />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <Box c='red.6' component={X} h={rem(52)} w={rem(52)} />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <Stack align='center' gap='xxs'>
            <Box c='primary' className='icon-size-xl' component={Image} />

            <Group gap='xxs' justify='center' mt='xs'>
              <Text c='primary' fw='500'>
                Click to replace
              </Text>
              <Text>or drag and drop</Text>
            </Group>

            <Text c='dimmed' ta='center'>
              SVG, PNG, JPG or GIF (max. 400 x 400px)
            </Text>
          </Stack>
        </Dropzone.Idle>
      </Group>
    </Dropzone>
  )
}

function ProfilePhotoSettings() {
  return (
    <FormSection
      description='This image will be shown publicly as your profile picture, it will help recruiters recognize you!'
      title='Profile Photo'
    >
      <Group gap='xxxl' wrap='nowrap'>
        <Skeleton className='shrink-0' h={rem(124)} w={rem(124)} circle />

        <Box w={rem(383)}>
          <ProfilePhotoSettingsDropzone />
        </Box>
      </Group>
    </FormSection>
  )
}

function PersonalDetailsSettings() {
  const defaultInputProps = {
    size: 'md' as MantineSize,
    withAsterisk: true,
    w: '100%',
  }

  return (
    <FormSection title='Personal Details'>
      <Stack gap='xl'>
        <TextInput
          defaultValue='Jake Gyll'
          label='Full Name'
          {...defaultInputProps}
        />
        <Group wrap='nowrap'>
          <TextInput
            defaultValue='+44 1245 572 135'
            label='Phone Number'
            {...defaultInputProps}
          />
          <TextInput
            defaultValue='Jakegyll@gmail.com'
            label='Email'
            name='email'
            type='email'
            {...defaultInputProps}
          />
        </Group>

        <Group wrap='nowrap'>
          <DatePickerInput
            defaultValue={new Date('09-08-1997')}
            label='Date of Birth'
            valueFormat='DD/MM/YYYY'
            {...defaultInputProps}
          />

          <Select
            data={['Male', 'Female']}
            defaultValue='Male'
            label='Gender'
            name='email'
            type='email'
            {...defaultInputProps}
          />
        </Group>
      </Stack>
    </FormSection>
  )
}

function AccountTypeSettings() {
  const jobSeekerLabel = (
    <Stack gap={0}>
      <Text fw='500'>Job Seeker</Text>
      <Text c='neutrals.5'>Looking for a job</Text>
    </Stack>
  )

  const employerLabel = (
    <Stack gap={0}>
      <Text fw='500'>Employer</Text>
      <Text c='neutrals.5'>Hiring, sourcing candidates, or posting a jobs</Text>
    </Stack>
  )

  return (
    <FormSection
      description='You can update your account type'
      title='Account Type'
    >
      <Radio.Group
        defaultValue='jobSeeker'
        name='favoriteFramework'
        withAsterisk
      >
        <Stack mt='xs'>
          <Radio label={jobSeekerLabel} value='jobSeeker' variant='outline' />
          <Radio label={employerLabel} value='employer' variant='outline' />
        </Stack>
      </Radio.Group>
    </FormSection>
  )
}

function Footer() {
  return (
    <Group justify='flex-end'>
      <Button size='md'>Save Profile</Button>
    </Group>
  )
}

function Header() {
  return (
    <FormHeader
      description='This is your personal information that you can update anytime.'
      title='Basic Information'
    />
  )
}

export function ProfileSettings() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
      <ProfilePhotoSettings />
      <Divider />
      <PersonalDetailsSettings />
      <Divider />
      <AccountTypeSettings />
      <Divider />
      <Footer />
    </Stack>
  )
}

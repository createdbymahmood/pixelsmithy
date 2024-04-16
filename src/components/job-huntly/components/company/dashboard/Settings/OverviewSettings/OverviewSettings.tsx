'use client'
import '@/utils/date-plugins'

import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  InputLabel,
  rem,
  Select,
  Stack,
  TagsInput,
  Text,
  TextInput,
} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {Upload, X} from '@phosphor-icons/react'
import {Image} from '@phosphor-icons/react/dist/ssr'
import dayJS from 'dayjs'
import {head, range} from 'lodash-es'
import React from 'react'

import {
  DescriptionInput,
  FormHeader,
  FormSection,
} from '@/components/job-huntly/components/common/form'
import {companies} from '@/components/job-huntly/mock/companies'

const company = head(companies)!

function Header() {
  return (
    <FormHeader
      description='This is company information that you can update anytime.'
      title='Basic Information'
    />
  )
}

function CompanyLogoDropzone() {
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 ** 2}
      p={0}
      w='100%'
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
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

function CompanyLogo() {
  return (
    <FormSection
      description='This image will be shown publicly as company logo.'
      title='Company Logo'
    >
      <Group align='flex-start' gap='xxxl' wrap='nowrap'>
        <Avatar component={company.logo} radius={0} size={rem(124)} />
        <CompanyLogoDropzone />
      </Group>
    </FormSection>
  )
}

function CompanyDetails() {
  return (
    <FormSection
      description='Introduce your company core info quickly to users by fill up company details'
      title='Company Details'
    >
      <Stack gap='xl'>
        <TextInput defaultValue={company.name} label='Company Name' size='md' />
        <TextInput label='Website' placeholder='eg: Google.com' size='md' />
        <TagsInput
          defaultValue={['England', 'Japan', 'Australia']}
          label='Location'
          size='md'
        />
        <Group wrap='nowrap'>
          <Select
            data={['0 - 50', '51 - 200']}
            defaultValue='0 - 50'
            label='Employee'
            size='md'
            w='100%'
          />
          <Select
            data={['Technology']}
            defaultValue='Technology'
            label='Industry'
            size='md'
            w='100%'
          />
        </Group>

        <Stack gap='xxs' justify='flex-end'>
          <InputLabel size='md'>Date Founded</InputLabel>

          <Group wrap='nowrap'>
            <Autocomplete
              data={range(1, 32).map((idx) => String(idx))}
              defaultValue='10'
              size='md'
              w='100%'
            />
            <Autocomplete
              data={dayJS.months()}
              defaultValue='January'
              size='md'
              w='100%'
            />
            <Autocomplete
              data={range(1970, dayJS().year()).map((idx) => String(idx))}
              defaultValue='1980'
              size='md'
              w='100%'
            />
          </Group>
        </Stack>

        <TagsInput
          defaultValue={['HTML 5', 'CSS 3', 'JavaScript']}
          label='Tech Stack'
          size='md'
        />
      </Stack>
    </FormSection>
  )
}

function AboutCompany() {
  return (
    <FormSection
      description='Brief description for your company. URLs are hyperlinked.'
      title='About Company'
    >
      <DescriptionInput defaultValue='Nomad is part of the Information Technology Industry. We believe travellers want to experience real life and meet local people. Nomad has 30 total employees across all of its locations and generates $1.50 million in sales.' />
    </FormSection>
  )
}

function Action() {
  return (
    <Button ml='auto' size='lg'>
      Save Changes
    </Button>
  )
}

export function OverviewSettings() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
      <CompanyLogo />
      <Divider />
      <CompanyDetails />
      <Divider />
      <AboutCompany />
      <Divider />
      <Action />
    </Stack>
  )
}

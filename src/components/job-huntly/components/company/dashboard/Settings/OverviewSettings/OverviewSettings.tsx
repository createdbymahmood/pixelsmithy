'use client'

import {Avatar, Box, Divider, Group, rem, Stack, Text} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {Upload, X} from '@phosphor-icons/react'
import {Image} from '@phosphor-icons/react/dist/ssr'
import {head} from 'lodash-es'
import React from 'react'

import {
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
      <Group align='flex-start' wrap='nowrap'>
        <Avatar component={company.logo} radius={0} size={rem(124)} />
        <CompanyLogoDropzone />
      </Group>
    </FormSection>
  )
}

export function OverviewSettings() {
  return (
    <Stack>
      <Header />
      <Divider />
      <CompanyLogo />
      <Divider />
    </Stack>
  )
}

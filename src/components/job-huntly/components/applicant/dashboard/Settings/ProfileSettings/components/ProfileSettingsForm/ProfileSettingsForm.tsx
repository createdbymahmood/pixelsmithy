'use client'

import {
  Box,
  Divider,
  Grid,
  Group,
  rem,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import type {DropzoneProps} from '@mantine/dropzone'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {Image, Upload, X} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './ProfileSettingsForm.module.scss'

function Header() {
  return (
    <Stack gap='xxs'>
      <Text fw='600' size='lg'>
        Basic Information
      </Text>
      <Text c='neutrals.5'>
        This is your personal information that you can update anytime.
      </Text>
    </Stack>
  )
}

interface FormSectionProps {
  children: ReactNode
  title: string
  description: string
}

function FormSection({children, description, title}: FormSectionProps) {
  return (
    <Grid>
      <Grid.Col span={{xl: 3, lg: 4, md: 12}}>
        <Stack>
          <Text fw='600'>{title}</Text>
          <Text c='neutrals.5'>{description}</Text>
        </Stack>
      </Grid.Col>

      <Grid.Col
        className={styles.formSectionChildrenCol}
        span={{xl: 9, lg: 8, md: 12}}
      >
        {children}
      </Grid.Col>
    </Grid>
  )
}

function ProfilePhotoSettingsDropzone(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      className={styles.profileImageDropzone}
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

            <Group gap='xxs' mt='xs'>
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

export function ProfileSettingsForm() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
      <ProfilePhotoSettings />
    </Stack>
  )
}

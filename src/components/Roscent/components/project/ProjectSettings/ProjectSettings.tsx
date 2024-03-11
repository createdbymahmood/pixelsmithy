'use client'

import {
  Card,
  Checkbox,
  Group,
  rem,
  Select,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import {DateInput} from '@mantine/dates'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {CalendarBlank, UploadSimple} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import dayJS from 'dayjs'
import {useState} from 'react'

import {SettingsCard} from '@/components/Roscent'
import {SaveFloatingActionButons} from '@/components/Roscent/components/project/components'

import styles from './ProjectSettings.module.scss'

function LogoUpload() {
  return (
    <Dropzone
      accept={IMAGE_MIME_TYPE}
      className={styles.dropzone}
      maxSize={5 * 1024 ** 2}
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
    >
      <Card style={{pointerEvents: 'none'}}>
        <Group>
          <Dropzone.Idle>
            <Group className={styles.logoUploadIconWrapper} justify='center'>
              <UploadSimple className={styles.logoUploadIcon} />
            </Group>
          </Dropzone.Idle>

          <Stack gap={rem(5)}>
            <Title order={5} size='xl'>
              Roscent
            </Title>

            <Text c='dimmed' mt={rem(7)} size='sm' inline>
              Click upload Logo, allowed file types: png, jpg, jpeg.
            </Text>
          </Stack>
        </Group>
      </Card>
    </Dropzone>
  )
}

function NameSettings() {
  return <SettingsCard title='Project Name'>Roscent</SettingsCard>
}

function ProjectTypeSettings() {
  return (
    <SettingsCard title='Project Type'>
      <Select
        classNames={{input: styles.input}}
        data={['UI Kit', 'SDK', 'Marketing', 'Business Consultant']}
        placeholder='Pick value'
        value='UI Kit'
      />
    </SettingsCard>
  )
}

function ProjectDescriptionSettings() {
  return (
    <SettingsCard title='Project Description'>
      Roscent is a design system and UI Kit created with Figma. All of the
      products here use the Roscent Library as the main component library.
    </SettingsCard>
  )
}

function DueDateSettings() {
  const today = dayJS().toDate()
  const [value, setValue] = useState<Date | null>(today)
  return (
    <SettingsCard title='Due Date'>
      <DateInput
        classNames={{input: styles.input}}
        leftSection={
          <CalendarBlank
            className={clsx(styles.dateInputIcon, 'icon-size-md')}
          />
        }
        placeholder='Date input'
        value={value}
        valueFormat='MMM D, YYYY'
        onChange={setValue}
      />
    </SettingsCard>
  )
}

function NotificationsSettings() {
  return (
    <SettingsCard title='Notifications'>
      <Group gap='lg'>
        <Checkbox label='Email' defaultChecked />
        <Checkbox label='Phone' />
      </Group>
    </SettingsCard>
  )
}

function StatusSettings() {
  const [checked, setChecked] = useState(true)

  const label = checked ? 'Active' : 'Inactive'
  return (
    <SettingsCard title='Allow Changes'>
      <Switch
        checked={checked}
        label={label}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    </SettingsCard>
  )
}

function Settings() {
  return (
    <Card>
      <Stack>
        <Title order={5}>More Settings</Title>
        <NameSettings />
        <ProjectTypeSettings />
        <ProjectDescriptionSettings />
        <DueDateSettings />
        <NotificationsSettings />
        <StatusSettings />
        <SaveFloatingActionButons />
      </Stack>
    </Card>
  )
}

export function ProjectSettings() {
  return (
    <Stack>
      <LogoUpload />
      <Settings />
    </Stack>
  )
}

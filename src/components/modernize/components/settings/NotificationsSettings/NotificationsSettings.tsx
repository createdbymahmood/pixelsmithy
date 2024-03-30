import {
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Switch,
  Text,
} from '@mantine/core'
import React from 'react'

interface SettingSectionProps {
  title: string
  description: string
  defaultChecked: boolean
}

function SettingSection({
  defaultChecked,
  description,
  title,
}: SettingSectionProps) {
  return (
    <Group>
      <Stack gap={rem(4)}>
        <Text fw='bold'>{title}</Text>
        <Text c='general.5' size='sm'>
          {description}
        </Text>
      </Stack>

      <Switch defaultChecked={defaultChecked} ml='auto' />
    </Group>
  )
}

function Actions() {
  return (
    <Group ml='auto'>
      <Button ml='auto' variant='default'>
        Cancel
      </Button>
      <Button>Save</Button>
    </Group>
  )
}

export function NotificaitonsSettings() {
  return (
    <Stack gap={rem(30)}>
      <Card>
        <Stack gap={rem(24)}>
          <SettingSection
            description='Receive offers made special for you'
            title='Personalized Offers'
            defaultChecked
          />
          <Divider />
          <SettingSection
            description='Get notified about upcoming webinars'
            title='Online Webinars'
            defaultChecked
          />
          <Divider />
          <SettingSection
            description='Updates about new features and product releases'
            title='New Features'
            defaultChecked
          />
          <Divider />
          <SettingSection
            description='Account security and notifications about billing'
            title='Security and Billing'
            defaultChecked
          />
          <Divider />
          <SettingSection
            defaultChecked={false}
            description='Receive marketing newsletters about our new products.'
            title='Marketing'
          />
        </Stack>
      </Card>
      <Divider />
      <Actions />
    </Stack>
  )
}

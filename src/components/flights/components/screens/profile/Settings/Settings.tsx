import {Box, Card, Group, rem, Stack, Switch, Text} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  Airplane,
  GlobeHemisphereEast,
  Notification,
} from '@phosphor-icons/react/dist/ssr'
import type {FC, ReactNode} from 'react'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {BottomNavigation} from '@/components/flights/components/screens/general/components'

interface SettingsSectionProps {
  title: string
  icon: FC<IconProps>
  rightSection?: ReactNode
}

function SettingsSection({icon, rightSection, title}: SettingsSectionProps) {
  return (
    <Card bg='gray.1' p='sm' radius='md'>
      <Group>
        <Box c='primary' className='icon-size-lg' component={icon} />
        <Text size='sm'>{title}</Text>
        <Box ml='auto'>{rightSection}</Box>
      </Group>
    </Card>
  )
}

function LanguageSettings() {
  return (
    <SettingsSection
      icon={GlobeHemisphereEast}
      rightSection={
        <Text c='gray.6' size='xs'>
          English
        </Text>
      }
      title='Application language'
    />
  )
}

function PushNotificationsSettings() {
  return (
    <SettingsSection
      icon={Notification}
      rightSection={<Switch defaultChecked />}
      title='Push notifications'
    />
  )
}

function AboutUs() {
  return <SettingsSection icon={Airplane} title='About us' />
}

export function Settings() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <LanguageSettings />
        <PushNotificationsSettings />
        <AboutUs />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

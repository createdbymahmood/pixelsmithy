import {
  Avatar,
  Box,
  Card,
  Group,
  Indicator,
  Pill,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {PencilSimple} from '@phosphor-icons/react'
import {
  BellSimple,
  ChatCenteredDots,
  CreditCard,
  Gear,
  Ticket,
  XCircle,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {BottomNavigation} from '@/components/flights/components/screens/general/components'

import styles from './Profile.module.scss'

function ProfileImageView() {
  const editButton = (
    <Card className='cursor-pointer' p='xxs' shadow='lg' variant='default'>
      <PencilSimple className='icon-size-md' weight='fill' />
    </Card>
  )

  return (
    <Stack>
      <Indicator
        color='transparent'
        label={editButton}
        offset={7}
        position='bottom-end'
        size={16}
        inline
      >
        <Avatar
          size={rem(100)}
          src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png'
        />
      </Indicator>
    </Stack>
  )
}

function Overview() {
  return (
    <Card
      bg='white'
      className={clsx(styles.overview, 'shrink-0')}
      h={320}
      pt={rem(63)}
    >
      <Stack align='center' justify='center'>
        <ProfileImageView />
        <Stack align='center' gap='xxs'>
          <Text fw='600' size='xs' variant='display'>
            David
          </Text>
          <Text c='gray.6' fw='500' size='sm'>
            +1 555 555 55 55
          </Text>
        </Stack>
      </Stack>
    </Card>
  )
}

interface Section {
  icon: React.FC<IconProps>
  title: string
  unread?: number
}

interface SectionGroupProps {
  sections: Section[]
}

function SectionGroup({sections}: SectionGroupProps) {
  const content = sections.map((section) => {
    return (
      <Group key={section.title} p='sm'>
        <Box c='primary' className='icon-size-lg' component={section.icon} />
        <Text size='sm'>{section.title}</Text>
        {section.unread ? (
          <Pill bg='error.5' c='white' fw='500' ml='auto' px='sm' size='xs'>
            {section.unread}
          </Pill>
        ) : null}
      </Group>
    )
  })
  return (
    <Card bg='gray.1' className='cursor-pointer' p={0} radius='md'>
      {content}
    </Card>
  )
}

function Sections() {
  return (
    <Card className={styles.sections} h='100%'>
      <Stack gap='md'>
        <SectionGroup
          sections={[
            {
              icon: BellSimple,
              title: 'Notifications',
            },
          ]}
        />

        <SectionGroup
          sections={[
            {
              icon: Ticket,
              title: 'My tickets',
            },
            {
              icon: CreditCard,
              title: 'My cards',
              unread: 1,
            },
          ]}
        />

        <SectionGroup
          sections={[
            {
              icon: ChatCenteredDots,
              title: 'Customer service',
            },
            {
              icon: Gear,
              title: 'Settings',
            },
          ]}
        />

        <SectionGroup
          sections={[
            {
              icon: XCircle,
              title: 'Logout',
            },
          ]}
        />
      </Stack>
    </Card>
  )
}

export function Profile() {
  return (
    <IOSScreen bg='gray.2' homeIndicatorBg='white' variant='dark'>
      <Stack flex={1} gap='md' h='100%'>
        <Overview />
        <Sections />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

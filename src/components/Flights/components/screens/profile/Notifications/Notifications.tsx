import type {MantineColor} from '@mantine/core'
import {Avatar, Box, Card, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  AirplaneTilt,
  CircleNotch,
  HandsClapping,
  Wind,
} from '@phosphor-icons/react/dist/ssr'
import {entries, groupBy} from 'lodash-es'
import type {FC} from 'react'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/flights/components/common'
import {BottomNavigation} from '@/components/flights/components/screens/general/components'

interface NotificationType {
  date: string
  title: string
  description: string
  icon: FC<IconProps>
  color: MantineColor
}

function Notification({
  date,
  description,
  title,
  color,
  icon: Icon,
}: NotificationType) {
  return (
    <Card p={0} radius='md'>
      <Group bg='gray.1' p='sm'>
        <Avatar bg={color} c='white' radius='md' size={rem(46)}>
          <Box c='white' className='icon-size-lg' component={Icon} />
        </Avatar>

        <Stack gap='xxs'>
          <Text fw='500' size='md'>
            {title}
          </Text>
          <Text c='gray.6' size='xs'>
            {description}
          </Text>
        </Stack>
      </Group>
    </Card>
  )
}

const notifications: NotificationType[] = [
  {
    date: 'Today',
    title: 'Air tour has been processed',
    description: 'Airfield: Bychye Polye, July 30th',
    color: 'purple.3',
    icon: AirplaneTilt,
  },
  {
    date: 'November 16, 2021',
    title: 'Refund issued',
    description: 'Airfield: Bychye Polye, November 16',
    color: 'mint.4',
    icon: CircleNotch,
  },
  {
    date: 'November 16, 2021',
    title: 'Flight for November 16 canceled',
    description: 'Inclement weather',
    color: 'blue-light.3',
    icon: Wind,
  },
  {
    date: 'November 14, 2021',
    title: 'Air tour has been processed',
    description: 'Airfield: Bychye Polye, November 16',
    color: 'purple.3',
    icon: AirplaneTilt,
  },
  {
    date: 'November 14, 2021',
    title: 'Welcome to Flights 🛩',
    description: 'Enjoy your flights and have a great experience!',
    color: 'pink.4',
    icon: HandsClapping,
  },
]

function NotificationsList() {
  const content = entries(groupBy(notifications, (n) => n.date)).map(
    ([date, _notifications]) => {
      return (
        <Stack key={date}>
          <Text c='gray.6' size='sm'>
            {date}
          </Text>
          {_notifications.map((notification) => {
            return <Notification {...notification} key={notification.title} />
          })}
        </Stack>
      )
    },
  )
  return <Stack gap='xxxl'>{content}</Stack>
}

export function Notifications() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='Notifications' />
        <NotificationsList />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

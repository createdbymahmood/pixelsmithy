import {Card, Group, Pill, rem, Stack, Text} from '@mantine/core'
import {entries, groupBy} from 'lodash-es'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScreenHeader} from '@/components/Flights/components/common'
import {BottomNavigation} from '@/components/Flights/components/screens/general/components'

interface Ticket {
  date: string
  title: string
  description: string
  airfield: string
  price: string
}

function TicketCard({airfield, date, description, price, title}: Ticket) {
  return (
    <Card p={0} radius='md'>
      <Stack bg='gray.1' gap='md' justify='space-between' p='sm'>
        <Group justify='space-between'>
          <Text fw='500' size='md'>
            {title}
          </Text>
          <Pill bg='primary' c='white' fw='500' size='md'>
            {price}
          </Pill>
        </Group>
        <Text size='sm'>{description}</Text>
        <Text c='gray.6' size='sm'>
          {airfield}
        </Text>
      </Stack>
    </Card>
  )
}

const tickets: Ticket[] = [
  {
    date: 'Today',
    title: '673-843',
    description: 'Cessna 172 familiarization flight from Kronstadt',
    airfield: 'Airfield: Bychye Polye, July 30th',
    price: '10 000 ₽',
  },
]

function TicketsList() {
  const content = entries(groupBy(tickets, (n) => n.date)).map(
    ([date, _tickets]) => {
      return (
        <Stack key={date}>
          <Text c='gray.6' size='sm'>
            {date}
          </Text>
          {_tickets.map((ticket) => {
            return <TicketCard {...ticket} key={ticket.title} />
          })}
        </Stack>
      )
    },
  )
  return <Stack gap='xxxl'>{content}</Stack>
}

export function Tickets() {
  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='My tickets' />
        <TicketsList />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

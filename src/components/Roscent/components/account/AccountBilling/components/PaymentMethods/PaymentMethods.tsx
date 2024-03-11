import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import type {Dayjs} from 'dayjs'
import dayjs from 'dayjs'
import {head} from 'lodash-es'
import {Fragment} from 'react'

import styles from './PaymentMethods.module.scss'

const tabs = [
  {
    title: 'Credit / Debit Card',
    element: <CreditCards />,
  },
  {
    title: 'Paypal',
    element: <CreditCards />,
  },
]

const cards = [
  {
    name: 'ByeWind',
    number: '9656-6598-1236-4698',
    exp: dayjs().set('month', 5).set('year', 2025),
    isActive: true,
  },
  {
    name: 'ByeWind',
    number: '1235-6321-1343-7542',
    exp: dayjs().set('month', 5).set('year', 2025),
    isActive: false,
  },
  {
    name: 'ByeWind',
    number: '6712-1265-1843-2156',
    exp: dayjs().set('month', 5).set('year', 2025),
    isActive: false,
  },
]

function CreditCards() {
  const content = cards.map((card) => {
    return <CreditCard {...card} key={card.number} />
  })
  return <SimpleGrid cols={3}>{content}</SimpleGrid>
}

interface CreditCardProps {
  name: string
  number: string
  exp: Dayjs
  isActive: boolean
}

function CreditCard({exp, name, number, isActive}: CreditCardProps) {
  const activeBadge = isActive && <Badge color='green'>Active</Badge>
  return (
    <Card bg='gray.2' p='md' radius='md'>
      <Stack>
        <Group>
          <Title order={5}>{name}</Title>
          {activeBadge}

          <Button ml='auto' size='xs' variant='light'>
            Edit
          </Button>

          <Group gap='xs'>
            {number.split('-').map((chunk) => {
              return (
                <Title key={chunk} order={5}>
                  {chunk}
                </Title>
              )
            })}
          </Group>
        </Group>

        <Group justify='space-between'>
          <Text c='dimmed' size='sm'>
            Exp {exp.format('MM/YY')}
          </Text>
          <Avatar size={rem(40)} />
        </Group>
      </Stack>
    </Card>
  )
}

function Header() {
  const tabsList = tabs.map((tab) => {
    return (
      <Tabs.Tab key={tab.title} size='xs' value={tab.title}>
        {tab.title}
      </Tabs.Tab>
    )
  })

  return (
    <Group>
      <Title order={5}>Payment Methods</Title>
      <Tabs.List ml='auto'>{tabsList}</Tabs.List>
    </Group>
  )
}

function Body() {
  return (
    <Fragment>
      {tabs.map((tab) => {
        return (
          <Tabs.Panel key={tab.title} value={tab.title}>
            <Stack>{tab.element}</Stack>
          </Tabs.Panel>
        )
      })}
    </Fragment>
  )
}

function AddCard() {
  return (
    <Stack className={styles.addCard} p='md' radioGroup='xl'>
      <Group gap='xs'>
        <Plus className='icon-size-sm' />
        <Text size='sm'>Add Card</Text>
      </Group>
    </Stack>
  )
}

const defaultActiveTab = head(tabs)!

export function PaymentMethods() {
  return (
    <Card>
      <Stack>
        <Tabs
          classNames={{tab: styles.tab, list: styles.list}}
          defaultValue={defaultActiveTab.title}
        >
          <Stack>
            <Header />
            <Body />
          </Stack>
        </Tabs>
        <AddCard />
      </Stack>
    </Card>
  )
}

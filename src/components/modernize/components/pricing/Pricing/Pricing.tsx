'use client'

import {
  Accordion,
  Badge,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {CheckCircle, MinusCircle} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import styles from './Pricing.module.scss'

function Header() {
  return <Title order={5}>Choose a Plan</Title>
}

interface PlanFeature {
  title: string
  active: boolean
}

type PricingType = 'annually' | 'monthly'

interface PlanType {
  title: string
  description: string
  features: PlanFeature[]
  pricing: {amount: number; type: PricingType}
  isRecommended: boolean
}

const plans: PlanType[] = [
  {
    title: 'Basic Plan',
    description: 'Start your business',

    features: [
      {title: 'Free Domain', active: true},
      {title: 'Google Ads Credit', active: true},
      {title: 'Up to 5 Users', active: true},
      {title: 'Free SSL Security', active: true},
      {title: 'Up to 100 Products', active: true},
      {title: 'Chat Inbox', active: false},
      {title: 'Unlimited Storage', active: false},
      {title: 'No Transaction Fee', active: false},
    ],

    pricing: {amount: 12, type: 'monthly'},
    isRecommended: false,
  },
  {
    title: 'Professional',
    description: 'Start your business',

    features: [
      {title: 'Free Domain', active: true},
      {title: 'Google Ads Credit', active: true},
      {title: 'Up to 5 Users', active: true},
      {title: 'Free SSL Security', active: true},
      {title: 'Up to 100 Products', active: true},
      {title: 'Chat Inbox', active: true},
      {title: 'Unlimited Storage', active: false},
      {title: 'No Transaction Fee', active: false},
    ],

    pricing: {amount: 20, type: 'monthly'},
    isRecommended: true,
  },
  {
    title: 'Business',
    description: 'Start your business',

    features: [
      {title: 'Free Domain', active: true},
      {title: 'Google Ads Credit', active: true},
      {title: 'Up to 5 Users', active: true},
      {title: 'Free SSL Security', active: true},
      {title: 'Up to 100 Products', active: true},
      {title: 'Chat Inbox', active: true},
      {title: 'Unlimited Storage', active: true},
      {title: 'No Transaction Fee', active: true},
    ],

    pricing: {amount: 45, type: 'monthly'},
    isRecommended: false,
  },
]

interface PlanProps extends PlanType {}

function Plan({
  description,
  features,
  isRecommended,
  pricing,
  title,
}: PlanProps) {
  const pricingType = pricing.type === 'annually' ? 'year' : 'month'

  const featuresList = features.map((feature) => {
    const icon = feature.active ? (
      <CheckCircle
        className='icon-size-md'
        style={{color: 'var(--mantine-color-green-6)'}}
        weight='bold'
      />
    ) : (
      <MinusCircle
        className='icon-size-md'
        style={{color: 'var(--mantine-color-general-5)'}}
        weight='bold'
      />
    )

    return (
      <Group key={feature.title} gap={rem(12)}>
        {icon}
        <Text c={feature.active ? 'black' : 'general.5'}>{feature.title}</Text>
      </Group>
    )
  })

  return (
    <Stack className={styles.plan} gap={0} p={rem(28)} pos='relative' w='100%'>
      {isRecommended ? (
        <Badge
          left='50%'
          pos='absolute'
          radius='sm'
          style={{transform: 'translate(-50%, -10%)'}}
          top={-10}
        >
          Recommended
        </Badge>
      ) : null}
      <Group gap={rem(8)}>
        <Title order={4}>${pricing.amount}</Title>
        <Text>/{pricingType}</Text>
      </Group>

      <Stack gap={rem(8)} mt={rem(20)}>
        <Title order={6}>{title}</Title>
        <Text c='general.5'>{description}</Text>
      </Stack>

      <Divider mt={rem(28)} />
      <Stack gap={rem(12)} mt={rem(28)}>
        {featuresList}
      </Stack>
      <Button mt={28} variant={isRecommended ? 'filled' : 'default'}>
        Select Plan
      </Button>
    </Stack>
  )
}

function Plans() {
  const content = plans.map((plan) => {
    return <Plan {...plan} key={plan.title} />
  })
  return (
    <Card px={rem(28)} py={rem(40)}>
      <Stack align='center'>
        <Title order={6}>Pricing Plans</Title>
        <Text
          c='general.5'
          className='white-space-pre-line'
          ta='center'
        >{`Familiarize yourself with the payment plans below.\nPick best pracing plan to fit your needs.`}</Text>
      </Stack>
      <Group gap={rem(24)} mt={rem(40)} wrap='nowrap'>
        {content}
      </Group>

      <Text c='general.5' mt={rem(28)} ta='center'>
        Cancel or upgrade your plan anytime
      </Text>
    </Card>
  )
}

const groceries = [
  {
    value: 'Is there any discount for yearly subscription?',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
  },
  {
    value: 'Can I change my current plan?',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
  },
  {
    value: 'How do I cancel a subscription??',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
  },
  {
    value: 'How to purchase a domain?',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
  },
]

function Faq() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ))
  return (
    <Card>
      <Stack gap={rem(28)}>
        <Title order={6}>Frequently Asked Questions</Title>
        <Accordion defaultValue='Apples'>{items}</Accordion>
      </Stack>
    </Card>
  )
}

export function Pricing() {
  return (
    <Stack gap={rem(30)} pb='sm'>
      <Header />
      <Plans />
      <Faq />
    </Stack>
  )
}

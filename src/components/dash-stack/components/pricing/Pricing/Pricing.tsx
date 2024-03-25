import {
  Anchor,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

import {PageHeader} from '@/components/dash-stack/components'

interface PricingFeature {
  enabled: boolean
  title: string
}

interface Pricing {
  title: string
  chargeType: string
  price: string
  features: PricingFeature[]
  isRecommended: boolean
}

const pricings: Pricing[] = [
  {
    title: 'Basic',
    price: '$14.99',
    chargeType: 'Monthly',
    isRecommended: false,
    features: [
      {
        title: 'Free Setup',
        enabled: true,
      },
      {
        title: 'Bandwidth Limit 10 GB',
        enabled: true,
      },
      {
        title: '20 User Connection',
        enabled: true,
      },
      {
        title: 'Analytics Report',
        enabled: false,
      },
      {
        title: 'Public API Access',
        enabled: false,
      },
      {
        title: 'Plugins Intregation',
        enabled: false,
      },
      {
        title: 'Custom Content Management',
        enabled: false,
      },
    ],
  },
  {
    title: 'Standard',
    price: '$49.99',
    chargeType: 'Monthly',
    isRecommended: false,
    features: [
      {
        title: 'Free Setup',
        enabled: true,
      },
      {
        title: 'Bandwidth Limit 10 GB',
        enabled: true,
      },
      {
        title: '20 User Connection',
        enabled: true,
      },
      {
        title: 'Analytics Report',
        enabled: true,
      },
      {
        title: 'Public API Access',
        enabled: true,
      },
      {
        title: 'Plugins Intregation',
        enabled: false,
      },
      {
        title: 'Custom Content Management',
        enabled: false,
      },
    ],
  },
  {
    title: 'Premium',
    price: '$89.99',
    chargeType: 'Monthly',
    isRecommended: true,
    features: [
      {
        title: 'Free Setup',
        enabled: true,
      },
      {
        title: 'Bandwidth Limit 10 GB',
        enabled: true,
      },
      {
        title: '20 User Connection',
        enabled: true,
      },
      {
        title: 'Analytics Report',
        enabled: true,
      },
      {
        title: 'Public API Access',
        enabled: true,
      },
      {
        title: 'Plugins Intregation',
        enabled: true,
      },
      {
        title: 'Custom Content Management',
        enabled: true,
      },
    ],
  },
]

interface PricingProps extends Pricing {}

function PricingCard({
  title,
  chargeType,
  features,
  price,
  isRecommended,
}: PricingProps) {
  return (
    <Card radius='xl' w='100%'>
      <Stack align='center' gap={0}>
        <Title order={5} ta='center'>
          {title}
        </Title>
        <Text c='dimmed' mt={rem(10)} ta='center'>
          {chargeType}
        </Text>

        <Title c='primary.4' fw='900' mt={rem(10)} order={3} ta='center'>
          {price}
        </Title>

        <Divider mt={rem(40)} w='100%' />

        <Stack gap={rem(23)} mt={rem(40)}>
          {features.map((feature) => {
            return (
              <Text
                key={feature.title}
                c={feature.enabled ? 'black' : 'dimmed'}
                fw='600'
                size='lg'
                ta='center'
              >
                {feature.title}
              </Text>
            )
          })}
        </Stack>

        <Divider my={rem(40)} w='100%' />

        <Button
          color='primary.4'
          radius='xl'
          size='lg'
          variant={isRecommended ? 'fill' : 'outline'}
        >
          Get Started
        </Button>

        <Anchor c='black' fw='700' my={rem(24)} ta='center' underline='always'>
          Start Your 30 Day Free Trial
        </Anchor>
      </Stack>
    </Card>
  )
}

function Pricings() {
  const content = pricings.map((pricing) => {
    return <PricingCard key={pricing.title} {...pricing} />
  })

  return <Group wrap='nowrap'>{content}</Group>
}

export function Pricing() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Pricing</PageHeader>
      <Pricings />
    </Stack>
  )
}

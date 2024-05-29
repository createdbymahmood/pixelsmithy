'use client'

import {
  Anchor,
  Button,
  Group,
  Input,
  rem,
  Select,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import {CaretLeft, CaretRight} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {
  RoscentAuthenticationAccountsetupAccountinfo,
  RoscentAuthenticationAccountsetupCreditcardsetup,
  RoscentAuthenticationSignin,
} from '@/lib/declarative-routing'

import styles from './BillingDetails.module.scss'

function Help() {
  return (
    <Group gap={0} justify='center'>
      <Text c='dimmed' size='sm'>
        If you need more info, please check out
      </Text>

      <Anchor
        c='indigo.4'
        component={Link}
        href={RoscentAuthenticationSignin()}
        ml={rem(5)}
        size='sm'
        underline='never'
      >
        Help Page
      </Anchor>

      <Text c='dimmed' size='sm'>
        .
      </Text>
    </Group>
  )
}

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Billing Details</Title>
      <Help />
    </Stack>
  )
}

function FormView() {
  return (
    <Stack>
      <Input.Wrapper
        classNames={{label: styles.inputLabel}}
        label='Business Name'
      >
        <Input classNames={{input: styles.input}} radius='md' />
      </Input.Wrapper>

      <Input.Wrapper
        classNames={{label: styles.inputLabel}}
        label='Shortened Descriptor'
      >
        <Input classNames={{input: styles.input}} radius='md' />
      </Input.Wrapper>

      <Select
        classNames={{label: styles.inputLabel, input: styles.input}}
        data={['Some', 'Random', 'Option', 'Svelte']}
        label='Corporation Type'
        placeholder='Select'
        radius='md'
      />

      <Textarea
        classNames={{input: styles.input, label: styles.inputLabel}}
        label='Input label'
        placeholder='Business Description'
        radius='md'
        rows={4}
      />

      <Input.Wrapper
        classNames={{label: styles.inputLabel}}
        label='Contact Email'
      >
        <Input
          classNames={{input: styles.input}}
          name='email'
          radius='md'
          type='email'
        />
      </Input.Wrapper>
    </Stack>
  )
}

function Footer() {
  const previousLeftSection = <CaretLeft className='icon-size-xs' />
  const continueRightsection = <CaretRight className='icon-size-xs' />
  return (
    <Group justify='center' wrap='nowrap'>
      <Button
        component={Link}
        href={RoscentAuthenticationAccountsetupAccountinfo()}
        leftSection={previousLeftSection}
        radius='md'
        variant='light'
        fullWidth
      >
        Previous
      </Button>
      <Button
        component={Link}
        href={RoscentAuthenticationAccountsetupCreditcardsetup()}
        radius='md'
        rightSection={continueRightsection}
        fullWidth
      >
        Continue
      </Button>
    </Group>
  )
}

export function BillingDetails() {
  return (
    <Stack gap='lg' miw={rem(384)}>
      <Header />
      <FormView />
      <Footer />
    </Stack>
  )
}

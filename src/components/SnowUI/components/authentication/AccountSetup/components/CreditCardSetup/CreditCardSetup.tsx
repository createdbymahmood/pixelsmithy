'use client'

import {
  Anchor,
  Button,
  Group,
  Input,
  rem,
  Select,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import {CaretLeft, CaretRight} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import Link from 'next/link'

import {urls} from '@/constants'

import styles from './CreditCardSetup.module.scss'

function Help() {
  return (
    <Group gap={0} justify='center'>
      <Text c='dimmed' size='sm'>
        If you need more info, please check out
      </Text>

      <Anchor
        c='indigo.4'
        component={Link}
        href={urls.SnowUI.authentication.signIn}
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

function SaveCard() {
  return (
    <Group gap='xl' w='100%' wrap='nowrap'>
      <Stack gap={0} w={rem(272)}>
        <Text size='sm'>Save Card for further billing?</Text>
        <Text c='dimmed' size='xs'>
          If you need more info, please check budget planning.
        </Text>
      </Stack>

      <Switch
        c='dimmed'
        label='Save Card'
        labelPosition='left'
        size='sm'
        defaultChecked
      />
    </Group>
  )
}

function FormView() {
  return (
    <Stack gap='lg'>
      <Input.Wrapper
        classNames={{label: styles.inputLabel}}
        label='Name On Card'
      >
        <Input classNames={{input: styles.input}} radius='md' />
      </Input.Wrapper>

      <Input.Wrapper
        classNames={{label: styles.inputLabel}}
        label='Card Number'
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

      <Group align='flex-end' maw={rem(384)} wrap='nowrap'>
        <Select
          classNames={{label: styles.inputLabel, input: styles.input}}
          data={range(1, 13).map((index) => String(index))}
          label='Expiration'
          placeholder='Month'
          radius='md'
        />

        <Select
          classNames={{label: styles.inputLabel, input: styles.input}}
          data={range(2024, 2050).map((index) => String(index))}
          placeholder='Year'
          radius='md'
        />

        <Input.Wrapper classNames={{label: styles.inputLabel}} label='CVV'>
          <Input classNames={{input: styles.input}} radius='md' />
        </Input.Wrapper>
      </Group>

      <SaveCard />
    </Stack>
  )
}

function Footer() {
  const previousLeftSection = <CaretLeft className='icon-size-xs' />

  return (
    <Group justify='center' wrap='nowrap'>
      <Button
        component={Link}
        href={urls.SnowUI.authentication.accountSetup.billingDetails}
        leftSection={previousLeftSection}
        radius='md'
        variant='light'
        fullWidth
      >
        Previous
      </Button>
      <Button
        component={Link}
        href={urls.SnowUI.projects.index}
        radius='md'
        fullWidth
      >
        Submit
      </Button>
    </Group>
  )
}

export function CreditCardSetup() {
  return (
    <Stack gap='xl' miw={rem(384)}>
      <Header />
      <FormView />
      <Footer />
    </Stack>
  )
}

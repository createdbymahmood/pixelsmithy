'use client'

import {
  Autocomplete,
  Button,
  Card,
  Divider,
  Group,
  Input,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import {FormViewSection} from '@modernize/components/common'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {GroupLink} from '@/components/common'
import {ModernizeDashboardCustomers} from '@/lib/declarative-routing'

function Actions() {
  return (
    <GroupLink ml='auto'>
      <Button
        component={Link}
        href={ModernizeDashboardCustomers()}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={ModernizeDashboardCustomers()}>
        Save
      </Button>
    </GroupLink>
  )
}

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={ModernizeDashboardCustomers()}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </GroupLink>
  )
}

function Header() {
  return (
    <Stack gap={0}>
      <BackButton />
      <Group>
        <Title order={5}>Add Customer</Title>
        <Actions />
      </Group>
    </Stack>
  )
}

function FormViewCustomerInformation() {
  return (
    <FormViewSection
      description='Most important information about the customer'
      title='Customer Information'
    >
      <SimpleGrid cols={2} spacing={rem(24)}>
        <Input.Wrapper label='First Name'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Last Name'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Email Address'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Phone Number'>
          <Input />
        </Input.Wrapper>
      </SimpleGrid>
    </FormViewSection>
  )
}

function FormViewCustomerAddress() {
  return (
    <FormViewSection
      description='Shipping address information'
      title='Customer Address'
    >
      <SimpleGrid cols={2} spacing={rem(24)}>
        <Input.Wrapper label='Address'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Apartment'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='City'>
          <Input />
        </Input.Wrapper>

        <Group wrap='nowrap'>
          <Input.Wrapper label='Country' w='100%'>
            <Autocomplete placeholder='Choose' size='md' />
          </Input.Wrapper>

          <Input.Wrapper label='Postal Code' w='100%'>
            <Input />
          </Input.Wrapper>
        </Group>

        <Input.Wrapper label='Phone'>
          <Input />
        </Input.Wrapper>
      </SimpleGrid>
    </FormViewSection>
  )
}

function FormViewCustomerNotes() {
  return (
    <FormViewSection
      description='Shipping address information'
      title='Customer Address'
    >
      <Textarea label='Notes' placeholder='Add notes about customer' rows={3} />
    </FormViewSection>
  )
}

function FormView() {
  return (
    <Stack gap={rem(38)}>
      <FormViewCustomerInformation />
      <Divider />
      <FormViewCustomerAddress />
      <Divider />
      <FormViewCustomerNotes />
    </Stack>
  )
}

export function AddCustomerForm() {
  return (
    <Stack gap={rem(30)}>
      <Header />

      <Card>
        <FormView />
      </Card>

      <Divider />
      <Actions />
    </Stack>
  )
}

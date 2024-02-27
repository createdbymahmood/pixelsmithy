'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Autocomplete,
  Button,
  Card,
  Divider,
  Group as MantineGroup,
  Input,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type {ReactNode} from 'react'

import {urls} from '@/constants'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

function Actions() {
  return (
    <Group ml='auto'>
      <Button
        component={Link}
        href={urls.Modernize.dashboard.customers.index}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={urls.Modernize.dashboard.customers.index}>
        Save
      </Button>
    </Group>
  )
}

function BackButton() {
  return (
    <Group
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={urls.Modernize.dashboard.customers.index}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </Group>
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

interface FormViewSectionProps {
  title: string
  description: string
  children: ReactNode
}

function FormViewSection({children, description, title}: FormViewSectionProps) {
  return (
    <Stack gap={rem(24)}>
      <Stack gap={rem(4)}>
        <Text fw='bold'>{title}</Text>
        <Text c='general.5' size='sm'>
          {description}
        </Text>
      </Stack>

      {children}
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
        <Stack gap={rem(30)}>
          <FormView />
        </Stack>
      </Card>

      <Divider />
      <Actions />
    </Stack>
  )
}

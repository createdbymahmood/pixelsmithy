import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import React, {Fragment} from 'react'

import styles from './BillingAddress.module.scss'

function Header() {
  return <Title order={5}>Billing Address</Title>
}

const addresses = [
  {
    title: "ByeWind's house",
    fullAddress: 'One Apple Park Way\n Cupertino, CA 95014\nUS',
    isActive: true,
  },
  {
    title: 'Company',
    fullAddress: 'Ap #285-7193 Ullamcorper Avenue\nAmesbury HI 93373\nUS',
    isActive: false,
  },
]

interface AddressCardProps {
  title: string
  fullAddress: string
  isActive: boolean
}

function AddressCard({fullAddress, isActive, title}: AddressCardProps) {
  return (
    <Card bg='gray.2' px='sm' py='md'>
      <Stack gap={rem(5)}>
        <Group>
          <Title className={styles.addressTitle} order={5}>
            {title}
          </Title>

          {isActive ? (
            <Fragment>
              <Badge color='green'>Active</Badge>
              <Button ml='auto' size='xs' variant='light'>
                Edit
              </Button>
            </Fragment>
          ) : null}
        </Group>

        <Text className={styles.addressDescription} size='sm'>
          {fullAddress}
        </Text>
      </Stack>
    </Card>
  )
}

function AddAddressCard() {
  return (
    <Stack className={styles.addCard} p='lg'>
      <Center h='100%'>
        <Group gap='xs' mr='auto'>
          <Plus className='icon-size-sm' />
          <Text size='sm'>Add Address</Text>
        </Group>
      </Center>
    </Stack>
  )
}

function Addresses() {
  const content = addresses.map((address) => {
    return <AddressCard key={address.title} {...address} />
  })

  content.push(<AddAddressCard key='add-address-card' />)

  return <SimpleGrid cols={3}>{content}</SimpleGrid>
}

function Footer() {
  return (
    <Text c='dimmed' size='sm'>
      Tax Location : United States - 10% VAT
    </Text>
  )
}

export function BillingAddress() {
  return (
    <Card>
      <Stack>
        <Header />
        <Addresses />
        <Footer />
      </Stack>
    </Card>
  )
}

'use client'

import {
  Avatar,
  Card,
  Center,
  Divider,
  Group,
  rem,
  Skeleton,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'

function PageTitle() {
  return <Title order={3}>Email Template</Title>
}

function TemplateHeader() {
  return (
    <Group justify='space-between'>
      <Group gap='xs'>
        <Avatar size={48} />
        <Stack gap={0}>
          <Title order={4}>Roscent</Title>
          <Text size='sm'>Invoice</Text>
        </Stack>
      </Group>
      <Stack gap={0}>
        <Group gap={rem(4)} justify='flex-end'>
          <Text c='dimmed' size='sm'>
            Invoice ID:
          </Text>
          <Text size='sm'>#VL25000355</Text>
        </Group>

        <Group gap={rem(4)} justify='flex-end'>
          <Text c='dimmed' size='sm'>
            Date:
          </Text>
          <Text size='sm'>Feb 2, 2024, 8:00 AM</Text>
        </Group>
      </Stack>
    </Group>
  )
}

function TemplateDescription() {
  return (
    <Card>
      <Group justify='space-between' wrap='nowrap'>
        <Stack gap={0}>
          <Text size='sm'>Invoice To</Text>
          <Title order={4}>ByeWind</Title>
        </Stack>

        <Divider orientation='vertical' />

        <Stack gap={0}>
          <Text size='sm'>Payment Method</Text>
          <Group gap={rem(2)}>
            <Avatar size={20} />
            <Title order={4}>byewind@twitter.com</Title>
          </Group>
        </Stack>

        <Divider orientation='vertical' />

        <Stack gap={0}>
          <Text size='sm'>Total Due</Text>
          <Title order={4}>$340.94</Title>
        </Stack>
      </Group>
    </Card>
  )
}

const elements = [
  {
    products: 'ASOS Ridley High Waist',
    SKU: 'Black/28',
    price: '$79.49',
    quantity: 1,
    amount: '$79.49',
  },
  {
    products: 'Marco Lightweight Shirt',
    SKU: 'White/32',
    price: '$128.50',
    quantity: 1,
    amount: '$128.50',
  },
  {
    products: 'Half Sleeve  Shirt',
    SKU: 'White/29',
    price: '$39.99',
    quantity: 1,
    amount: '$39.99',
  },
  {
    products: 'Lightweight Jacket',
    SKU: 'Black/30',
    price: '$20.00',
    quantity: 1,
    amount: '$20.00',
  },
  {
    products: 'Marco Shoes',
    SKU: 'Black/29',
    price: '$28.49',
    quantity: 1,
    amount: '$28.49',
  },
]

function TableFooter() {
  return (
    <Table.Tfoot>
      <Table.Tr>
        <Table.Td colSpan={5}>
          <Divider w='100%' />
        </Table.Td>
      </Table.Tr>

      <Table.Tr>
        <Table.Td colSpan={4} py={rem(3)}>
          SubTotal
        </Table.Td>
        <Table.Td py={rem(3)}>$296.47</Table.Td>
      </Table.Tr>

      <Table.Tr>
        <Table.Td colSpan={4} py={rem(3)}>
          Tax: Vat(15%)
        </Table.Td>
        <Table.Td py={rem(3)}>$44.47</Table.Td>
      </Table.Tr>

      <Table.Tr>
        <Table.Td colSpan={5}>
          <Divider color='black' size='sm' w='100%' />
        </Table.Td>
      </Table.Tr>

      <Table.Tr>
        <Table.Td colSpan={4}>
          <Title order={5}>Total Due</Title>
        </Table.Td>
        <Table.Td>
          <Title order={5}>$340.94</Title>
        </Table.Td>
      </Table.Tr>
    </Table.Tfoot>
  )
}

function TableContent() {
  const rows = elements.map((element) => {
    return (
      <Table.Tr key={element.products}>
        <Table.Td>{element.products}</Table.Td>
        <Table.Td>{element.SKU}</Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.quantity}</Table.Td>
        <Table.Td>{element.amount}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Products</Table.Th>
          <Table.Th>SKU</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Amount</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>

      <TableFooter />
    </Table>
  )
}

export function Invoice() {
  return <TableContent />
}

function Footer() {
  return (
    <Group align='flex-start'>
      <Skeleton h={rem(28)} w={rem(105)} />

      <Stack gap={0} ml='auto'>
        <Text c='dimmed' size='xs'>
          +852 19850622
        </Text>
        <Text c='dimmed' size='xs'>
          byewind@twitter.com
        </Text>
        <Text c='dimmed' size='xs'>
          roscent.byewind.com
        </Text>
      </Stack>

      <Stack gap={0} ml='xl'>
        <Text c='dimmed' size='xs'>
          One Apple Park Way
        </Text>
        <Text c='dimmed' size='xs'>
          Cupertino, CA 95014
        </Text>
      </Stack>
    </Group>
  )
}

function Template() {
  return (
    <Center flex={1} h='100%'>
      <Stack h='100%' maw='fit-content'>
        <Card bg='white' w={rem(620)}>
          <Stack gap='lg' h='100%'>
            <TemplateHeader />
            <TemplateDescription />
            <Invoice />
            <Footer />
          </Stack>
        </Card>
      </Stack>
    </Center>
  )
}

export function EmailTemplate() {
  return (
    <Stack bg='gray.1' mih='100vh' p='sm' w='100vw'>
      <PageTitle />
      <Template />
    </Stack>
  )
}

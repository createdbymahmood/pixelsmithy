import {
  Avatar,
  Badge,
  Card,
  Group,
  Menu,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ArrowRight} from '@phosphor-icons/react'
import {
  Chat,
  DotsThree,
  Gear,
  Image,
  MagnifyingGlass,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'

import styles from './ProductDelivery.module.scss'

function ProductDeliverHeader() {
  return (
    <Group align='baseline' gap={rem(5)}>
      <Title order={5}>Product Delivery</Title>
      <Text c='dimmed' size='xs'>
        Order Details
      </Text>
    </Group>
  )
}

function ProductMenu() {
  return (
    <Menu shadow='md'>
      <Menu.Target>
        <DotsThree className={styles.menuTrigger} size={20} weight='bold' />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={<Gear style={{width: rem(14), height: rem(14)}} />}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={<Chat style={{width: rem(14), height: rem(14)}} />}
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={<Image style={{width: rem(14), height: rem(14)}} />}
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <MagnifyingGlass style={{width: rem(14), height: rem(14)}} />
          }
          rightSection={
            <Text c='dimmed' size='xs'>
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<ArrowRight style={{width: rem(14), height: rem(14)}} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color='red'
          leftSection={<Trash style={{width: rem(14), height: rem(14)}} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

type ProductDeliveryStatus = 'approved' | 'complete' | 'in-progress' | 'pending'

interface Product {
  title: string
  receiver: string
  status: ProductDeliveryStatus
}

const products: Product[] = [
  {
    title:
      "Timeson Women's V Neck Short Sleeve Curved Hem Sheer Chiffon Blouse Shirts Tops",
    receiver: 'To: Dan Wilson',
    status: 'approved',
  },
  {
    title: 'Hanes Women’s Perfect-T Long Sleeve T-shirt',
    receiver: 'To: Jason Bourne',
    status: 'in-progress',
  },
  {
    title:
      "Timeson Women's V Neck Short Sleeve Curved Hem Sheer Chiffon Blouse Shirts Tops",
    receiver: 'To: Marie Durant',
    status: 'pending',
  },
  {
    title: 'SIVVAN Scrubs for Women - Long Sleeve Comfort Underscrub Tee',
    receiver: 'To: Jason Bourne',
    status: 'complete',
  },
]

const statusBadgeMap: Record<ProductDeliveryStatus, JSX.Element> = {
  'in-progress': <Badge color='indigo'>In Progress</Badge>,
  approved: <Badge color='yellow'>Approved</Badge>,
  complete: <Badge color='green'>Complete</Badge>,
  pending: <Badge color='blue'>Pending</Badge>,
}

interface ProductProps {
  title: string
  receiver: string
  status: ProductDeliveryStatus
}

function Product({receiver, status, title}: ProductProps) {
  const badge = get(statusBadgeMap, status, null)
  return (
    <Group gap='sm' wrap='nowrap'>
      <Avatar radius='md' size={rem(48)} />
      <Stack gap={0}>
        <Text className={styles.productDescription} size='xs'>
          {title}
        </Text>
        <Text c='dimmed' size='xs'>
          {receiver}
        </Text>
      </Stack>
      <Stack align='flex-end'>
        <ProductMenu />
        {badge}
      </Stack>
    </Group>
  )
}

function ProductsList() {
  const content = products.map((product) => {
    return <Product key={`${product.title}-${product.receiver}`} {...product} />
  })

  return <Stack gap='xs'>{content}</Stack>
}

export function ProductDelivery() {
  return (
    <Card>
      <Stack>
        <ProductDeliverHeader />
        <ProductsList />
      </Stack>
    </Card>
  )
}

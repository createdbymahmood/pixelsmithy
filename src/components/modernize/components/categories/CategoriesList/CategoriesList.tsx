'use client'

import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Group,
  Overlay,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {PencilSimple, Plus} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {urls} from '@/constants'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Categories</Title>
      <Button
        component={Link}
        href={urls.Modernize.dashboard.categories.add}
        leftSection={<Plus className='icon-size-md' weight='bold' />}
      >
        Add Category
      </Button>
    </Group>
  )
}

interface Category {
  title: string
  count: number
}

interface CategoryProps extends Category {}

function Category({count, title}: CategoryProps) {
  const [hovered, {toggle}] = useDisclosure(false)

  const categoryImageOverlay = hovered ? (
    <Overlay
      backgroundOpacity={0.35}
      blur={0}
      color='#000'
      component={Link}
      href={urls.Modernize.dashboard.categories.add}
    >
      <Button
        leftSection={<PencilSimple className='icons-size-md' weight='bold' />}
        size='md'
        variant='default'
      >
        Edit
      </Button>
    </Overlay>
  ) : null

  const categoryImage = (
    <AspectRatio
      h={240}
      mx='auto'
      ratio={16 / 9}
      w={350}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <Box p={0}>
        <Avatar h='100%' radius='xs' w='100%' />
      </Box>
      {categoryImageOverlay}
    </AspectRatio>
  )

  return (
    <Stack bg='white' gap={0}>
      {categoryImage}
      <Stack gap={0} p='xs'>
        <Text fw='bold'>{title}</Text>
        <Text c='general.5' size='sm'>
          {count}
        </Text>
      </Stack>
    </Stack>
  )
}

const categories: Category[] = [
  {
    title: 'Men Clothes',
    count: 24,
  },
  {
    title: 'Women Clothes',
    count: 12,
  },
  {
    title: 'Accessories',
    count: 43,
  },
  {
    title: 'Cotton Clothes',
    count: 31,
  },
  {
    title: 'Summer Clothes',
    count: 26,
  },
  {
    title: 'Wedding Clothes',
    count: 52,
  },
  {
    title: 'Spring Collection',
    count: 24,
  },
  {
    title: 'Casual Clothes',
    count: 52,
  },
  {
    title: 'Hats',
    count: 26,
  },
]

function Categories() {
  const content = categories.map((category) => {
    return <Category key={category.title} count={24} title='Men Clothes' />
  })

  return (
    <SimpleGrid cols={3} spacing={rem(30)}>
      {content}
    </SimpleGrid>
  )
}

export function CategoriesList() {
  return (
    <Stack gap={rem(30)}>
      <Header />
      <Categories />
    </Stack>
  )
}

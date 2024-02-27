'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  ActionIcon,
  Avatar,
  Button,
  Divider,
  Grid,
  Group as MantineGroup,
  Input,
  rem,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {FormSection} from '@modernize/components/common'
import {
  ArrowLeft,
  DotsThreeVertical,
  PencilSimple,
  Plus,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'

import {urls} from '@/constants'

import styles from './AddCategoryForm.module.scss'

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
        href={urls.Modernize.dashboard.categories.index}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={urls.Modernize.dashboard.categories.index}>
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
      href={urls.Modernize.dashboard.categories.index}
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
        <Title order={5}>Women Clothes</Title>
        <Actions />
      </Group>
    </Stack>
  )
}

function Visibility() {
  return (
    <FormSection>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Category Visibility</Text>
        <Switch label='Visible on site' size='md' defaultChecked />
      </Stack>
    </FormSection>
  )
}

function Images() {
  return (
    <Stack gap={rem(4)}>
      <Text c='general.5' size='sm'>
        Image
      </Text>

      <Dropzone
        accept={IMAGE_MIME_TYPE}
        maxSize={5 * 1024 ** 2}
        onDrop={(_files) => console.log('accepted files', _files)}
        onReject={(_files) => console.log('rejected files', _files)}
      >
        <Stack align='center' gap={rem(12)}>
          <Button variant='default'>Add File</Button>
          <Text c='general.5' size='sm'>
            Or drag and drop files
          </Text>
        </Stack>
      </Dropzone>
    </Stack>
  )
}

function Info() {
  return (
    <FormSection>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Category Info</Text>
        <Input.Wrapper label='Category Name' w='100%'>
          <Input
            placeholder='Enter category name'
            type='text'
            value='Women Clothes'
          />
        </Input.Wrapper>
        <Images />
      </Stack>
    </FormSection>
  )
}

function ProductItemActions() {
  return (
    <Group className={styles.actions} gap={rem(20)} ml='auto'>
      <ActionIcon c='general.5' variant='white'>
        <PencilSimple
          className={clsx('icon-size-md', 'cursor-pointer')}
          weight='bold'
        />
      </ActionIcon>

      <ActionIcon c='general.5' variant='white'>
        <Trash
          className={clsx('icon-size-md', 'cursor-pointer')}
          weight='bold'
        />
      </ActionIcon>
    </Group>
  )
}

interface ProductItemProps {
  title: string
}

function ProductItem({title}: ProductItemProps) {
  return (
    <Group className={styles.product}>
      <DotsThreeVertical className={clsx('icon-size-lg', 'cursor-pointer')} />
      <Avatar radius='sm' size={rem(48)} />
      <Text c='black' size='sm'>
        {title}
      </Text>
      <ProductItemActions />
    </Group>
  )
}

const products = [
  'Women Striped T-Shirt',
  'Women White T-Shirt',
  'Women White T-Shirt',
  'Women Black Dress',
  'Women White T-Shirt',
  'Women White T-Shirt',
  'Women Black Dress',
  'Women Striped T-Shirt',
]

function ProductsHeader() {
  return (
    <Group gap={rem(9)}>
      <Text fw='bold'>Products</Text>
      <Text c='general.5'>12</Text>
    </Group>
  )
}

function Products() {
  const content = products.map((product, index) => {
    return <ProductItem key={index} title={product} />
  })

  return (
    <FormSection>
      <Stack gap={rem(24)}>
        <ProductsHeader />
        <Stack gap={rem(12)}>{content}</Stack>
      </Stack>

      <Button
        leftSection={<Plus className='icon-size-md' weight='bold' />}
        size='md'
        variant='default'
      >
        Add Product
      </Button>
    </FormSection>
  )
}

export function AddCategoryForm() {
  return (
    <Stack gap={rem(30)}>
      <Header />

      <Grid gutter={rem(30)}>
        <Grid.Col span={8}>
          <Products />
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap={rem(30)}>
            <Visibility />
            <Info />
          </Stack>
        </Grid.Col>
      </Grid>

      <Divider />
      <Actions />
    </Stack>
  )
}

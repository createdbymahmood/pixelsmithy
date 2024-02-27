'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Anchor,
  Autocomplete,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  Grid,
  Group as MantineGroup,
  Input,
  rem,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  TagsInput,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {ArrowLeft, Upload, X} from '@phosphor-icons/react/dist/ssr'
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

function BackButton() {
  return (
    <Group
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={urls.Modernize.dashboard.products.index}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text>Back</Text>
    </Group>
  )
}

function Header() {
  return (
    <Stack gap={0}>
      <BackButton />
      <Group>
        <Title order={5}>Add Product</Title>
        <Actions />
      </Group>
    </Stack>
  )
}

function Information() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Information</Text>
      <Input.Wrapper label='Product Name'>
        <Input placeholder='Summer T-Shirt' type='text' />
      </Input.Wrapper>

      <Textarea
        label='Product Description'
        placeholder='Product Description'
        rows={4}
      />
    </Stack>
  )
}

function Images() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Images</Text>
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

function Price() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Price</Text>
      <Group gap={rem(28)} wrap='nowrap'>
        <Input.Wrapper label='Product Price' w='100%'>
          <Input placeholder='Enter price' type='text' />
        </Input.Wrapper>
        <Input.Wrapper label='Discount Price' w='100%'>
          <Input placeholder='Price at Discount' type='text' />
        </Input.Wrapper>
      </Group>
      <Switch defaultChecked={false} label='Add tax for this product' />
    </Stack>
  )
}

function DifferentOptions() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Different Options</Text>
      <Switch label='This product has multiple options' defaultChecked />
      <Stack gap='xs'>
        <Text fw='bold'>Option 1</Text>
        <Group wrap='nowrap'>
          <Select data={['Size']} defaultValue='Size' size='sm' w='100%' />
          <TagsInput
            data={['S', 'M', 'L']}
            defaultValue={['S', 'M', 'L']}
            size='sm'
            w='100%'
          />
        </Group>
        <Anchor c='primary' underline='never'>
          Add More
        </Anchor>
      </Stack>
    </Stack>
  )
}

function Shipping() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Shipping</Text>
      <Stack gap='xs'>
        <Group wrap='nowrap'>
          <Input.Wrapper label='Weight' w='100%'>
            <Input placeholder='Enter Weight' type='text' />
          </Input.Wrapper>

          <Autocomplete
            label='Country'
            placeholder='Select Country'
            size='sm'
            w='100%'
          />
        </Group>
      </Stack>
      <Switch defaultChecked={false} label='This is digital item' />
    </Stack>
  )
}

function Categories() {
  return (
    <SectionWrapper>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Categories</Text>
        <Stack gap={rem(12)}>
          <Checkbox label='Women' size='sm' />
          <Checkbox label='Men' size='sm' />
          <Checkbox label='T-Shirt' size='sm' />
          <Checkbox label='Hoodie' size='sm' />
          <Checkbox label='Dress' size='sm' />
        </Stack>

        <Anchor c='primary' underline='never'>
          Create New
        </Anchor>
      </Stack>
    </SectionWrapper>
  )
}

function Tags() {
  const tags = ['T-Shirt', 'Men Clothes', 'Summer Collection']
  const content = tags.map((tag) => {
    return (
      <Chip
        key={tag}
        color='general.5'
        icon={<X weight='bold' />}
        radius='sm'
        variant='light'
        defaultChecked
      >
        T-{tag}
      </Chip>
    )
  })

  return (
    <SectionWrapper>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Tags</Text>
        <Input.Wrapper label='Add Tags' w='100%'>
          <Input placeholder='Enter tag name' type='text' />
        </Input.Wrapper>
        <Group gap={rem(8)}>{content}</Group>
      </Stack>
    </SectionWrapper>
  )
}

function SeoSettings() {
  return (
    <SectionWrapper>
      <Stack gap={rem(24)}>
        <Text fw='bold'>Seo Settings</Text>
        <Input.Wrapper label='Title'>
          <Input type='text' />
        </Input.Wrapper>

        <Textarea label='Description' rows={3} />
      </Stack>
    </SectionWrapper>
  )
}

function Actions() {
  return (
    <Group ml='auto'>
      <Button
        component={Link}
        href={urls.Modernize.dashboard.products.index}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={urls.Modernize.dashboard.products.index}>
        Save
      </Button>
    </Group>
  )
}

interface SectionWrapperProps {
  children: ReactNode
}

function SectionWrapper({children}: SectionWrapperProps) {
  return (
    <Card bg='white' component={Stack} gap='md' p='sm' radius='md'>
      {children}
    </Card>
  )
}

export function AddProductForm() {
  return (
    <Stack gap={rem(30)} pb='sm'>
      <Header />
      <Grid gutter={rem(30)}>
        <Grid.Col span={8}>
          <SectionWrapper>
            <Information />
            <Divider />
            <Images />
            <Divider />
            <Price />
            <DifferentOptions />
            <Divider />
            <Shipping />
          </SectionWrapper>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap='sm'>
            <Categories />
            <Tags />
            <SeoSettings />
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider />
      <Actions />
    </Stack>
  )
}

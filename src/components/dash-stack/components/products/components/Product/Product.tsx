import {Carousel} from '@mantine/carousel'
import type {SkeletonProps} from '@mantine/core'
import {
  ActionIcon,
  Button,
  Card,
  Group,
  Rating,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {Heart} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import styles from './Product.module.scss'

function ImagesCarousel() {
  const slideProps: SkeletonProps = {
    h: '100%',
    w: '100%',
    radius: 'md',
  }
  return (
    <Carousel
      align='start'
      classNames={{control: styles.control}}
      controlSize={rem(41)}
      height={rem(317)}
      slideGap={rem(10)}
      slideSize='80%'
    >
      <Carousel.Slide>
        <Skeleton {...slideProps} />
      </Carousel.Slide>
      <Carousel.Slide>
        <Skeleton {...slideProps} />
      </Carousel.Slide>
      <Carousel.Slide>
        <Skeleton {...slideProps} />
      </Carousel.Slide>
    </Carousel>
  )
}

function Body() {
  const [favorited, handlers] = useDisclosure(false)

  return (
    <Group align='flex-start' justify='space-between'>
      <Stack align='flex-start' gap={rem(4)}>
        <Title order={6} size={rem(18)}>
          Apple Watch Series 4
        </Title>

        <Text c='primary.4' fw='700'>
          $120.00
        </Text>

        <Group gap={rem(4)} mt={rem(2)}>
          <Rating defaultValue={4} size='sm' readOnly />
          <Text c='dimmed'>(131)</Text>
        </Group>

        <Button
          c='black'
          color='primary.3'
          mt={rem(13)}
          radius='md'
          variant='light'
        >
          Edit Product
        </Button>
      </Stack>

      <ActionIcon
        c={favorited ? 'red.6' : 'black'}
        color='gray.5'
        radius='xl'
        size={rem(44)}
        variant='light'
        onClick={handlers.toggle}
      >
        <Heart weight={favorited ? 'fill' : 'regular'} />
      </ActionIcon>
    </Group>
  )
}

export function Product() {
  return (
    <Card w='100%'>
      <Stack>
        <ImagesCarousel />
        <Body />
      </Stack>
    </Card>
  )
}

'use client'

import {Carousel} from '@mantine/carousel'
import {
  Button,
  Card,
  getGradient,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'

import styles from './PromotionsCarousel.module.scss'

function CarouselSlide() {
  const theme = useMantineTheme()

  return (
    <Carousel.Slide>
      <Card
        bg={getGradient({deg: 45, from: 'primary.3', to: 'primary.5'}, theme)}
        px={rem(130)}
        py={rem(50)}
      >
        <Stack align='flex-start' c='white' gap='sm' w={rem(413)}>
          <Text>September 12-22</Text>
          <Title fw={900} order={4}>
            Enjoy free home delivery in this summer
          </Title>
          <Text>Designer Dresses - Pick from trendy Designer Dress.</Text>
          <Button color='orange' radius='md' size='md'>
            Get Started
          </Button>
        </Stack>
      </Card>
    </Carousel.Slide>
  )
}

export function PromotionsCarousel() {
  return (
    <Carousel classNames={{control: styles.control}} slideGap={rem(10)}>
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
    </Carousel>
  )
}

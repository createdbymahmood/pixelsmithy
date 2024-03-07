'use client'

import {Carousel} from '@mantine/carousel'
import {
  Box,
  Button,
  Card,
  getGradient,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import {forwardRef} from 'react'

import styles from './PromotionsCarousel.module.scss'

const CarouselSlide = forwardRef<HTMLDivElement, unknown>(
  function CarouselSlide(props, ref) {
    const theme = useMantineTheme()

    return (
      <Card
        ref={ref}
        bg={getGradient({deg: 45, from: 'primary.3', to: 'primary.4'}, theme)}
        pl={rem(130)}
        py={rem(50)}
        radius='lg'
      >
        <Stack align='flex-start' c='white' gap='xs' w={rem(413)}>
          <Text>September 12-22</Text>
          <Title fw={900} order={4}>
            Enjoy free home delivery in this summer
          </Title>
          <Text>Designer Dresses - Pick from trendy Designer Dress.</Text>
          <Button color='orange' mt='md' radius='md' size='md'>
            Get Started
          </Button>
        </Stack>
      </Card>
    )
  },
)

export function PromotionsCarousel() {
  return (
    <Carousel classNames={{control: styles.control}} slideGap={rem(10)}>
      <Carousel.Slide>
        <CarouselSlide />
      </Carousel.Slide>

      <Carousel.Slide>
        <CarouselSlide />
      </Carousel.Slide>

      <Carousel.Slide>
        <CarouselSlide />
      </Carousel.Slide>

      <Carousel.Slide>
        <CarouselSlide />
      </Carousel.Slide>
    </Carousel>
  )
}

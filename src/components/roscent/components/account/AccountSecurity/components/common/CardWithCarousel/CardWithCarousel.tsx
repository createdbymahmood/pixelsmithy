import {Carousel} from '@mantine/carousel'
import {Button, Card, Group, rem, Stack, Text, Title} from '@mantine/core'
import type {Dayjs} from 'dayjs'

import styles from './CardWithCarousel.module.scss'

export interface SlideProps {
  title: string
  date: Dayjs
  cta: string
}

function Slide({cta, date, title}: SlideProps) {
  return (
    <Carousel.Slide key={title} h={100}>
      <Stack gap='xs'>
        <Text size='sm'>{title}</Text>

        <Group justify='space-between'>
          <Text c='dimmed' size='sm'>
            {date.format('MMM DD, YYYY')}
          </Text>
          <Button variant='light'>{cta}</Button>
        </Group>
      </Stack>
    </Carousel.Slide>
  )
}

interface SlidesProps {
  slides: SlideProps[]
}

function Slides({slides}: SlidesProps) {
  const content = slides.map((slide) => {
    return <Slide key={slide.title} {...slide} />
  })

  return content
}

interface AlertsProps extends SlidesProps {}

function Alerts({slides}: AlertsProps) {
  return (
    <Carousel
      classNames={{
        indicators: styles.indicators,
        indicator: styles.indicator,
      }}
      slideGap={rem(20)}
      withControls={false}
      withIndicators
    >
      <Slides slides={slides} />
    </Carousel>
  )
}

interface CardWithCarouselProps extends AlertsProps {
  title: string
}

export function CardWithCarousel({slides, title}: CardWithCarouselProps) {
  return (
    <Card>
      <Stack>
        <Title order={5}>{title}</Title>
        <Alerts slides={slides} />
      </Stack>
    </Card>
  )
}

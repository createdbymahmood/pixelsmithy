import {Carousel} from '@mantine/carousel'
import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  Input,
  Pill,
  rem,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import type {IconWeight} from '@phosphor-icons/react'
import {
  ArrowLeft,
  Heart,
  SlidersHorizontal,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {range} from 'lodash-es'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScrollableContent} from '@/components/common/ScrollableContent'
import {BottomNavigation} from '@/components/Flights/components/screens/general/components'

function Header() {
  return (
    <Group gap='md'>
      <ArrowLeft className='icon-size-md' />
      <Input
        defaultValue='St. Petersburg, July 30'
        flex={1}
        rightSection={
          <Box className='icon-size-md' component={SlidersHorizontal} />
        }
      />
    </Group>
  )
}

interface PopularAirToursCarouselSlideProps {
  title: string
}

function PopularAirToursCarouselSlide({
  title,
}: PopularAirToursCarouselSlideProps) {
  return (
    <Carousel.Slide>
      <Stack gap='sm'>
        <Skeleton animate={false} h={rem(118)} w={118} />
        <Text size='sm'>{title}</Text>
      </Stack>
    </Carousel.Slide>
  )
}

function PopularAirToursCarousel() {
  const slides = range(0, 10).map((index) => (
    <PopularAirToursCarouselSlide key={index} title='Extreme flight' />
  ))
  return (
    <Card pb='xxxl' pt={0} px={0}>
      <Stack gap='xl'>
        <Text fw='700' size='xl'>
          Popular
        </Text>

        <Carousel slideSize='30.333333%'>{slides}</Carousel>
      </Stack>
    </Card>
  )
}

export function FavoriteToggle() {
  const [isBookmarked, {toggle}] = useDisclosure(false)
  const iconWeight: IconWeight = isBookmarked ? 'fill' : 'bold'

  return (
    <Card
      bg='rgba(255,255,255,0.3)'
      c='white'
      className={clsx('icon-size-lg', 'cursor-pointer')}
      component={Heart}
      p={rem(6)}
      radius='xl'
      weight={iconWeight}
      onClick={toggle}
    />
  )
}

function AirTourListItem() {
  return (
    <Stack gap='md'>
      <Card bg='gray.3' h={rem(160)} p='sm'>
        <Stack h='100%' justify='space-between'>
          <Box ml='auto'>
            <FavoriteToggle />
          </Box>

          <Group gap='xs' wrap='nowrap'>
            <Pill bg='white' size='sm' variant='outline'>
              4.5
            </Pill>

            <Pill bg='white' size='sm' variant='outline'>
              Airfield: Selzo
            </Pill>

            <Pill bg='white' size='sm' variant='outline'>
              Passengers: 4
            </Pill>
          </Group>
        </Stack>
      </Card>

      <Text fw='700' size='md'>
        Cessna 172 familiarization flight from Kronstadt
      </Text>
    </Stack>
  )
}

function AirToursList() {
  return (
    <Stack gap='xl'>
      <Text fw='700' size='xl'>
        Air tours
      </Text>

      <AirTourListItem />
      <AirTourListItem />
      <AirTourListItem />
      <AirTourListItem />
      <AirTourListItem />
    </Stack>
  )
}

function Footer() {
  return (
    <Stack className='shrink-0' gap='xl' mb='xs'>
      <Divider />
      <Button radius='md' size='lg' fullWidth>
        Find tour
      </Button>
    </Stack>
  )
}

export function AirToursSearchResults() {
  return (
    <IOSScreen bg='white' variant='dark'>
      <Stack h='100%' mt={rem(63)} px='lg'>
        <Header />
        <ScrollableContent
          h={`calc(100% - ${rem(50)} - ${rem(75)} - ${rem(184)})`}
        >
          <Stack>
            <PopularAirToursCarousel />
            <AirToursList />
          </Stack>
        </ScrollableContent>
        <Footer />
        <BottomNavigation />
      </Stack>
    </IOSScreen>
  )
}

import {Carousel} from '@mantine/carousel'
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Group,
  Input,
  rem,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import {
  ArrowLeft,
  SlidersHorizontal,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {BottomNavigation} from '@/components/Flights/components/screens/general/components'

function Header() {
  return (
    <Group gap='md'>
      <ArrowLeft className='icon-size-md' />
      <Input
        flex={1}
        rightSection={
          <Box className='icon-size-md' component={SlidersHorizontal} />
        }
        value='St. Petersburg, July 30'
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
    <Card className='shrink-0' pb='xxxl' pt={0} px={0}>
      <Stack gap='xl'>
        <Text fw='700' size='xl'>
          Popular
        </Text>

        <Carousel slideSize='30.333333%'>{slides}</Carousel>
      </Stack>
    </Card>
  )
}

interface AirTourListItemProps {}

function AirTourListItem() {
  return (
    <Stack gap='md'>
      <Card bg='gray.3' h={rem(160)} p='sm'>
        <Stack h='100%' justify='flex-end'>
          <Group gap='xs' wrap='nowrap'>
            <Chip icon={<Star weight='fill' />} size='xs' variant='outline'>
              4.7
            </Chip>

            <Chip size='xs' variant='outline'>
              Airfield: Selzo
            </Chip>

            <Chip size='xs' variant='outline'>
              Passengers: 4
            </Chip>
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
    </Stack>
  )
}

function Footer() {
  return (
    <Stack className='shrink-0' gap='xl' mb='xs' mt='auto'>
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
      <Stack flex={1} gap='md' h='100%' mt={rem(63)} px='lg'>
        <Header />
        <PerfectScrollbar>
          <Box h={100}>
            <PopularAirToursCarousel />
            <AirToursList />
          </Box>
        </PerfectScrollbar>
        <Footer />
      </Stack>
      <BottomNavigation />
    </IOSScreen>
  )
}

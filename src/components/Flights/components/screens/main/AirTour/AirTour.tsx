import type {BoxProps} from '@mantine/core'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Group,
  Input,
  Pill,
  Rating,
  rem,
  Stack,
  Text,
  Timeline,
} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  AirplaneTakeoff,
  ArrowLeft,
  CalendarBlank,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {noop} from 'lodash-es'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScrollableContent} from '@/components/common/ScrollableContent'
import {FavoriteToggle} from '@/components/flights/components/screens'
import {PassengersCount} from '@/components/flights/components/screens/main/Home/components'

import styles from './AirTour.module.scss'

function Header() {
  return (
    <Stack
      bg='gray.5'
      className={styles.header}
      h={rem(300)}
      justify='space-between'
      pb={rem(20)}
      pt={rem(57)}
      px='lg'
    >
      <Group c='white' justify='space-between'>
        <ArrowLeft className={clsx('icon-size-lg', 'cursor-pointer')} />
        <FavoriteToggle />
      </Group>

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
  )
}

function Info() {
  return (
    <Card>
      <Stack gap='md'>
        <Text fw='600' size='lg'>
          Cessna 172 familiarization flight from Kronstadt
        </Text>
        <Text size='sm'>
          An exciting flight in a Cessna 172 sightseeing airplane over the
          neighborhood of the airfield. The flight includes performance of
          simple aerobatics figures and short-term weightlessness mode.
        </Text>
      </Stack>
    </Card>
  )
}

const leadingIconProps: BoxProps & IconProps = {
  c: 'gray.9',
  className: 'icon-size-lg',
}

function TourOptions() {
  return (
    <Stack gap={0}>
      <Card p={rem(20)} radius='lg' shadow='xl'>
        <Text fw='700' mb='md' size='lg'>
          Tour options
        </Text>

        <Card px={0} py='xs' radius='lg'>
          <Input
            classNames={{input: 'borderless'}}
            leftSection={
              <Box component={CalendarBlank} {...leadingIconProps} />
            }
            placeholder='Where to find an airplane tour?'
            value='Saint-Petersburg'
            onChange={noop}
          />

          <Box pos='relative' />
          <Divider />
          <PassengersCount shadow='none' />
        </Card>
      </Card>
    </Stack>
  )
}

interface OptionSelectionSectionProps {
  options: string[]
  title: string
}

function OptionSelectionSection({options, title}: OptionSelectionSectionProps) {
  return (
    <Stack gap='md'>
      <Text fw='700' size='lg'>
        {title}
      </Text>

      <Chip.Group>
        <Group className='overflow-x-hidden' gap='xs' wrap='nowrap'>
          {options.map((option) => {
            return (
              <Badge
                key={option}
                c='black'
                className='shrink-0'
                classNames={{
                  label: styles.flightDurationOption,
                  root: 'cursor-pointer',
                }}
                color='gray.3'
                radius='md'
                size='xl'
                variant='filled'
              >
                {option}
              </Badge>
            )
          })}
        </Group>
      </Chip.Group>
    </Stack>
  )
}

function FlightDurationOptions() {
  const options = ['20 min', '30 min', '40 min', '50 min', '60 min']
  return <OptionSelectionSection options={options} title='Flight duration' />
}

function FlightStartTimeOptions() {
  const options = ['7:00', '8:00', '9:00', '10:00', '11:00']
  return <OptionSelectionSection options={options} title='Start of flight' />
}

function FlightRoute() {
  return (
    <Stack gap='md'>
      <Text fw='700' size='lg'>
        Flight route
      </Text>

      <Card bg='gray.1' p='sm' radius='lg'>
        <Group>
          <Box
            c='primary'
            className='icon-size-lg'
            component={AirplaneTakeoff}
          />
          <Text size='sm'>Airfield: Bychye Polye</Text>
        </Group>
      </Card>

      <Timeline active={3} bulletSize={11} lineWidth={2} px='md'>
        <Timeline.Item
          classNames={{
            itemTitle: styles.flightRouteTitle,
            itemBody: styles.flightRouteTitleBody,
          }}
          title='Kronstadt'
        />
        <Timeline.Item
          classNames={{
            itemTitle: styles.flightRouteTitle,
            itemBody: styles.flightRouteTitleBody,
          }}
          title='Gulf of Finland'
        />
        <Timeline.Item
          classNames={{
            itemTitle: styles.flightRouteTitle,
            itemBody: styles.flightRouteTitleBody,
          }}
          title='Forts'
        />
        <Timeline.Item
          classNames={{
            itemTitle: styles.flightRouteTitle,
            itemBody: styles.flightRouteTitleBody,
          }}
          title='Dam'
        />
      </Timeline>
    </Stack>
  )
}

function FlightOptions() {
  return (
    <Card>
      <Stack gap={rem(60)}>
        <FlightDurationOptions />
        <FlightStartTimeOptions />
        <FlightRoute />
      </Stack>
    </Card>
  )
}

function PilotInformation() {
  return (
    <Card>
      <Stack>
        <Text fw='700' size='lg'>
          Pilot information
        </Text>

        <Card bg='gray.1' p='md'>
          <Stack>
            <Group>
              <Avatar radius='md' size={rem(52)} />
              <Stack gap='xs'>
                <Text fw='500'>Oleg Samsonov</Text>
                <Group gap='xs'>
                  <Rating defaultValue={5} />
                  <Text fw='500' size='xs'>
                    5
                  </Text>
                </Group>
              </Stack>
            </Group>

            <Group wrap='nowrap'>
              <Card bg='gray.2' p='xs' radius='md' w='100%'>
                <Stack gap='xs'>
                  <Text c='gray.6' size='xs'>
                    Airplane
                  </Text>
                  <Text fw='500' size='xs'>
                    Cessna 172
                  </Text>
                </Stack>
              </Card>

              <Card bg='gray.2' p='xs' radius='md' w='100%'>
                <Stack gap='xs'>
                  <Text c='gray.6' size='xs'>
                    Hours flown
                  </Text>
                  <Text fw='500' size='xs'>
                    1 250 hours
                  </Text>
                </Stack>
              </Card>
            </Group>

            <Card bg='gray.2' p='xs' radius='md' w='100%'>
              <Stack gap='xs'>
                <Text c='gray.6' size='xs'>
                  License
                </Text>
                <Text fw='500' size='xs'>
                  Commercial Pilot's License - CPL
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Card>
      </Stack>
    </Card>
  )
}

export function CustomerReview() {
  return (
    <Card className='shrink-0' radius='md' shadow='xl'>
      <Stack gap='lg'>
        <Group gap='md'>
          <Avatar radius='md' size={rem(44)} />
          <Stack gap={rem(2)}>
            <Text fw='500' size='lg'>
              Ivan
            </Text>
            <Text c='gray.5' size='xs'>
              May 21, 2022
            </Text>
          </Stack>
        </Group>

        <Group gap='xs'>
          <Rating defaultValue={5} />
          <Text fw='500' size='xs'>
            5
          </Text>
        </Group>

        <Text size='sm'>
          The flights are excellent! The airfield is located in a picturesque
          place and there is a lot to admire from above.
        </Text>
      </Stack>
    </Card>
  )
}

function CustomerReviews() {
  return (
    <Card pos='relative'>
      <Stack gap='md'>
        <Text fw='700' size='lg'>
          Customer reviews
        </Text>

        <Stack className='overflow-hidden' h={320}>
          <CustomerReview />
          <CustomerReview />
        </Stack>

        <Button
          className={styles.allReviewsButton}
          radius='md'
          size='lg'
          variant='outline'
        >
          All reviews
        </Button>
      </Stack>
    </Card>
  )
}

function Terms() {
  return (
    <Text bg='gray.2' c='primary' px='xxxl' py='xxxl' size='sm' ta='center'>
      By continuing, you agree to the terms of use and privacy policy
    </Text>
  )
}

function Footer() {
  return (
    <Button className='shrink-0' mx='md' radius='md' size='lg'>
      Book for 10,000 ₽
    </Button>
  )
}

export function AirTour() {
  return (
    <IOSScreen variant='light'>
      <Stack h='100%'>
        <Header />
        <ScrollableContent h='100%'>
          <Stack>
            <Info />
            <TourOptions />
            <FlightOptions />
            <PilotInformation />
            <CustomerReviews />
            <Terms />
          </Stack>
        </ScrollableContent>
        <Footer />
      </Stack>
    </IOSScreen>
  )
}

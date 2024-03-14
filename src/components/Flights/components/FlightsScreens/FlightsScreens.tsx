import {NoInternet, Splash} from '@flights/components/screens/general'
import {Grid, Group} from '@mantine/core'
import type {FC} from 'react'
import React from 'react'

import {PhoneNumberEntry} from '@/components/Flights/components/screens/authentication'

const screens = [
  {
    title: 'common',
    screens: [Splash, NoInternet],
  },
  {
    title: 'authentication',
    screens: [PhoneNumberEntry],
  },
]

export function FlightsScreens() {
  const content = screens
    .reduce<FC[]>((prev, curr) => prev.concat(curr.screens), [])
    .map((Screen, index) => {
      return (
        <Grid.Col key={index} span={{xs: 12, md: 6, lg: 4}}>
          <Group className='shrink-0' justify='center'>
            <Screen />
          </Group>
        </Grid.Col>
      )
    })

  return <Grid>{content}</Grid>
}

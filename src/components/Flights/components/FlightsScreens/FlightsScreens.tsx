import {
  ConfirmationCode,
  Home,
  NameEntry,
  NoInternet,
  PhoneNumberEntry,
  Splash,
} from '@flights/components/screens'
import {Grid, Group} from '@mantine/core'
import type {FC} from 'react'
import React from 'react'

const screens = [
  {
    title: 'common',
    screens: [Splash, NoInternet],
  },
  {
    title: 'authentication',
    screens: [
      PhoneNumberEntry,
      NameEntry /* DateOfBirthSelection */,
      ConfirmationCode,
    ],
  },
  {title: 'home screen and search', screens: [Home]},
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

  return <Grid py='xl'>{content}</Grid>
}

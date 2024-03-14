import {Grid, Group} from '@mantine/core'
import React from 'react'

import {NoInternet} from '../NoInternet'
import {Splash} from '../Splash'

const screens = [Splash, NoInternet]

export function FlightsScreens() {
  const content = screens.map((Screen, index) => {
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

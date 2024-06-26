import {Carousel} from '@mantine/carousel'
import {Card, rem, Stack, Text} from '@mantine/core'
import {range} from 'lodash-es'
import React from 'react'

import styles from './HelpfulInformation.module.scss'

function Content() {
  return (
    <Carousel slideSize='30.333333%'>
      {range(0, 20).map((index) => {
        return (
          <Carousel.Slide key={index}>
            <Card
              bg='gray.2'
              className={styles.slide}
              h={rem(135)}
              p={0}
              radius='lg'
              w='100%'
            />
          </Carousel.Slide>
        )
      })}
    </Carousel>
  )
}

export function HelpfulInformation() {
  return (
    <Stack>
      <Text fw='700' size='xl'>
        Helpful information
      </Text>

      <Content />
    </Stack>
  )
}

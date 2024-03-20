import {Box, Card, Group, rem, Stack, Text} from '@mantine/core'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScrollableContent} from '@/components/common/ScrollableContent'
import {CustomerReview} from '@/components/Flights/components/screens'

import styles from './CustomerReviews.module.scss'

function Header() {
  return (
    <Group className={styles.header} justify='space-between'>
      <Box className='icon-size-md' component={ArrowLeft} />
      <Text fw='500' size='md'>
        Customer reviews
      </Text>
      <Box className='icon-size-md' />
    </Group>
  )
}

export function CustomerReviews() {
  return (
    <IOSScreen variant='dark'>
      <Stack component={Card} flex={1} gap='md' mt={rem(21 + 40)} pb={0} px={0}>
        <Header />
        <ScrollableContent h='calc(100%)'>
          <Stack pb='md' px='md' py='xxxl'>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </Stack>
        </ScrollableContent>
      </Stack>
    </IOSScreen>
  )
}

import {Card, rem, Stack} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScrollableContent} from '@/components/common/ScrollableContent'
import {ScreenHeader} from '@/components/Flights/components/common'
import {CustomerReview} from '@/components/Flights/components/screens'

export function CustomerReviews() {
  return (
    <IOSScreen variant='dark'>
      <Stack component={Card} flex={1} gap='md' mt={rem(21 + 40)} pb={0} px={0}>
        <ScreenHeader title='Customer reviews' />
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

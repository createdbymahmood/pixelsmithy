import {rem, Stack} from '@mantine/core'
import React from 'react'

import {IOSScreen} from '@/components/common/IOSScreen/IOSScreen'
import {ScrollableContent} from '@/components/common/ScrollableContent'
import {ScreenHeader} from '@/components/Flights/components/common'
import {CustomerReview} from '@/components/Flights/components/screens'

export function CustomerReviews() {
  const homeIndicatorSize = 34
  const screenHeaderSize = 24
  const contentOffset = 40
  /* prettier-ignore */
  const contentHeight = `calc(100% - (${rem(homeIndicatorSize + screenHeaderSize + contentOffset)} + var(--mantine-spacing-xxxl)))`

  return (
    <IOSScreen variant='dark'>
      <Stack gap='md' h='100%' mt={rem(63)} pb={0} px='md'>
        <ScreenHeader title='Customer reviews' />
        <ScrollableContent
          h={contentHeight}
          mx='calc(var(--mantine-spacing-md) * -1)'
          px='md'
        >
          <Stack>
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

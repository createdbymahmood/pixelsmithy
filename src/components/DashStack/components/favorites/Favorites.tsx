'use client'

import {PageContent, PageHeader, Product} from '@dash-stack/components'
import {SimpleGrid} from '@mantine/core'
import {range} from 'lodash-es'
import React from 'react'

export function Favorites() {
  const content = range(0, 9).map((index) => {
    return <Product key={index} />
  })

  return (
    <PageContent>
      <PageHeader>Favorites</PageHeader>
      <SimpleGrid cols={3}>{content}</SimpleGrid>
    </PageContent>
  )
}

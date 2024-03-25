import {Group} from '@mantine/core'
import React from 'react'

import {Product} from '../Product'

export function ProductsCarousel() {
  return (
    <Group wrap='nowrap'>
      <Product />
      <Product />
      <Product />
    </Group>
  )
}

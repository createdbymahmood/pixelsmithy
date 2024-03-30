import {VStack} from '@chakra-ui/react'
import React from 'react'

import {PageHeader} from '@/components/preline/components'

export function Accordion() {
  return (
    <VStack>
      <PageHeader
        badge='Global Component'
        category='Components'
        description='Build vertically collapsing accordions.'
        title='Accordion'
      />
    </VStack>
  )
}

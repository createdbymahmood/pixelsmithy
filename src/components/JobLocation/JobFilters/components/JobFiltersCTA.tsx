import {Button, Group} from '@mantine/core'
import React from 'react'

export function JobFiltersCTA() {
  return (
    <Group>
      <Button radius='md' size='sm'>
        Apply
      </Button>
      <Button color='gray' radius='md' size='sm'>
        Reset
      </Button>
    </Group>
  )
}

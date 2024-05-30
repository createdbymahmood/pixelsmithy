import {Button, Group, Text} from '@mantine/core'
import {CaretLeft, CaretRight} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function TablePagination() {
  return (
    <Group justify='space-between'>
      <Text c='gray.7' fw='600' size='sm'>
        Showing 1-12 of 1,253
      </Text>

      <Button.Group>
        <Button px='xs' py={0} radius='md' size='xs' variant='default'>
          <CaretLeft className='icon-size-sm' weight='bold' />
        </Button>

        <Button px='xs' py={0} radius='md' size='xs' variant='default'>
          <CaretRight className='icon-size-sm' weight='bold' />
        </Button>
      </Button.Group>
    </Group>
  )
}

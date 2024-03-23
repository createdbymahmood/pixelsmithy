import type {BoxProps} from '@mantine/core'
import {ActionIcon, Box, Card, Divider, Input, Stack} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {ArrowsDownUp, MapPin} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import styles from './SwappableDepartureArrivalSearchInput.module.scss'

const leadingIconProps: BoxProps & IconProps = {
  c: 'gray.9',
  className: 'icon-size-lg',
}

export function SwappableDepartureArrivalSearchInput() {
  return (
    <Card p={0} shadow='xl'>
      <Stack gap={0}>
        <Input
          classNames={{input: 'borderless'}}
          leftSection={<Box component={MapPin} {...leadingIconProps} />}
          placeholder='From where?'
        />

        <Divider />

        <Card className={styles.swap} p={0} shadow='xl'>
          <ActionIcon
            className={clsx('borderless')}
            tabIndex={-1}
            variant='default'
          >
            <Box className='icon-size-md' component={ArrowsDownUp} />
          </ActionIcon>
        </Card>

        <Input
          classNames={{input: 'borderless'}}
          leftSection={<Box component={MapPin} {...leadingIconProps} />}
          placeholder='Where to?'
        />
      </Stack>
    </Card>
  )
}

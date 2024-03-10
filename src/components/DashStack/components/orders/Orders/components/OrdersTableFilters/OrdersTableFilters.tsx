'use client'

import {
  Box,
  Button,
  Card,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
} from '@mantine/core'
import {DatePicker} from '@mantine/dates'
import {useDisclosure} from '@mantine/hooks'
import {CaretDown, Funnel} from '@phosphor-icons/react/dist/ssr'
import React, {useState} from 'react'

import styles from './OrdersTableFilters.module.scss'

function FilterIcon() {
  return (
    <Box className={styles.filterItem}>
      <Funnel className='icon-size-lg' />
    </Box>
  )
}

function FilterDescription() {
  return (
    <Box className={styles.filterItem}>
      <Text fw='700' size='sm'>
        Filter by
      </Text>
    </Box>
  )
}

function DateFilter() {
  const [value, setValue] = useState<Date[]>([])
  const [opened, fns] = useDisclosure(false)

  return (
    <Box className={styles.filterItem}>
      <Popover
        opened={opened}
        position='bottom'
        radius='lg'
        shadow='md'
        width={200}
      >
        <Popover.Target>
          <Group className='cursor-pointer' gap='sm' onClick={fns.open}>
            <Text c='black' fw='700'>
              Date
            </Text>
            <CaretDown />
          </Group>
        </Popover.Target>

        <Popover.Dropdown miw='fit-content'>
          <Stack align='center'>
            <DatePicker
              size='md'
              type='multiple'
              value={value}
              onChange={setValue}
            />
            <Divider w='100%' />
            <Text size='sm'>*You can choose multiple date</Text>
            <Button color='primary.4' radius='md' onClick={fns.close}>
              Apply Now
            </Button>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Box>
  )
}

function OrderTypeFilter() {
  return <Box className={styles.filterItem}>OrderTypeFilter</Box>
}

function OrderStatusFilter() {
  return <Box className={styles.filterItem}>OrderStatusFilter</Box>
}

export function OrdersTableFilters() {
  return (
    <Card bg='white' className={styles.filters} p={0}>
      <Group gap={0}>
        <FilterIcon />
        <FilterDescription />
        <DateFilter />
        <OrderTypeFilter />
        <OrderStatusFilter />
      </Group>
    </Card>
  )
}

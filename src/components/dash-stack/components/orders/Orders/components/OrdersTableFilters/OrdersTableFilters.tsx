'use client'

import type {PopoverDropdownProps} from '@mantine/core'
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Group,
  Popover,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {DatePicker} from '@mantine/dates'
import {useDisclosure, useMergedRef} from '@mantine/hooks'
import {
  ArrowCounterClockwise,
  CaretDown,
  Funnel,
} from '@phosphor-icons/react/dist/ssr'
import {useClickAway} from 'ahooks'
import clsx from 'clsx'
import dayjs from 'dayjs'
import {head, isEmpty} from 'lodash-es'
import type {ReactNode} from 'react'
import React, {forwardRef, Fragment, useRef, useState} from 'react'

import styles from './OrdersTableFilters.module.scss'

function FilterIcon() {
  return (
    <Box className={styles.filterItem} lh={0}>
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

interface FilterFooterProps {
  close: () => void
  instructions: string
}

function FilterFooter({close, instructions}: FilterFooterProps) {
  return (
    <Fragment>
      <Divider w='100%' />
      <Text mx='auto' size='sm'>
        {instructions}
      </Text>
      <Button
        color='primary.4'
        radius='md'
        style={{alignSelf: 'center'}}
        onClick={close}
      >
        Apply Now
      </Button>
    </Fragment>
  )
}

interface CustomPopoverDropdownProps extends PopoverDropdownProps {
  close: () => void
}
const PopoverDropdown = forwardRef<HTMLDivElement, CustomPopoverDropdownProps>(
  function PopoverDropdown({children, close, ...props}, ref) {
    const outsideClickRef = useRef<HTMLDivElement>(null)
    useClickAway(close, outsideClickRef)
    const refs = useMergedRef(outsideClickRef, ref)

    return (
      <Popover.Dropdown ref={refs} {...props}>
        {children}
      </Popover.Dropdown>
    )
  },
)

type DisclojureHelpers = ReturnType<typeof useDisclosure>['1']

interface PopoverTargetProps extends Pick<DisclojureHelpers, 'toggle'> {
  children: ReactNode
  opened: boolean
}

function PopoverTarget({children, toggle, opened}: PopoverTargetProps) {
  return (
    <Popover.Target>
      <Group className={clsx('cursor-pointer')} gap='sm' onClick={toggle}>
        <Text c='black' fw='700' size='sm'>
          {children}
        </Text>

        <Box
          className={styles.popoverTargetChevron}
          component={CaretDown}
          data-rotate={opened}
          weight='bold'
        />
      </Group>
    </Popover.Target>
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
        closeOnClickOutside
      >
        <PopoverTarget opened={opened} toggle={fns.toggle}>
          {!isEmpty(value) ? dayjs(head(value)).format('DD MMM YYYY') : 'Date'}
        </PopoverTarget>

        <PopoverDropdown close={fns.close} miw='fit-content'>
          <Stack align='center'>
            <DatePicker
              size='md'
              type='multiple'
              value={value}
              onChange={setValue}
            />
            <FilterFooter
              close={fns.close}
              instructions='*You can choose multiple Order type'
            />
          </Stack>
        </PopoverDropdown>
      </Popover>
    </Box>
  )
}

function OrderTypeFilter() {
  const [opened, fns] = useDisclosure(false)
  const options = [
    'Health & Medicine',
    'Book & Stationary',
    'Services & Industry',
    'Fashion & Beauty',
    'Home & Living',
    'Electronics',
    'Mobile & Phone',
    'Accessories',
  ]

  return (
    <Box className={styles.filterItem}>
      <Popover
        opened={opened}
        position='bottom'
        radius='lg'
        shadow='md'
        width={200}
      >
        <PopoverTarget opened={opened} toggle={fns.toggle}>
          Order Type
        </PopoverTarget>

        <PopoverDropdown close={fns.close} miw='fit-content'>
          <Stack align='flex-start' maw={rem(521)}>
            <Title order={6}>Select Order Type</Title>
            <Group gap='sm'>
              {options.map((option) => (
                <Chip key={option} color='primary.4'>
                  {option}
                </Chip>
              ))}
            </Group>
            <FilterFooter
              close={fns.close}
              instructions='*You can choose multiple Order type'
            />
          </Stack>
        </PopoverDropdown>
      </Popover>
    </Box>
  )
}

function OrderStatusFilter() {
  const [opened, fns] = useDisclosure(false)

  const options = [
    'Comlpeted',
    'Processing',
    'Rejected',
    'On Hold',
    'In Transit',
  ]

  return (
    <Box className={styles.filterItem}>
      <Popover
        opened={opened}
        position='bottom'
        radius='lg'
        shadow='md'
        width={200}
      >
        <PopoverTarget opened={opened} toggle={fns.toggle}>
          Order Status
        </PopoverTarget>

        <PopoverDropdown close={fns.close} miw='fit-content'>
          <Stack align='flex-start' maw={rem(521)}>
            <Title order={6}>Select Order Status</Title>
            <Group gap='sm'>
              {options.map((option) => (
                <Chip key={option} color='primary.4'>
                  {option}
                </Chip>
              ))}
            </Group>
            <FilterFooter
              close={fns.close}
              instructions='*You can choose multiple Order status'
            />
          </Stack>
        </PopoverDropdown>
      </Popover>
    </Box>
  )
}

function ResetFilter() {
  return (
    <Group
      c='red'
      className={clsx(styles.filterItem, 'cursor-pointer')}
      gap='xs'
    >
      <Box component={ArrowCounterClockwise} weight='bold' />
      <Text fw='700' size='md'>
        Reset Filter
      </Text>
    </Group>
  )
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
        <ResetFilter />
      </Group>
    </Card>
  )
}

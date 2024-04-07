'use client'

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Group,
  Input,
  Radio,
  rem,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {DatePickerInput} from '@mantine/dates'
import {useCallbackRef, useDisclosure} from '@mantine/hooks'
import {FormViewSection} from '@modernize/components/common'
import {ArrowLeft} from '@phosphor-icons/react'
import {
  Bag,
  CalendarBlank,
  Money,
  Tag,
  Truck,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {head} from 'lodash-es'
import Link from 'next/link'
import React, {useState} from 'react'

import {GroupLink} from '@/components/common'
import {urls} from '@/constants'

import styles from './CreateCouponForm.module.scss'

function Actions() {
  return (
    <Group ml='auto'>
      <Button
        component={Link}
        href={urls.Modernize.dashboard.coupons.index}
        ml='auto'
        variant='default'
      >
        Cancel
      </Button>
      <Button component={Link} href={urls.Modernize.dashboard.coupons.index}>
        Save
      </Button>
    </Group>
  )
}

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={urls.Modernize.dashboard.coupons.index}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </GroupLink>
  )
}

function Header() {
  return (
    <Stack gap={0}>
      <BackButton />
      <Group>
        <Title order={5}>Create coupon</Title>
        <Actions />
      </Group>
    </Stack>
  )
}

function CouponInformation() {
  return (
    <FormViewSection
      description='Code will be used by users in checkout'
      title='Coupon Information'
    >
      <Group wrap='nowrap'>
        <Input.Wrapper label='Coupon Code' w='100%'>
          <Input placeholder='Shipfree20' />
        </Input.Wrapper>

        <Input.Wrapper label='Coupon Name' w='100%'>
          <Input placeholder='Free Shipping' />
        </Input.Wrapper>
      </Group>
    </FormViewSection>
  )
}

function useCheckboxToggleState() {
  const [isDisabled, {close, open}] = useDisclosure(false)

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      return open()
    }

    return close()
  }

  return {isDisabled, onCheckboxChange}
}

function CouponDuration() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
  const {isDisabled, onCheckboxChange} = useCheckboxToggleState()

  return (
    <Stack gap={rem(12)}>
      <DatePickerInput
        disabled={isDisabled}
        label='Duration'
        placeholder='Set Duration'
        rightSection={<CalendarBlank className='icon-size-md' />}
        type='range'
        value={value}
        onChange={setValue}
      />
      <Checkbox label="Don't set duration" onChange={onCheckboxChange} />
    </Stack>
  )
}

function UsageLimit() {
  const {isDisabled, onCheckboxChange} = useCheckboxToggleState()

  return (
    <Stack gap={rem(12)}>
      <Input.Wrapper label='Usage Limits'>
        <Input
          disabled={isDisabled}
          placeholder='Amount of uses'
          type='number'
        />
      </Input.Wrapper>
      <Checkbox
        c='black'
        label="Don't limit amout of uses"
        onChange={onCheckboxChange}
      />
    </Stack>
  )
}

const types = [
  {
    value: 'fixed',
    label: 'Fixed Discount',
    icon: Money,
  },
  {
    value: 'percentage',
    label: 'Percentage Discount',
    icon: Bag,
  },
  {
    value: 'free',
    label: 'Free Shipping',
    icon: Truck,
  },
  {
    value: 'price',
    label: 'Price Discount',
    icon: Tag,
  },
]

function CouponTypeSelection() {
  const [selected, setSelected] = useState(head(types)?.value)
  const onSelectValue = useCallbackRef((netxValue: string) => () => {
    return setSelected(netxValue)
  })
  const content = types.map((option) => {
    const value = option.value
    const Icon = option.icon
    const isSelected = selected === value
    return (
      <Group
        key={value}
        className={clsx('cursor-pointer', styles.couponType, {
          [styles.isSelected]: isSelected,
        })}
        justify='center'
        py={rem(24)}
        wrap='nowrap'
        onClick={onSelectValue(option.value)}
      >
        <Stack
          align='center'
          c={isSelected ? 'primary' : 'general.5'}
          gap={rem(12)}
          justify='center'
        >
          <Icon className='icon-size-md' weight='bold' />
          <Text>{option.label}</Text>
        </Stack>
      </Group>
    )
  })

  return (
    <Radio.Group value={selected} withAsterisk onChange={setSelected}>
      <SimpleGrid cols={4} spacing={rem(24)}>
        {content}
      </SimpleGrid>
    </Radio.Group>
  )
}

function CouponType() {
  return (
    <FormViewSection
      description='Type of coupon you want to create'
      title='Coupon Type'
    >
      <CouponTypeSelection />
      <SimpleGrid cols={2} spacing={rem(24)}>
        <Input.Wrapper label='Discount Value'>
          <Input type='number' />
        </Input.Wrapper>

        <Select label='Applies to' placeholder='Choose' />
        <CouponDuration />
        <UsageLimit />
      </SimpleGrid>
    </FormViewSection>
  )
}

function FormView() {
  return (
    <Stack gap={rem(30)}>
      <CouponInformation />
      <Divider />
      <CouponType />
    </Stack>
  )
}

export function CreateCouponForm() {
  return (
    <Stack gap={rem(30)}>
      <Header />
      <Card>
        <FormView />
      </Card>
      <Divider />
      <Actions />
    </Stack>
  )
}

'use client'

import {Box, Button, Group, Radio, rem, Stack, Text, Title} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import {
  CaretRight,
  SuitcaseSimple,
  UserCircle,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {head, isEqual} from 'lodash-es'
import React, {useState} from 'react'

import styles from './AccountTypeSelection.module.scss'

function Header() {
  return (
    <Stack align='center' gap={rem(5)}>
      <Title order={3}>Choose Account Type</Title>
      <Text c='dimmed' size='sm'>
        If you need more info, please check out Help Page.
      </Text>
    </Stack>
  )
}

const accountTypes = [
  {
    value: 'personal',
    title: 'Personal Account',
    description: 'If you need more info, please check it out.',
    icon: UserCircle,
  },
  {
    value: 'corporate',
    title: 'Corporate Account',
    description: 'Create corporate account to many users.',
    icon: SuitcaseSimple,
  },
]

function FormView() {
  const [selected, setSelected] = useState(head(accountTypes)?.value)

  const onSelectValue = useCallbackRef((netxValue: string) => () => {
    return setSelected(netxValue)
  })
  const options = accountTypes.map((accountType) => {
    const Icon = accountType.icon
    const isSelected = selected === accountType.value
    return (
      <Group
        key={accountType.title}
        align='flex-start'
        className={clsx(styles.accountType, {
          [styles.isSelected]: isEqual(selected, accountType.value),
        })}
        wrap='nowrap'
        onClick={onSelectValue(accountType.value)}
      >
        <Icon className='icon-size-xl' weight='duotone' />
        <Stack gap={rem(5)}>
          <Title order={5}>{accountType.title}</Title>
          <Text c='gray.6' size='sm'>
            {accountType.description}
          </Text>
        </Stack>
        {isSelected ? (
          <Radio value={accountType.value} />
        ) : (
          <Box h={rem(20)} w={20} />
        )}
      </Group>
    )
  })

  const rightSection = <CaretRight className='icon-size-xs' />

  return (
    <Radio.Group mt='md' value={selected} withAsterisk onChange={setSelected}>
      <Stack>
        {options}
        <Button radius='md' rightSection={rightSection} fullWidth>
          Continue
        </Button>
      </Stack>
    </Radio.Group>
  )
}

export function AccountTypeSelection() {
  return (
    <Stack>
      <Header />
      <FormView />
    </Stack>
  )
}

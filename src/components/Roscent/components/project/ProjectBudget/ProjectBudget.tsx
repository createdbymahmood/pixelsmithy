'use client'

import {
  Card,
  Checkbox,
  Group,
  Radio,
  rem,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Title,
} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import clsx from 'clsx'
import {isEqual} from 'lodash-es'
import type {ReactNode} from 'react'
import React, {Fragment, useState} from 'react'

import {StrippedProgress} from '@/components/Roscent/components/common/StrippedProgress'
import {SaveFloatingActionButons} from '@/components/Roscent/components/project/components'

import styles from './ProjectBudget.module.scss'

const usageOptions = [
  {
    title: 'Precise Usage',
    description: 'Less than $5,000 per transaction.',
    value: 'precise',
  },
  {
    title: 'Normal Usage',
    description: 'More than $5,000 per transaction.',
    value: 'normal',
  },
  {
    title: 'Extreme Usage',
    description: 'More than $50,000 per transaction.',
    value: 'extreme',
  },
]

function UsageCharacterSettings() {
  const [selected, setSelected] = useState('precise')

  const onSelectValue = useCallbackRef((netxValue: string) => () => {
    return setSelected(netxValue)
  })

  const options = usageOptions.map((option) => {
    return (
      <Group
        key={option.title}
        align='flex-start'
        className={clsx(styles.usage, {
          [styles.isSelected]: isEqual(selected, option.value),
        })}
        wrap='nowrap'
        onClick={onSelectValue(option.value)}
      >
        <Stack gap={rem(5)}>
          <Title order={5}>{option.title}</Title>
          <Text c='gray.6' size='sm'>
            {option.description}
          </Text>
        </Stack>
        <Radio value={option.value} />
      </Group>
    )
  })

  return (
    <Stack>
      <Title order={5}>Usage Character</Title>

      <Radio.Group value={selected} withAsterisk onChange={setSelected}>
        <SimpleGrid cols={{md: 3}} mt='xs'>
          {options}
        </SimpleGrid>
      </Radio.Group>
    </Stack>
  )
}

function Header() {
  return (
    <Stack component={Card}>
      <Group gap={rem(3)}>
        <Title order={4}>Budget</Title>
        <Text size='sm'>$22,300 of 36,000 Used</Text>
      </Group>

      <StrippedProgress lines={7} />

      <Text c='gray.5' size='sm'>
        18 Targets are remaining
      </Text>
    </Stack>
  )
}

interface SettingsCardProps {
  title: string
  children: ReactNode
}

export function SettingsCard({children, title}: SettingsCardProps) {
  const isValidElement = React.isValidElement(children)
  const Wrapper = isValidElement ? Fragment : Text
  const wrapperProps = isValidElement ? {} : {size: 'sm'}
  return (
    <Stack className={styles.settingsCard} component={Card} gap='xs'>
      <Text c='gray.5' size='xs'>
        {title}
      </Text>
      <Wrapper {...wrapperProps}>{children}</Wrapper>
    </Stack>
  )
}

function BudgetNotes() {
  return (
    <SettingsCard title='Budget Notes'>
      Organize your thoughts with an outline. Here’s the outlining strategy I
      use. I promise it works like a charm. Not only will it make writing your
      blog post easier, it’ll help you make your message.
    </SettingsCard>
  )
}

function ManageBudget() {
  return <SettingsCard title=' Manage Budget'>$36000.00</SettingsCard>
}

function OveruseNotificartionSettings() {
  return (
    <SettingsCard title='Overuse Notifications'>
      <Group gap='lg'>
        <Checkbox label='Email' defaultChecked />
        <Checkbox label='Phone' />
      </Group>
    </SettingsCard>
  )
}

function AllowChangesSettings() {
  const [checked, setChecked] = useState(true)

  const label = checked ? 'Allowed' : 'Not Allowed'
  return (
    <SettingsCard title='Allow Changes'>
      <Switch
        checked={checked}
        label={label}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    </SettingsCard>
  )
}

export function ProjectBudget() {
  return (
    <Stack gap='xl'>
      <Header />

      <Stack component={Card} pos='relative'>
        <UsageCharacterSettings />
        <BudgetNotes />
        <ManageBudget />
        <OveruseNotificartionSettings />
        <AllowChangesSettings />
        <SaveFloatingActionButons />
      </Stack>
    </Stack>
  )
}

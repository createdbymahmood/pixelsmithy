import type {MantineSize} from '@mantine/core'
import {Box, Group, Radio, rem, Stack, Text, Title} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import type {IconProps} from '@phosphor-icons/react'
import clsx from 'clsx'
import {head, isEqual} from 'lodash-es'
import React, {useState} from 'react'

import styles from './CardSelectionGroup.module.scss'

interface Option {
  value: string
  title: string
  description: string
  icon: React.FC<IconProps>
}
interface CardSelectionGroupProps {
  options: Option[]
  size?: MantineSize
}

export function CardSelectionGroup({
  options,
  size = 'lg',
}: CardSelectionGroupProps) {
  const [selected, setSelected] = useState(head(options)?.value)

  const onSelectValue = useCallbackRef((netxValue: string) => () => {
    return setSelected(netxValue)
  })

  const content = options.map((option) => {
    const value = option.value
    const Icon = option.icon
    const isSelected = selected === value
    return (
      <Group
        key={value}
        align='flex-start'
        className={clsx(styles.accountType, {
          [styles.isSelected]: isEqual(selected, option.value),
        })}
        p={size}
        wrap='nowrap'
        onClick={onSelectValue(option.value)}
      >
        <Icon className='icon-size-xl' weight='duotone' />
        <Stack gap={rem(5)}>
          <Title order={5}>{option.title}</Title>
          <Text c='gray.6' size='sm'>
            {option.description}
          </Text>
        </Stack>
        {isSelected ? (
          <Radio ml='auto' value={option.value} />
        ) : (
          <Box h={rem(20)} w={20} />
        )}
      </Group>
    )
  })

  return (
    <Radio.Group mt='md' value={selected} withAsterisk onChange={setSelected}>
      <Stack>{content}</Stack>
    </Radio.Group>
  )
}

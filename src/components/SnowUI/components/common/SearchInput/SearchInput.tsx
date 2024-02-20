import type {InputProps, InputStylesNames} from '@mantine/core'
import {Input} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {omit} from 'lodash-es'
import type {ComponentPropsWithoutRef} from 'react'

import {inter} from '@/components/SnowUI/layout/SnowUIProviders'

import styles from './SearchInput.module.scss'

interface SearchInputProps
  extends InputProps,
    Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'style'> {
  classNames?: Partial<Record<InputStylesNames, string>>
}

export function SearchInput({classNames, ...props}: SearchInputProps) {
  const inputClassName = classNames?.input
  return (
    <Input
      className={inter.className}
      classNames={{
        input: clsx(styles.searchInput, inputClassName),
        ...omit(classNames, 'input'),
      }}
      leftSection={<MagnifyingGlass />}
      placeholder='Search'
      size='xs'
      {...props}
    />
  )
}

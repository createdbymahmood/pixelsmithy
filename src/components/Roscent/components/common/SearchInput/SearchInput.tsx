import type {InputProps, InputStylesNames} from '@mantine/core'
import {Input} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {omit} from 'lodash-es'
import type {ComponentPropsWithoutRef} from 'react'

import {inter} from '@/lib/styles/font/inter'

import styles from './SearchInput.module.scss'

interface SearchInputProps
  extends InputProps,
    Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'style'> {
  classNames?: Partial<Record<InputStylesNames, string>>
}

export function SearchInput({classNames, ...props}: SearchInputProps) {
  const inputClassName = classNames?.input
  const wrapperClassName = classNames?.wrapper
  return (
    <Input
      className={inter.className}
      classNames={{
        wrapper: clsx(styles.searchWrapper, wrapperClassName),
        input: clsx(styles.searchInput, inputClassName),
        ...omit(classNames, ['input', 'wrapperClassName']),
      }}
      leftSection={<MagnifyingGlass />}
      placeholder='Search'
      size='xs'
      {...props}
    />
  )
}

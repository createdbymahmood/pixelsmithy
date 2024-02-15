import type {InputProps} from '@mantine/core'
import {Input} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {inter} from '@/components/SnowUI/layout/SnowUIProviders'

import styles from './SearchInput.module.scss'

interface SearchInputProps extends InputProps {}

export function SearchInput(props: SearchInputProps) {
  return (
    <Input
      className={inter.className}
      classNames={{
        input: styles.searchInput,
        wrapper: styles.searchInputWrapper,
      }}
      leftSection={<MagnifyingGlass />}
      placeholder='Search'
      size='xs'
      {...props}
    />
  )
}

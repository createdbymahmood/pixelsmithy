import type {InputProps} from '@mantine/core'
import {Input} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import type {ComponentPropsWithoutRef} from 'react'

import {inter} from '@/components/SnowUI/layout/SnowUIProviders'

import styles from './SearchInput.module.scss'

interface SearchInputProps
  extends InputProps,
    Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'style'> {}

export function SearchInput(props: SearchInputProps) {
  return (
    <Input
      className={inter.className}
      classNames={{
        input: styles.searchInput,
      }}
      leftSection={<MagnifyingGlass />}
      placeholder='Search'
      size='xs'
      {...props}
    />
  )
}

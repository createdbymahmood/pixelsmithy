import type {StackProps} from '@mantine/core'
import {Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './TableWrapper.module.scss'

interface TableWrapperProps extends StackProps {
  children: ReactNode
}

export function TableWrapper({children, ...props}: TableWrapperProps) {
  return (
    <Stack bg='white' className={styles.table} gap='sm' p='sm' {...props}>
      {children}
    </Stack>
  )
}

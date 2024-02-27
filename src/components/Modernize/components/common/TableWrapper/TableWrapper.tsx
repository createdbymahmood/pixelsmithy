import {Stack} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './TableWrapper.module.scss'

interface TableWrapperProps {
  children: ReactNode
}

export function TableWrapper({children}: TableWrapperProps) {
  return (
    <Stack bg='white' className={styles.table} gap='sm' p='sm'>
      {children}
    </Stack>
  )
}

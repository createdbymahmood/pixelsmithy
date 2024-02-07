import {Group, Menu} from '@mantine/core'
import {IconChevronDown} from '@tabler/icons-react'
import type {ReactNode} from 'react'
import React from 'react'

import styles from './MenuTarget.module.scss'

interface MenuTargetProps {
  children: ReactNode
  withChevron?: boolean
}

export function MenuTarget({children, withChevron = true}: MenuTargetProps) {
  return (
    <Menu.Target>
      <Group align='center' className={styles.menuTarget}>
        {children}

        {withChevron ? (
          <IconChevronDown className={styles.chevron} size={12} />
        ) : null}
      </Group>
    </Menu.Target>
  )
}

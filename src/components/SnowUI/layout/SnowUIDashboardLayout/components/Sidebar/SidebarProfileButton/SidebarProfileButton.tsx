import {Avatar, Group, rem, Text} from '@mantine/core'
import React from 'react'

import styles from './SidebarProfileButton.module.scss'

export function SidebarProfileButton() {
  return (
    <Group gap='xs'>
      <Avatar size={rem(24)} />
      <Text className={styles.text} size='sm'>
        ByeWind
      </Text>
    </Group>
  )
}

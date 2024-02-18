import {Group, Menu, rem, Text} from '@mantine/core'

import {MenuDropdownContent} from '@/components/JobLocation/components/Menu/MenuDropdownContent'
import {MenuTarget} from '@/components/JobLocation/components/Menu/MenuTarget'

import styles from './JobSortMenu.module.scss'

export function JobSortMenu() {
  return (
    <Menu position='bottom-end' shadow='md' width={200}>
      <MenuTarget>
        <Group className={styles.sort} gap={rem(5)}>
          <Text className={styles.action} size='sm'>
            Sort by:
          </Text>
          <Text className={styles.value} size='sm'>
            Newest Post
          </Text>
        </Group>
      </MenuTarget>
      <MenuDropdownContent />
    </Menu>
  )
}

import {Button, Card, Group} from '@mantine/core'
import React from 'react'

import styles from './SaveFloatingActionButons.module.scss'

export function SaveFloatingActionButons() {
  return (
    <Group
      className={styles.actionButtonsCard}
      component={Card}
      display='flex'
      wrap='nowrap'
    >
      <Button variant='light'>Cancel</Button>
      <Button>Save Changes</Button>
    </Group>
  )
}

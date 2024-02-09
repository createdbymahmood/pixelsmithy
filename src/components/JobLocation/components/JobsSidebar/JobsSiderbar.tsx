import {Box, Stack} from '@mantine/core'
import {IconApps, IconSettings, IconUser, IconVideo} from '@tabler/icons-react'

import styles from './JobsSiderbar.module.scss'

export function JobsSiderbar() {
  return (
    <div>
      <Box className={styles.sidebar}>
        <Stack>
          <IconApps className={styles.item} />
          <IconVideo className={styles.item} />
          <IconSettings className={styles.item} />
          <IconUser className={styles.item} />
        </Stack>
      </Box>
    </div>
  )
}

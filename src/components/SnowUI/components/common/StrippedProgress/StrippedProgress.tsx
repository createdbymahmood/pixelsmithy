import {Box, Group} from '@mantine/core'
import clsx from 'clsx'
import {range} from 'lodash-es'
import React from 'react'

import styles from './StrippedProgress.module.scss'

interface StrippedProgressProps {
  lines: number
}

export function StrippedProgress({lines}: StrippedProgressProps) {
  const content = range(1, lines).map((index) => {
    return <Box key={index} className={styles.progressStrippedLine} />
  })

  return (
    <Group className={styles.progress} gap='xs'>
      <Box
        className={clsx(
          styles.progressStrippedLine,
          styles.progressStrippedLineActive,
        )}
      />

      {content}
    </Group>
  )
}

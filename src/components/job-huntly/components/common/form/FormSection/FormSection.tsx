'use client'

import {Grid, rem, Stack, Text} from '@mantine/core'
import {isEmpty} from 'lodash-es'
import type {ReactNode} from 'react'

import styles from './FormSection.module.scss'

interface FormSectionProps {
  children: ReactNode
  title: string
  description?: string
}

export function FormSection({children, description, title}: FormSectionProps) {
  return (
    <Grid>
      <Grid.Col span={{xl: 4, lg: 6, md: 12}}>
        <Stack gap={0}>
          <Text fw='600'>{title}</Text>
          {!isEmpty(description) ? (
            <Text c='neutrals.5' mt={rem(5)}>
              {description}
            </Text>
          ) : null}
        </Stack>
      </Grid.Col>

      <Grid.Col
        className={styles.formSectionChildrenCol}
        span={{xl: 5, lg: 6, md: 12}}
      >
        {children}
      </Grid.Col>
    </Grid>
  )
}

'use client'

import type {GridColProps} from '@mantine/core'
import {Grid, rem, Stack, Text} from '@mantine/core'
import {isEmpty} from 'lodash-es'
import type {ReactNode} from 'react'

import styles from './FormSection.module.scss'

interface FormSectionProps {
  children: ReactNode
  title: string
  description?: string
  fluid?: boolean
}

export function FormSection({
  children,
  description,
  fluid = false,
  title,
}: FormSectionProps) {
  const childrenGridSpan: GridColProps['span'] = (() => {
    if (fluid) {
      return {xl: 8, lg: 8, md: 12}
    }

    return {xl: 5, lg: 6, md: 12}
  })()
  return (
    <Grid>
      <Grid.Col span={{xl: 4, lg: 4, md: 12}}>
        <Stack gap={0}>
          <Text fw='600'>{title}</Text>
          {!isEmpty(description) ? (
            <Text c='neutrals.4' mt={rem(5)}>
              {description}
            </Text>
          ) : null}
        </Stack>
      </Grid.Col>

      <Grid.Col
        className={styles.formSectionChildrenCol}
        span={childrenGridSpan}
      >
        {children}
      </Grid.Col>
    </Grid>
  )
}

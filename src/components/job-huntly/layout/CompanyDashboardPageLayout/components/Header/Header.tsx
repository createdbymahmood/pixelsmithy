import {Box, Button, Group, rem} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

import {Notification} from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/components'

import {CompanySwitch} from '../CompanySwitch'
import styles from './Header.module.scss'

export const COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT = rem(90.59)

export function Header() {
  return (
    <Group
      bg='white'
      className={clsx(styles.header)}
      gap='xxxl'
      justify='flex-end'
      px='xxxl'
      py='md'
    >
      <CompanySwitch />

      <Box ml='auto'>
        <Notification />
      </Box>

      <Button
        leftSection={
          <Box className='icon-size-md' component={Plus} weight='bold' />
        }
        size='md'
      >
        Post a job
      </Button>
    </Group>
  )
}

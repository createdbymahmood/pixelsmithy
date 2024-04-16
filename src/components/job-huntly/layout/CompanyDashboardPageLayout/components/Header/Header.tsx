import {Box, Button, Group, rem} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import {Notification} from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/components'
import {urls} from '@/constants'

import {CompanySwitch} from '../CompanySwitch'
import styles from './Header.module.scss'

export const COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT = rem(90.59)

export function Header() {
  const postAJobLeftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )
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
        component={Link}
        href={urls.JobHuntly.company.dashboard.jobs.create}
        leftSection={postAJobLeftSection}
        size='md'
      >
        Post a job
      </Button>
    </Group>
  )
}

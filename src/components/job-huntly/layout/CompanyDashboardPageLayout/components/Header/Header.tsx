'use client'
import {Box, Button, Group, rem} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import urlcat from 'urlcat'

import {Notification} from '@/components/job-huntly/layout/ApplicantDashboardPageLayout/components'
import {CALLBACK_URL_PARAM_KEY} from '@/constants'
import {JobhuntlyCompanyDashboardJobsCreate} from '@/lib/declarative-routing'

import {CompanySwitch} from '../CompanySwitch'
import styles from './Header.module.scss'

export const COMPANY_DASHBOARD_PAGE_LAYAOUT_HEADER_HEIGHT = rem(90.59)

export function Header() {
  const postAJobLeftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )
  const callbackUrl = usePathname()
  const disabled = callbackUrl === JobhuntlyCompanyDashboardJobsCreate()
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
        disabled={disabled}
        href={urlcat(JobhuntlyCompanyDashboardJobsCreate(), {
          [CALLBACK_URL_PARAM_KEY]: callbackUrl,
        })}
        leftSection={postAJobLeftSection}
        size='md'
      >
        Post a job
      </Button>
    </Group>
  )
}

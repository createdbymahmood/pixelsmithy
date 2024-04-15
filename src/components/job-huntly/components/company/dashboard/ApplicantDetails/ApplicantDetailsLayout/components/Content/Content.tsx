import {Box, Paper, Tabs} from '@mantine/core'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useParams, useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'
import React from 'react'

import {TabLink} from '@/components/common'
import {urls} from '@/constants'

interface ContentProps {
  children: ReactNode
}

interface QueryParams extends Params {
  applicantId: string
}

export function Content({children}: ContentProps) {
  const params = useParams<QueryParams>()

  const applicantProfileSections = [
    {
      key: 'profile',
      label: 'Applicant Profile',
      href: urls.JobHuntly.company.dashboard.applicants.profile(
        params.applicantId,
      ),
    },
    {
      key: 'resume',
      label: 'Resume',
      href: urls.JobHuntly.company.dashboard.applicants.resume(
        params.applicantId,
      ),
    },
    {
      key: 'hiring-progress',
      label: 'Hiring Progress',
      href: urls.JobHuntly.company.dashboard.applicants.hiringProgress(
        params.applicantId,
      ),
    },
    {
      key: 'interview-schedule',
      label: 'Interview Schedule',
      href: urls.JobHuntly.company.dashboard.applicants.interviewSchedule(
        params.applicantId,
      ),
    },
  ]

  const segment = useSelectedLayoutSegment()

  const content = applicantProfileSections.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {tab.label}
      </TabLink>
    )
  })

  return (
    <Paper withBorder>
      <Tabs key={segment} defaultValue={segment}>
        <Tabs.List pl='xl' pr='xl' pt='xl'>
          {content}
        </Tabs.List>

        <Box p='xl'>{children}</Box>
      </Tabs>
    </Paper>
  )
}

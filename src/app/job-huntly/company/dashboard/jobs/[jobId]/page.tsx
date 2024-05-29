'use client'

import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {redirect, useParams} from 'next/navigation'

import {JobhuntlyCompanyDashboardJobsJobIdApplicants} from '@/lib/declarative-routing'

export interface QueryParams extends Params {
  jobId: string
}

export default function JobApplicants() {
  const params = useParams<QueryParams>()

  return redirect(
    JobhuntlyCompanyDashboardJobsJobIdApplicants({jobId: params.jobId}),
  )
}

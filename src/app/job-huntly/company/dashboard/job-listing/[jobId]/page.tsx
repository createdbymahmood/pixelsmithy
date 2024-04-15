'use client'

import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {redirect, useParams} from 'next/navigation'

import {urls} from '@/constants'

export interface QueryParams extends Params {
  jobId: string
}

export default function JobApplicants() {
  const params = useParams<QueryParams>()
  return redirect(urls.JobHuntly.company.dashboard.jobApplicants(params.jobId))
}

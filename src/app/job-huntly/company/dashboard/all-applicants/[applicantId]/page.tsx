'use client'

import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import {redirect, useParams} from 'next/navigation'

import {urls} from '@/constants'

interface QueryParams extends Params {
  applicantId: string
}

export default function ApplicantDetails() {
  const params = useParams<QueryParams>()
  return redirect(
    urls.JobHuntly.company.dashboard.applicantDetailsProfile(
      params.applicantId,
    ),
  )
}

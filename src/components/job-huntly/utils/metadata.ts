import {find} from 'lodash-es'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {applicants} from '@/components/job-huntly/mock/applicants'
import {constructMetadata} from '@/utils/constructMetadata'

interface Props {
  params: {applicantId: string}
}

export function generateCompanyDashboardApplicantProfileMetadata({
  params,
}: Props): Metadata {
  const id = params.applicantId

  const applicant = find(applicants, {id})
  if (!applicant) return notFound()

  return constructMetadata({
    title: `${applicant.fullName} | Applicant Details`,
  })
}

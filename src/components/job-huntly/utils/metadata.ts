import {find} from 'lodash-es'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {applicants} from '@/components/job-huntly/mock/applicants'
import {jobs} from '@/components/job-huntly/mock/jobs'
import {constructMetadata} from '@/utils/constructMetadata'

interface CompanyDashboardApplicantProfileProps {
  params: {applicantId: string}
}

export function generateCompanyDashboardApplicantProfileMetadata(
  section: string,
) {
  return ({params}: CompanyDashboardApplicantProfileProps): Metadata => {
    const id = params.applicantId

    const applicant = find(applicants, {id})
    if (!applicant) return notFound()

    return constructMetadata({
      title: `${section} | ${applicant.fullName}`,
    })
  }
}
interface CompanyDashboardJobApplicantsProps {
  params: {jobId: string}
}

export function generateCompanyDashboardJobApplicantsMetadata(section: string) {
  return ({params}: CompanyDashboardJobApplicantsProps): Metadata => {
    const id = params.jobId

    const job = find(jobs, {id})
    if (!job) return notFound()

    return constructMetadata({
      title: `${section} | ${job.role}`,
    })
  }
}

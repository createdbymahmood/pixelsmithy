import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardApplicantsApplicantIdHiringprogress',
  params: z.object({
    applicantId: z.string(),
  }),
}

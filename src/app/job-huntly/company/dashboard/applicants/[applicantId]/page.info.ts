import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardApplicantsApplicantId',
  params: z.object({
    applicantId: z.string(),
  }),
}

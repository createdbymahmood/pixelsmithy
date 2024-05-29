import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardApplicantsApplicantIdProfile',
  params: z.object({
    applicantId: z.string(),
  }),
}

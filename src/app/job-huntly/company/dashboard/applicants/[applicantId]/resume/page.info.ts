import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardApplicantsApplicantIdResume',
  params: z.object({
    applicantId: z.string(),
  }),
}

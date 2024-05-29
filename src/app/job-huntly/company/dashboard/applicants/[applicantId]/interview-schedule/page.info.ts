import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardApplicantsApplicantIdInterviewschedule',
  params: z.object({
    applicantId: z.string(),
  }),
}

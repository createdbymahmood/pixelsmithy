import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardJobsJobIdApplicants',
  params: z.object({
    jobId: z.string(),
  }),
}

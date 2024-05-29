import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardJobsJobId',
  params: z.object({
    jobId: z.string(),
  }),
}

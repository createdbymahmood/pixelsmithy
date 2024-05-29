import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardJobsJobIdDetails',
  params: z.object({
    jobId: z.string(),
  }),
}

import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyCompanyDashboardJobsJobIdAnalytics',
  params: z.object({
    jobId: z.string(),
  }),
}

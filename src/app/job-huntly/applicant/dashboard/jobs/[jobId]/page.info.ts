import {z} from 'zod'

export const Route = {
  name: 'JobhuntlyApplicantDashboardJobsJobId',
  params: z.object({
    jobId: z.string(),
  }),
}

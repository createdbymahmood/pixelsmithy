import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdBudget',
  params: z.object({
    id: z.string(),
  }),
}

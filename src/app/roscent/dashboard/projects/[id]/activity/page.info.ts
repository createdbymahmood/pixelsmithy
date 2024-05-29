import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdActivity',
  params: z.object({
    id: z.string(),
  }),
}

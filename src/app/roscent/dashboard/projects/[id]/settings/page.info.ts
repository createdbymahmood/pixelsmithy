import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdSettings',
  params: z.object({
    id: z.string(),
  }),
}

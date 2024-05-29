import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsId',
  params: z.object({
    id: z.string(),
  }),
}

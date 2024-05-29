import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdUsers',
  params: z.object({
    id: z.string(),
  }),
}

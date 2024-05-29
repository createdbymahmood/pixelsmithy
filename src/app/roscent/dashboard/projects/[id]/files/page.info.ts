import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdFiles',
  params: z.object({
    id: z.string(),
  }),
}

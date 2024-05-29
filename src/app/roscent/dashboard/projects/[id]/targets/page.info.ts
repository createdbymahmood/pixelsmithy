import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdTargets',
  params: z.object({
    id: z.string(),
  }),
}

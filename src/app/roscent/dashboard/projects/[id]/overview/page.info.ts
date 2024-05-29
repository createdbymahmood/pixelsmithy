import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardProjectsIdOverview',
  params: z.object({
    id: z.string(),
  }),
}

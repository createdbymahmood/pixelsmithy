import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardUserprofileId',
  params: z.object({
    id: z.string(),
  }),
}

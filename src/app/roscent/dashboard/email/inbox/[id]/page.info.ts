import {z} from 'zod'

export const Route = {
  name: 'RoscentDashboardEmailInboxId',
  params: z.object({
    id: z.string(),
  }),
}

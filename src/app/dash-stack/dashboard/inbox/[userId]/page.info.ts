import {z} from 'zod'

export const Route = {
  name: 'DashstackDashboardInboxUserId',
  params: z.object({
    userId: z.string(),
  }),
}

import {z} from 'zod'

export const Route = {
  name: 'ModernizeDashboardCustomersInfoId',
  params: z.object({
    id: z.string(),
  }),
}

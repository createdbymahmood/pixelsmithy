import {z} from 'zod'

export const Route = {
  name: 'ModernizeDashboardKnowledgebaseArticleArticleId',
  params: z.object({
    articleId: z.string(),
  }),
}

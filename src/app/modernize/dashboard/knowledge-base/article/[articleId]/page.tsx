import {KnowledgeBaseArticle} from '@modernize/components'
import {articles} from '@/components/modernize/mock/articles'
import {find} from 'lodash-es'
import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import {constructMetadata} from '@/utils/constructMetadata'

interface Props {
  params: {articleId: string}
}

export function generateMetadata({params}: Props): Metadata {
  const id = params.articleId

  const article = find(articles, {id})
  if (!article) return notFound()

  return constructMetadata({
    title: article.title,
  })
}

export default function Article() {
  return <KnowledgeBaseArticle />
}

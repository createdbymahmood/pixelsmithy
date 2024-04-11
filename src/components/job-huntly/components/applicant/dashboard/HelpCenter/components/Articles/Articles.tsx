import {Box, Stack} from '@mantine/core'
import React from 'react'

import type {Article} from '../ArticleCard'
import {ArticleCard} from '../ArticleCard'

const articles: Article[] = [
  {
    title: 'What is My Applications?',
    content:
      'My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.',
  },
  {
    title: 'How to access my applications history',
    content:
      'To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobHuntly account to view this page.',
  },
  {
    title: 'Not seeing jobs you applied in your my application list?',
    content:
      "Please note that we are unable to track materials submitted for jobs you apply to via an employer's site. As a result, these applications are not recorded in the My Applications section of your JobHuntly account. We suggest keeping a personal record of all positions you have applied to externally. ",
  },
]

function List() {
  const content = articles.map((article) => {
    return <ArticleCard {...article} key={article.title} />
  })
  return <Stack w='100%'>{content}</Stack>
}

export function Articles() {
  return (
    <Box p='xxxl' w='100%'>
      <List />
    </Box>
  )
}

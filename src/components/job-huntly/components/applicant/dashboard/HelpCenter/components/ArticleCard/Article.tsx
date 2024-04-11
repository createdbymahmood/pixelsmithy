'use client'

import {Box, Button, Divider, Group, Paper, Stack, Text} from '@mantine/core'
import {DotsThree, ThumbsDown, ThumbsUp} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'

export interface Article {
  title: string
  content: string
}

interface ArticleCardProps extends Article {}

function Footer() {
  return (
    <Group>
      <Text c='neutrals.5'>Was this article helpful?</Text>
      <Button
        leftSection={
          <Box className='icon-size-sm' component={ThumbsUp} weight='bold' />
        }
        variant='outline'
      >
        Yes
      </Button>
      <Button
        leftSection={
          <Box className='icon-size-sm' component={ThumbsDown} weight='bold' />
        }
        variant='outline'
      >
        No
      </Button>
    </Group>
  )
}

export function ArticleCard({content, title}: ArticleCardProps) {
  return (
    <Paper component={Stack} p='xl' w='100%' withBorder>
      <Group justify='space-between'>
        <Text fw='600' size='xl'>
          {title}
        </Text>

        <Box
          className={clsx('icon-size-lg', 'cursor-pointer')}
          component={DotsThree}
          weight='bold'
        />
      </Group>
      <Text c='neutrals.5'>{content}</Text>
      <Divider />
      <Footer />
    </Paper>
  )
}

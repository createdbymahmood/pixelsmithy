'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  rem,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import {CommunityForm, Webinars} from '@modernize/components'
import {ArrowLeft} from '@phosphor-icons/react'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import {find, head} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {notFound, useParams} from 'next/navigation'

import {GroupLink} from '@/components/common'
import {articles} from '@/components/modernize/mock/articles'
import {ModernizeDashboardKnowledgebase} from '@/lib/declarative-routing'

import styles from './KnowledgeBaseArticle.module.scss'

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      href={ModernizeDashboardKnowledgebase()}
    >
      <ArrowLeft className='icon-size-md' weight='bold' />
      <Text size='sm'>Back</Text>
    </GroupLink>
  )
}

function SearchInput() {
  return (
    <TextInput
      leftSection={<MagnifyingGlass className='icon-size-md' />}
      placeholder='Search...'
      size='md'
      w='100%'
    />
  )
}

interface HeaderProps {
  title: string
}

function Header({title}: HeaderProps) {
  return (
    <Stack gap={0}>
      <BackButton />
      <Group>
        <Title order={5}>{title}</Title>
      </Group>
    </Stack>
  )
}

function Content() {
  return (
    <Stack gap={rem(4)}>
      <SearchInput />
      <Card>
        <Title order={6}>Introduction to Product</Title>
        <Text mt={rem(24)}>
          Bolt is content management system, or CMS. Subscription includes
          content hosting, professionally designed layouts, 24/7 support, and
          access to our user-friendly platform for managing your business. You
          can use bolt to create management systems.
        </Text>

        <Card bg='general.0' mt={rem(24)}>
          <Text
            c='general.5'
            className='white-space-pre-line'
          >{`Recommended:\nYou can learn faster by looking some onboarding videos in video gallery.`}</Text>
        </Card>
        <Divider mt={rem(28)} />
        <Title mt={rem(40)} order={6}>
          Starting Guide
        </Title>

        <Text mt={rem(24)}>
          You can choose from a range of billing plans to get your idea working,
          whether you’re starting with a website or launching a new business.
        </Text>

        <Stack gap={rem(20)} mt={rem(20)}>
          <Group wrap='nowrap'>
            <Avatar size={rem(36)}>1</Avatar>
            <Text>
              All billing plans are available on monthly and annual payment
              cycles. On an annual billing cycle, the average monthly cost is
              lower, and you can get a 3 months free.
            </Text>
          </Group>

          <Group wrap='nowrap'>
            <Avatar size={rem(36)}>2</Avatar>
            <Text>
              Upgrade to paid service to make your site public. If you need more
              time to design your site before going live, you can hide it behind
              a password.
            </Text>
          </Group>

          <Group wrap='nowrap'>
            <Avatar size={rem(36)}>3</Avatar>
            <Text>
              Site has a trial period. Trial period is free two-week period
              where you can explore the platform, upload content, experiment
              with ecommerce website.
            </Text>
          </Group>
        </Stack>

        <Divider mt={rem(28)} />
        <Title mt={rem(40)} order={6}>
          Additional Information
        </Title>

        <Tabs defaultValue='onboarding' mt={rem(28)}>
          <Tabs.List>
            <Tabs.Tab value='onboarding'>Onboarding</Tabs.Tab>
            <Tabs.Tab value='tutorials'>Tutorials</Tabs.Tab>
            <Tabs.Tab value='guides-for-beginners'>
              Guides for Beginners
            </Tabs.Tab>
          </Tabs.List>

          <Text>
            In addition to our guides and video tutorials, we offer webinars to
            help you get comfortable and explore our product functionality. In
            our webinars, we walk you through the basics of setting up and
          </Text>

          <Text mt={rem(20)}>
            growing your business. After it ends, we'll email you a video link
            to the webinar so you can remember everything you have learn
            anytime. If you can't attend the webinar at its scheduled time, you
            can watch it later.
          </Text>
        </Tabs>

        <Divider mt={rem(28)} />
        <Title mt={rem(40)} order={6}>
          Was this article helpfull?
        </Title>

        <Group mt={rem(20)}>
          <Button variant='default'>Yes</Button>
          <Button variant='default'>No</Button>
        </Group>

        <Text c='general.5' mt={rem(12)} size='xs'>
          50 people find this article helpfull
        </Text>
      </Card>
    </Stack>
  )
}

const items = [
  'Introduction to Product',
  'Tutorials for Beginners',
  'Moving to Bolt System',
  'Accessibility',
  'Content Management',
  'Generating Reports',
]

function Sidebar() {
  return (
    <Box>
      <Tabs
        classNames={{list: styles.list, tab: styles.tab}}
        defaultValue={head(items)}
        orientation='vertical'
      >
        <Tabs.List>
          {items.map((tab) => {
            return (
              <Tabs.Tab key={tab} value={tab}>
                {tab}
              </Tabs.Tab>
            )
          })}
        </Tabs.List>
      </Tabs>
    </Box>
  )
}

interface QueryParams extends Params {
  articleId: string
}

export function KnowledgeBaseArticle() {
  const params = useParams<QueryParams>()
  const article = find(articles, {id: params.articleId})
  if (!article) return notFound()

  return (
    <Grid gutter={rem(30)}>
      <Grid.Col span={3}>
        <Header title={article.title} />
        <Box mt={rem(30)}>
          <Sidebar />
        </Box>
      </Grid.Col>

      <Grid.Col span={9}>
        <Content />

        <Group gap={rem(30)} mt={rem(30)} wrap='nowrap'>
          <CommunityForm />
          <Webinars />
        </Group>
      </Grid.Col>
    </Grid>
  )
}

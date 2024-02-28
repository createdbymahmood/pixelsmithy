import {
  Anchor,
  Box,
  Button,
  Card,
  Divider,
  Group,
  rem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'

function Header() {
  return <Title order={5}>Knowledge Base</Title>
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

const articles = [
  {
    id: '1',
    title: 'Getting Started',
    sections: [
      'Guide to get started faster',
      'Video tutorials for beginners',
      'Moving to Bolt system',
    ],
  },
  {
    id: '2',
    title: 'Personal Settings',
    sections: [
      'Setting up your profile',
      'Changing business name',
      'Changing email address',
    ],
  },
  {
    id: '3',
    title: 'Billing',
    sections: ['Payment declined', 'Get a refund', 'Subscriptions'],
  },
  {
    id: '4',
    title: 'Commerce',
    sections: ['Add products', 'Selling guide', 'Create categories'],
  },
]

interface Article {
  id: string
  title: string
  sections: string[]
}
interface ArticleProps extends Article {}

function ArticleCard({id, sections, title}: ArticleProps) {
  const content = (() => {
    const result = sections.map((section) => (
      <Text key={section} size='sm'>
        {section}
      </Text>
    ))

    result.push(
      <Anchor key='more' c='primary.7' mt={rem(20)} size='sm' underline='never'>
        More Tutorials
      </Anchor>,
    )
    return result
  })()

  return (
    <Card p={rem(28)}>
      <Stack gap={0}>
        <Skeleton h={rem(140)} mx='auto' w={rem(140)} />
        <Title mt={rem(28)} order={6}>
          {title}
        </Title>
        <Stack gap={rem(12)} mt={rem(24)}>
          {content}
        </Stack>
      </Stack>
    </Card>
  )
}

function Articles() {
  const content = articles.map((article) => {
    return <ArticleCard key={article.title} {...article} />
  })

  return (
    <SimpleGrid cols={4} spacing={rem(30)}>
      {content}
    </SimpleGrid>
  )
}

function CommunityForm() {
  return (
    <Card w='100%'>
      <Title order={6}>Community Forum</Title>
      <Text mt={rem(12)} size='sm'>
        Get help from community members, ask any questions and get answers
        faster.
      </Text>

      <Anchor c='primary.7' mt={rem(20)} size='sm' underline='never'>
        Join Community
      </Anchor>
    </Card>
  )
}

function Webinars() {
  return (
    <Card w='100%'>
      <Title order={6}>Webinars</Title>
      <Text mt={rem(12)} size='sm'>
        Join our series of webinars where you can ask questions live and see a
        presentation.
      </Text>

      <Anchor c='primary.7' mt={rem(20)} size='sm' underline='never'>
        Register
      </Anchor>
    </Card>
  )
}

function Help() {
  return (
    <Stack align='center' gap={0}>
      <Title order={5}>Still Need Help?</Title>
      <Text c='general.5' mt={rem(8)}>
        Get in touch with us and we will be happy to help you out!
      </Text>
      <Button mt={28} size='md'>
        Contact Support
      </Button>
    </Stack>
  )
}

export function KnowledgeBaseContent() {
  return (
    <Stack gap={0}>
      <Header />
      <Box mt={rem(54)}>
        <SearchInput />
      </Box>

      <Box mt={rem(6)}>
        <Articles />
        <Group gap={rem(30)} mt={rem(30)} wrap='nowrap'>
          <CommunityForm />
          <Webinars />
        </Group>
      </Box>

      <Divider mt={rem(30)} />

      <Box mt={rem(35)}>
        <Help />
      </Box>
    </Stack>
  )
}

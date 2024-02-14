import type {MantineColor} from '@mantine/core'
import {
  Avatar,
  Card,
  Group,
  Progress,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ChatText, Paperclip} from '@phosphor-icons/react'

import styles from './ProjectTargets.module.scss'

interface ProjectTargetHeaderProps {
  title: string
  count: number
  progressColor: MantineColor
}

function ProjectTargetHeader({
  count,
  progressColor,
  title,
}: ProjectTargetHeaderProps) {
  return (
    <Stack gap='xs'>
      <Group gap={rem(5)}>
        <Text className={styles.sectionTitle} pl='sm' size='sm'>
          {title}
        </Text>
        <Text c='gray.6' className={styles.sectionTitle} size='sm'>
          {count}
        </Text>
      </Group>
      <Progress color={progressColor} size={rem(4)} value={100} />
    </Stack>
  )
}

interface ProjectTargetCardProps {
  tag: string
  title: string
  descritpion: string

  count: {
    comments: number

    attachments: number
  }
}

function ProjectTargetCard({
  count,
  descritpion,
  tag,
  title,
}: ProjectTargetCardProps) {
  return (
    <Card>
      <Stack gap={rem(8)}>
        <Text className={styles.tag} size='xs'>
          {tag}
        </Text>
        <Title order={5}>{title}</Title>
        <Text className={styles.description} size='xs'>
          {descritpion}
        </Text>

        <Group>
          <Avatar size={24} />

          <Group ml='auto'>
            <Group align='center' gap={rem(5)}>
              <Paperclip className={styles.icon} size={16} />
              <Text c='gray.6' size='xs'>
                {count.attachments}
              </Text>
            </Group>

            <Group align='center' gap={rem(5)}>
              <ChatText className={styles.icon} size={16} />
              <Text c='gray.6' size='xs'>
                {count.comments}
              </Text>
            </Group>
          </Group>
        </Group>
      </Stack>
    </Card>
  )
}

const targets: ProjectTargetCardProps[] = [
  {
    tag: 'Technical Debt Reduction',
    title: 'Meeting with customer',
    descritpion:
      'Reduce technical debt by refactoring legacy code and improving architecture design.',
    count: {
      attachments: 6,
      comments: 12,
    },
  },
  {
    tag: 'Code Quality',
    title: 'Sales report page',
    descritpion:
      'Increase code quality through code reviews and automated testing.',
    count: {attachments: 8, comments: 15},
  },
  {
    tag: 'Performance Optimization',
    title: 'Branding Logo',
    descritpion:
      'Improve software performance by optimizing algorithms and system resources.',
    count: {attachments: 2, comments: 15},
  },
  {
    title: 'User Module Testing',
    tag: 'User Experience',
    descritpion:
      'Enhance user experience by incorporating user feedback and conducting usability testing.',
    count: {attachments: 9, comments: 19},
  },
]

export function ProjectTargets() {
  const content = targets.map((target) => {
    return <ProjectTargetCard key={target.descritpion} {...target} />
  })
  return (
    <SimpleGrid cols={{md: 3}} spacing='xl'>
      <Stack>
        <ProjectTargetHeader
          count={6}
          progressColor='green.2'
          title='Yet to start'
        />

        {content}
      </Stack>

      <Stack>
        <ProjectTargetHeader
          count={4}
          progressColor='indigo.2'
          title='In Progress'
        />
        {content}
      </Stack>

      <Stack>
        <ProjectTargetHeader
          count={8}
          progressColor='black'
          title='Completed'
        />
        {content}
      </Stack>
    </SimpleGrid>
  )
}

import type {MantineColor, StackProps} from '@mantine/core'
import {Button, Card, Checkbox, Group, rem, Stack, Text} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  EnvelopeSimple,
  PaperPlaneTilt,
  PencilSimple,
  Plus,
  SnapchatLogo,
  Star,
  Trash,
  Warning,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './EmailSidebar.module.scss'

function Header() {
  return (
    <Button
      color='primary.4'
      leftSection={<Plus weight='bold' />}
      radius='md'
      size='md'
      fullWidth
    >
      Compose
    </Button>
  )
}

interface Folder {
  title: string
  icon: React.FC<IconProps>
  count: number
}

const folders: Folder[] = [
  {
    title: 'Inbox',
    icon: EnvelopeSimple,
    count: 1253,
  },
  {
    title: 'Starred',
    icon: Star,
    count: 245,
  },
  {
    title: 'Sent',
    icon: PaperPlaneTilt,
    count: 24532,
  },
  {
    title: 'Draft',
    icon: PencilSimple,
    count: 9,
  },
  {
    title: 'Spam',
    icon: Warning,
    count: 14,
  },
  {
    title: 'Important',
    icon: SnapchatLogo,
    count: 18,
  },
  {
    title: 'Bin',
    icon: Trash,
    count: 9,
  },
]

interface FolderProps extends Folder {}

function Folder(props: FolderProps) {
  const Icon = props.icon
  return (
    <Card
      className={clsx('cursor-pointer', styles.folder)}
      component={Group}
      gap='xs'
      px='sm'
      py={rem(10)}
      radius='sm'
      style={{flexDirection: 'row'}}
      wrap='nowrap'
    >
      <Icon className='icon-size-md' />
      <Text fw='600' size='sm'>
        {props.title}
      </Text>

      <Text fw='600' ml='auto' size='sm'>
        {props.count}
      </Text>
    </Card>
  )
}

interface SectionProps extends StackProps {
  children: ReactNode
  title: string
}

function Section({children, title, ...props}: SectionProps) {
  return (
    <Stack gap={rem(4)} {...props}>
      <Text fw='700' mb='xs'>
        {title}
      </Text>
      {children}
    </Stack>
  )
}

function Folders() {
  const content = folders.map((folder) => {
    return <Folder key={folder.title} {...folder} />
  })

  return <Section title='My Email'>{content}</Section>
}

interface Label {
  title: string
  color: string
}

const labels: Label[] = [
  {
    title: 'Primary',
    color: 'var(--mantine-color-green-9)',
  },
  {
    title: 'Social',
    color: 'var(--mantine-color-primary-6)',
  },
  {
    title: 'Work',
    color: 'var(--mantine-color-orange-6)',
  },
  {
    title: 'Friends',
    color: 'var(--mantine-color-pink-6)',
  },
]

interface LabelProps extends Label {}

function Label(props: LabelProps) {
  return (
    <Checkbox
      color={props.color}
      fw='600'
      label={props.title}
      px='sm'
      py={rem(4)}
      styles={{input: {borderColor: props.color, borderWidth: rem(2)}}}
    />
  )
}

function Labels() {
  const content = labels.map((label) => {
    return <Label {...label} key={label.title} />
  })

  return (
    <Section gap={rem(12)} title='Label'>
      {content}
      <Group>
        <Button
          c='dimmed'
          className='cursor-pointer'
          leftSection={<Plus />}
          variant='white'
        >
          Create New Label
        </Button>
      </Group>
    </Section>
  )
}

export function EmailSidebar() {
  return (
    <Card h='100%' miw={rem(286)} p='md'>
      <PerfectScrollbar>
        <Stack gap='md'>
          <Header />
          <Folders />
          <Labels />
        </Stack>
      </PerfectScrollbar>
    </Card>
  )
}

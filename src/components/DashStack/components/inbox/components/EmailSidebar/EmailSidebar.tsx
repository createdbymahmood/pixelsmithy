'use client'

import type {StackProps} from '@mantine/core'
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
import {intersection, isEmpty, isEqual, isUndefined} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import numeral from 'numeral'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import {userId} from '@/components/DashStack/mock/user'
import {urls} from '@/constants'

import styles from './EmailSidebar.module.scss'

interface SectionProps extends StackProps {
  children: ReactNode
  title?: string
}

function Section({children, title, ...props}: SectionProps) {
  return (
    <Stack gap={rem(4)} {...props} px='md'>
      {!isUndefined(title) && (
        <Text fw='700' mb='xs'>
          {title}
        </Text>
      )}
      {children}
    </Stack>
  )
}

function Header() {
  return (
    <Section pt='md'>
      <Button
        color='primary.4'
        leftSection={<Plus weight='bold' />}
        radius='md'
        size='md'
        style={{flexShrink: 0}}
        fullWidth
      >
        Compose
      </Button>
    </Section>
  )
}

interface Folder {
  title: string
  icon: React.FC<IconProps>
  count: number
  segment: string[]
  href: string
}

const folders: Folder[] = [
  {
    title: 'Inbox',
    icon: EnvelopeSimple,
    count: 1253,
    segment: [userId],
    href: urls.DashStack.dashboard.inbox.index,
  },
  {
    title: 'Starred',
    icon: Star,
    count: 245,
    segment: ['starred'],
    href: urls.DashStack.dashboard.inbox.starred,
  },
  {
    title: 'Sent',
    icon: PaperPlaneTilt,
    count: 24532,
    segment: ['sent'],
    href: urls.DashStack.dashboard.inbox.sent,
  },
  {
    title: 'Draft',
    icon: PencilSimple,
    count: 9,
    segment: ['draft'],
    href: urls.DashStack.dashboard.inbox.draft,
  },
  {
    title: 'Spam',
    icon: Warning,
    count: 14,
    segment: ['spam'],
    href: urls.DashStack.dashboard.inbox.spam,
  },
  {
    title: 'Important',
    icon: SnapchatLogo,
    count: 18,
    segment: ['important'],
    href: urls.DashStack.dashboard.inbox.important,
  },
  {
    title: 'Bin',
    icon: Trash,
    count: 9,
    segment: ['bin'],
    href: urls.DashStack.dashboard.inbox.bin,
  },
]

interface FolderProps extends Folder {}

function Folder(props: FolderProps) {
  const Icon = props.icon
  const segment = useSelectedLayoutSegments()
  const isEqualToSegment = isEqual(segment, props.segment)

  const isActive =
    !isEmpty(intersection(segment, props.segment)) || isEqualToSegment

  return (
    <GroupLink
      className={clsx('cursor-pointer', styles.folder, {
        [styles.active]: isActive,
      })}
      component={Link}
      gap='xs'
      href={props.href}
      px='sm'
      py={rem(10)}
      style={{flexDirection: 'row'}}
      wrap='nowrap'
    >
      <Icon className='icon-size-md' />
      <Text fw='600' size='sm'>
        {props.title}
      </Text>

      <Text fw='600' ml='auto' size='sm'>
        {numeral(props.count).format('0,0')}
      </Text>
    </GroupLink>
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
    <Card className={styles.sidebar} h='100%' miw={rem(286)} p={0}>
      <Stack h='100%'>
        <Header />

        <PerfectScrollbar>
          <Stack>
            <Folders />
            <Labels />
          </Stack>
        </PerfectScrollbar>
      </Stack>
    </Card>
  )
}

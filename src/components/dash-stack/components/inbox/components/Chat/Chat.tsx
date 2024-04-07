'use client'

import type {BoxProps} from '@mantine/core'
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Input,
  rem,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  CaretLeft,
  DotsThreeVertical,
  Image,
  Microphone,
  Paperclip,
  PaperPlaneTilt,
  Printer,
  Star,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {useRouter} from 'next/navigation'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './Chat.module.scss'

function Header() {
  const router = useRouter()

  return (
    <Section className={styles.header}>
      <Group gap='sm'>
        <Card
          bg='gray.1'
          className='cursor-pointer'
          component={CaretLeft}
          h={rem(24)}
          p={rem(3)}
          radius='sm'
          w={rem(24)}
          weight='bold'
          onClick={() => router.back()}
        />
        <Title order={6}>Minerva Barnett</Title>
        <Badge color='pink.4' radius='sm' variant='light'>
          Friends
        </Badge>

        <Button.Group ml='auto'>
          <Button px='sm' radius='md' size='md' variant='default'>
            <Printer className='icon-size-md' weight='fill' />
          </Button>

          <Button px='sm' radius='md' size='md' variant='default'>
            <Star className='icon-size-md' weight='fill' />
          </Button>

          <Button px='sm' radius='md' size='md' variant='default'>
            <Trash className='icon-size-md' weight='fill' />
          </Button>
        </Button.Group>
      </Group>
    </Section>
  )
}

interface MessageProps {
  direction: 'LTR' | 'RTL'
  content: string
  type: 'image' | 'text'
}

function Message({content, direction, type}: MessageProps) {
  const isLTR = direction === 'LTR'
  const isText = type === 'text'

  return (
    <Group
      align='flex-end'
      className={clsx(styles.messageContainer, {[styles.rtl]: !isLTR})}
      gap='sm'
      w='fit-content'
      wrap='nowrap'
    >
      {isLTR ? (
        <Skeleton
          animate={false}
          className='shrink-0'
          h={rem(40)}
          w={rem(40)}
          circle
        />
      ) : null}

      <Box
        className={clsx(
          styles.message,
          {[styles.messageRTL]: !isLTR},
          {[styles.messageLTR]: isLTR},
          {[styles.messageRTLTextContent]: !isLTR && isText},
          {[styles.messageLTRTextContent]: isLTR && isText},
          {[styles.textContentMessage]: isText},
        )}
      >
        <Stack>
          <Text className={styles.messageText} size='sm'>
            {content}
          </Text>

          <Group gap='xs' ml='auto'>
            <Text size='xs'>6:30 pm</Text>

            <Box
              className={clsx('icon-size-md', 'cursor-pointer')}
              component={DotsThreeVertical}
              weight='bold'
            />
          </Group>
        </Stack>
      </Box>
    </Group>
  )
}

function ChatMessages() {
  return (
    <Section py='md'>
      <Stack>
        <Message
          content='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
          direction='LTR'
          type='text'
        />

        <Message
          content='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
          direction='RTL'
          type='text'
        />
        <Message
          content="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company."
          direction='LTR'
          type='text'
        />
      </Stack>
    </Section>
  )
}

function Compose() {
  return (
    <Section className={styles.footer} py='sm'>
      <Group c='gray.6' gap='sm' wrap='nowrap'>
        <Box
          className={clsx('icon-size-md', 'cursor-pointer')}
          component={Microphone}
          weight='fill'
        />
        <Input
          classNames={{input: styles.input}}
          placeholder='Write message'
          size='md'
          w='100%'
        />

        <Box
          className={clsx('icon-size-md', 'cursor-pointer')}
          component={Paperclip}
          weight='bold'
        />

        <Box
          className={clsx('icon-size-md', 'cursor-pointer')}
          component={Image}
          weight='fill'
        />

        <Button
          className='shrink-0'
          color='primary.4'
          radius='md'
          rightSection={
            <PaperPlaneTilt className='icon-size-md' weight='fill' />
          }
        >
          Send
        </Button>
      </Group>
    </Section>
  )
}

interface SectionProps extends BoxProps {
  children: ReactNode
}

function Section({children, ...props}: SectionProps) {
  return (
    <Box p='md' {...props}>
      {children}
    </Box>
  )
}

export function Chat() {
  return (
    <Card
      className={styles.content}
      component={Stack}
      gap={0}
      h='100%'
      p={0}
      w='100%'
    >
      <Header />

      <PerfectScrollbar>
        <ChatMessages />
      </PerfectScrollbar>

      <Compose />
    </Card>
  )
}

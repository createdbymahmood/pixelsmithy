import '@mantine/core/styles.css'
import '@/lib/styles/global.scss'

import {
  Container,
  Group,
  MantineProvider,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import clsx from 'clsx'
import Link from 'next/link'

import {StackLink} from '@/components/common'
import {applications, defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'
import {robotoMono} from '@/lib/styles/font/robotoMono'
import {robotoSlab} from '@/lib/styles/font/robotoSlab'

import styles from './Applications.module.scss'

const ApplicationsList = () => {
  const content = applications.map((application) => {
    return (
      <StackLink
        key={application.title}
        component={Link}
        gap={0}
        href={application.href}
        target='_blank'
      >
        <Text className={clsx(robotoSlab.className, styles.title)} size='xl'>
          {application.title}
        </Text>

        <Group align='baseline' gap='sm'>
          <Text className={inter.className} size='sm'>
            {application.description}
          </Text>

          <Text
            c='dimmed'
            className={robotoMono.className}
            mt={rem(5)}
            size='xs'
          >
            {application.info}
          </Text>
        </Group>
      </StackLink>
    )
  })

  return <Stack gap='lg'>{content}</Stack>
}

export function Applications() {
  return (
    <MantineProvider defaultColorScheme={defaultThemeColorScheme}>
      <Container py='xl'>
        <ApplicationsList />
      </Container>
    </MantineProvider>
  )
}

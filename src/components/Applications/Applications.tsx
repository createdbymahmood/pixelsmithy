import '@/lib/styles/global.scss'
import '@mantine/core/styles.css'

import {
  Box,
  Container,
  Group,
  MantineProvider,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import clsx from 'clsx'
import Link from 'next/link'

import {applications, defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'
import {robotoMono} from '@/lib/styles/font/robotoMono'
import {robotoSlab} from '@/lib/styles/font/robotoSlab'

import styles from './Applications.module.scss'

const ApplicationsList = () => {
  const content = applications.map((application) => {
    return (
      <Stack key={application.id}>
        <Box component={Link} href={application.href}>
          <Text className={clsx(robotoSlab.className, styles.title)} size='xl'>
            {application.title}
          </Text>

          <Group align='baseline' gap={rem(5)}>
            <Text className={inter.className} size='sm'>
              {application.description}
            </Text>

            <Text size='sm'>Using</Text>

            <Text
              c='dimmed'
              className={robotoMono.className}
              mt={rem(5)}
              size='xs'
            >
              {application.tools}
            </Text>
          </Group>
        </Box>
      </Stack>
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

import {Box, Container, MantineProvider, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

import {applications, defaultThemeColorScheme} from '@/constants'
import {inter} from '@/lib/styles/font/inter'
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
          <Text className={inter.className} size='sm'>
            {application.description}
          </Text>
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

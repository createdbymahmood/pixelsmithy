import {Box, Container, MantineProvider, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {Inter, Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

import {applications, defaultThemeColorScheme} from '@/constants'

import styles from './Applications.module.scss'

const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

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

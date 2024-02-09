import {Box, Container, MantineProvider, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {Inter, Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

import {defaultThemeColorScheme, projects} from '@/constants'

import styles from './Projects.module.scss'

const robotoSlab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const ProjectsList = () => {
  const content = projects.map((project) => {
    return (
      <Stack key={project.id}>
        <Box component={Link} href={project.href}>
          <Text className={clsx(robotoSlab.className, styles.title)} size='xl'>
            {project.title}
          </Text>
          <Text className={inter.className} size='sm'>
            {project.description}
          </Text>
        </Box>
      </Stack>
    )
  })

  return <Stack gap='lg'>{content}</Stack>
}

export function Projects() {
  return (
    <MantineProvider defaultColorScheme={defaultThemeColorScheme}>
      <Container py='xl'>
        <ProjectsList />
      </Container>
    </MantineProvider>
  )
}

import {Box, Container, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import {Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

import {urls} from '@/constants'

import styles from './Projects.module.scss'

const playfairDisplay = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})

const projects = [
  {
    id: 1,
    title: 'Job Location',
    description: 'A dashboard page',
  },
]

const ProjectsList = () => {
  return (
    <Stack gap='lg'>
      {projects.map((project) => {
        return (
          <Stack key={project.id}>
            <Box component={Link} href={urls.JobLocation.index}>
              <Text
                className={clsx(playfairDisplay.className, styles.title)}
                size='xl'
              >
                {project.title}
              </Text>
              <Text size='sm'>{project.description}</Text>
            </Box>
          </Stack>
        )
      })}
    </Stack>
  )
}

export function Projects() {
  return (
    <Container py='xl'>
      <ProjectsList />
    </Container>
  )
}

import {Box, Group, Stack, Text} from '@mantine/core'
import {IconBookmark, IconDots, IconForbid} from '@tabler/icons-react'
import Image from 'next/image'

import styles from './JobCard.module.scss'

function JobCardHeader() {
  return (
    <Group className={styles.header}>
      <Image alt='Icon' height={60} src='/next.svg' width={60} />
      <Stack gap='xs' maw={200}>
        <Text className={styles.title} size='xl'>
          Senior Product Designer, Growth
        </Text>
        <Text c='blue' size='sm'>
          Germany, Berlin
        </Text>
      </Stack>
      <Box className={styles.more} component={IconDots} ml='auto' />
    </Group>
  )
}

function JobCardBody() {
  return (
    <Stack className={styles.body}>
      <Text className={styles.location} size='sm'>
        Berlin, New, Germany
      </Text>

      <Group justify='space-between'>
        <Text size='sm'>Mid-Senior</Text>
        <Text size='sm'>Full-Time</Text>
        <Text size='sm'>1000$</Text>
      </Group>

      <Text className={styles.description} size='sm'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </Text>

      <Group>
        <Box className={styles.tag}>Design</Box>
        <Box className={styles.tag}>User Experience</Box>
        <Box className={styles.tag}>Senior</Box>
      </Group>
    </Stack>
  )
}

function JobCardFooter() {
  return (
    <Group className={styles.footer}>
      <Text className={styles.date} size='sm'>
        28 Match 2021
      </Text>

      <Group className={styles.actions} ml='auto'>
        <IconForbid />
        <IconBookmark />
      </Group>
    </Group>
  )
}

export function JobCard() {
  return (
    <Group className={styles.card}>
      <JobCardHeader />
      <JobCardBody />
      <JobCardFooter />
    </Group>
  )
}

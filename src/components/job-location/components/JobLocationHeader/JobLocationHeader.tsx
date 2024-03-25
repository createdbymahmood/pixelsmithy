import {Box, Grid, Group, Menu, rem, Stack, Text} from '@mantine/core'
import {IconApps, IconBellBolt, IconSeparator} from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'

import {MenuDropdownContent} from '@/components/job-location/components/Menu/MenuDropdownContent'
import {MenuTarget} from '@/components/job-location/components/Menu/MenuTarget'

import styles from './JobLocationHeader.module.scss'

function JobLocationHeaderNavbar() {
  return (
    <Group
      align='center'
      className={styles.navbarItems}
      justify='space-between'
    >
      <Text className={clsx(styles.navbarItem, styles.active)} size='sm'>
        Find Jobs
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Company Reviews
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Find Salaries
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Find Resumes
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Employers / Post Job
      </Text>
    </Group>
  )
}

function JobLocationHeaderNotifications() {
  return (
    <Box className={styles.notifications}>
      <Menu position='bottom-end' shadow='md' withArrow>
        <MenuTarget withChevron={false}>
          <IconBellBolt className={styles.notificationsTarget} />
        </MenuTarget>

        <MenuDropdownContent />
      </Menu>
    </Box>
  )
}

function JobLocationHeaderProfileMenu() {
  return (
    <Group className={styles.profile}>
      <Image alt='Profile Image' height={30} src='/next.svg' width={30} />

      <Stack gap={0}>
        <Text className={styles.greeting} size='xs'>
          Hello!
        </Text>

        <Menu position='bottom-end' shadow='md'>
          <MenuTarget>
            <Text fw='600' size='xs'>
              Mahmood Bagheri
            </Text>
          </MenuTarget>
          <MenuDropdownContent />
        </Menu>
      </Stack>
    </Group>
  )
}

export function JobLocationHeader() {
  return (
    <Box className={styles.header}>
      <Grid align='center' justify='space-between' px='md' py='lg'>
        <Grid.Col pr='xl' span={{md: 'content', xl: 3}}>
          <IconApps className={styles.logo} />
        </Grid.Col>

        <Grid.Col
          className={styles.navbarCol}
          maw={rem(800)}
          p={0}
          span='content'
        >
          <JobLocationHeaderNavbar />
        </Grid.Col>

        <Grid.Col ml='auto' span={{md: 'content'}}>
          <Group className={styles.actions} gap={0}>
            <JobLocationHeaderNotifications />
            <IconSeparator className={styles.separator} />
            <JobLocationHeaderProfileMenu />
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
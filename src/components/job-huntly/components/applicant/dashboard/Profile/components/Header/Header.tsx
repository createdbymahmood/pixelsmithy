import {
  Avatar,
  Badge,
  Box,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Flag, MapPin} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

import {EditButton} from '../common'
import styles from './Header.module.scss'

function Banner() {
  return (
    <Paper
      align='flex-start'
      bg='primary.3'
      component={Group}
      h={rem(140)}
      justify='flex-end'
      p='xl'
    >
      <EditButton color='white' />
    </Paper>
  )
}

function ProfileImage() {
  return (
    <Avatar
      bg='white'
      className={styles.profileImage}
      h={rem(150)}
      size='xl'
      w={rem(150)}
    >
      JG
    </Avatar>
  )
}

function Info() {
  return (
    <Group pl={rem(236)}>
      <Stack gap='xs'>
        <Title order={4}>Jake Gyll</Title>
        <Group gap='xxs'>
          <Text c='neutrals.4' size='lg'>
            Product Designer at
          </Text>
          <Text fw='500' size='lg'>
            Twitter
          </Text>
        </Group>

        <Group gap='xs'>
          <Box
            c='neutrals.4'
            className='icon-size-lg'
            component={MapPin}
            weight='bold'
          />
          <Text c='neutrals.4' size='lg'>
            Manchester, UK
          </Text>
        </Group>

        <Badge
          color='green'
          px='xl'
          py='xl'
          radius='md'
          size='lg'
          variant='light'
        >
          <Group gap='xs'>
            <Box className='icon-size-lg' component={Flag} weight='bold' />
            <Text fw='600'>OPEN FOR OPPORTUNITIES</Text>
          </Group>
        </Badge>
      </Stack>
    </Group>
  )
}

export function Header() {
  return (
    <Stack gap='xl' h={rem(347)} pos='relative'>
      <Banner />
      <ProfileImage />
      <Info />
    </Stack>
  )
}

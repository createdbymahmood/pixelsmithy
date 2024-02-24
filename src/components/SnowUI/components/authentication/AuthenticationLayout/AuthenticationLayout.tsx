'use client'

import {
  Box,
  Button,
  Card,
  Group,
  rem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import type {ReactNode} from 'react'

const navbar = ['Product', 'Solutions', 'Resources', 'Download', 'Pricing']

function Navbar() {
  const content = navbar.map((navbarItem) => {
    return (
      <Text key={navbarItem} size='sm'>
        {navbarItem}
      </Text>
    )
  })
  return (
    <Group gap='xl' justify='center' wrap='nowrap'>
      {content}
    </Group>
  )
}

function SignInActions() {
  return (
    <Group justify='flex-end'>
      <Button size='xs'>Sign in</Button>
      <Button size='xs' variant='light'>
        Sign up
      </Button>
    </Group>
  )
}

function Logo() {
  return <Skeleton h={rem(28)} w={rem(105)} />
}

function Header() {
  return (
    <SimpleGrid cols={{md: 3}} w='100%'>
      <Logo />
      <Navbar />
      <SignInActions />
    </SimpleGrid>
  )
}

interface ContentProps {
  children: ReactNode
}

function Content({children}: ContentProps) {
  return (
    <Card bg='white' h={658} miw={rem(680)} px={rem(100)} py={50}>
      <Box h='100%'>{children}</Box>
    </Card>
  )
}

function Copyright() {
  return (
    <Text c='dimmed' size='sm' ta='center'>
      © 2024 SnowUI
    </Text>
  )
}

interface AuthenticationLayoutProps {
  children: ReactNode
}

export function AuthenticationLayout(props: AuthenticationLayoutProps) {
  return (
    <Stack align='center' bg='gray.0' mih='100vh' miw='100vw' p='xl'>
      <Header />
      <Box h='100%' py={rem(60)}>
        <Content>{props.children}</Content>
      </Box>
      <Copyright />
    </Stack>
  )
}

import {ActionIcon, Box, Group, Paper, rem, Stack} from '@mantine/core'
import {Pencil} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

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
      <ActionIcon c='white' color='white' size={rem(40)} variant='outline'>
        <Box className='icon-size-lg' component={Pencil} weight='bold' />
      </ActionIcon>
    </Paper>
  )
}

/* function ProfileImage() {
  return <Avatar />
}

function Info() {
  return <div />
} */

export function Header() {
  return (
    <Stack gap='xl'>
      <Banner />
      {/* <ProfileImage /> */}
      {/* <Info /> */}
    </Stack>
  )
}

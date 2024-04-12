import LogoIcon from '@job-huntly/assets/images/logo.svg'
import {Group, Title} from '@mantine/core'
import React from 'react'

export function Logo() {
  return (
    <Group py='xxxl'>
      <LogoIcon />
      <Title lineClamp={1} order={4}>
        JobHuntly
      </Title>
    </Group>
  )
}

'use client'

import {
  ActionIcon,
  Box,
  Divider,
  Group,
  Menu,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react'
import {Rows, SquaresFour} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function Header() {
  return (
    <Group wrap='nowrap'>
      <Stack gap='xxs'>
        <Title order={4}>All Jobs</Title>
        <Text>Showing 73 results</Text>
      </Stack>

      <Group gap='xxl' ml='auto' wrap='nowrap'>
        <Menu shadow='md' width={200}>
          <Menu.Target>
            <Group gap={rem(5)}>
              <Text c='neutrals.4' fw='500'>
                Sort by:
              </Text>
              <Text fw='500'>Most relevant</Text>
              <Box
                c='primary'
                component={CaretDown}
                mb='xxs'
                ml='xxs'
                weight='bold'
              />
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item
              rightSection={
                <Text c='dimmed' size='xs'>
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item>Transfer my data</Menu.Item>
            <Menu.Item color='red'>Delete my account</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Divider orientation='vertical' />

        <Group>
          <ActionIcon c='neutrals.4' size='lg' variant='transparent'>
            <Box className='icon-size-lg' component={SquaresFour} />
          </ActionIcon>

          <ActionIcon c='primary' size='lg' variant='light'>
            <Box className='icon-size-lg' component={Rows} weight='fill' />
          </ActionIcon>
        </Group>
      </Group>
    </Group>
  )
}

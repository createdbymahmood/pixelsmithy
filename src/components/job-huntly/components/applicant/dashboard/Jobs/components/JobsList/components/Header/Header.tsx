'use client'

import type {UseJobsListStateReturnValue} from '@job-huntly/components/applicant/dashboard/Jobs/components'
import {JobsListType} from '@job-huntly/components/applicant/dashboard/Jobs/components'
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
import type {IconProps} from '@phosphor-icons/react'
import {CaretDown} from '@phosphor-icons/react'
import {Rows, SquaresFour} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import React from 'react'

interface HeaderProps extends UseJobsListStateReturnValue {}

const Active = Symbol('active')
const InActive = Symbol('active')

const switchListTypeStylesMap = {
  [Active]: {
    c: 'primary',
    variant: 'light',
  },
  [InActive]: {
    c: 'neutrals.4',
    variant: 'transparent',
  },
}

const switchListTypeIconPropsMap: Record<
  typeof Active | typeof InActive,
  Omit<IconProps, 'display'>
> = {
  [Active]: {
    weight: 'fill',
  },
  [InActive]: {
    weight: 'regular',
  },
}

const getActiveState = (
  currentType: UseJobsListStateReturnValue['type'],
  type: JobsListType,
) => {
  return currentType === type ? Active : InActive
}

export function Header(fns: HeaderProps) {
  const switchListTypeActionButtons = [
    {
      key: JobsListType.Grid,
      icon: SquaresFour,
      onClick: fns.setGrid,
      actionIconProps: get(
        switchListTypeStylesMap,
        getActiveState(fns.type, JobsListType.Grid),
      ),
      innerIconProps: get(
        switchListTypeIconPropsMap,
        getActiveState(fns.type, JobsListType.Grid),
      ),
    },
    {
      key: JobsListType.Stack,
      icon: Rows,
      onClick: fns.setStack,
      actionIconProps: get(
        switchListTypeStylesMap,
        getActiveState(fns.type, JobsListType.Stack),
      ),
      innerIconProps: get(
        switchListTypeIconPropsMap,
        getActiveState(fns.type, JobsListType.Stack),
      ),
    },
  ]

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
          {switchListTypeActionButtons.map((button) => {
            return (
              <ActionIcon
                key={button.key}
                radius='sm'
                size='lg'
                {...button.actionIconProps}
                onClick={button.onClick}
              >
                <Box
                  className='icon-size-lg'
                  component={button.icon}
                  {...button.innerIconProps}
                />
              </ActionIcon>
            )
          })}
        </Group>
      </Group>
    </Group>
  )
}

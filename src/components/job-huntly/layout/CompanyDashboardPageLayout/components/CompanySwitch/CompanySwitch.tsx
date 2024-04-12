import {Avatar, Box, Group, Menu, rem, Stack, Text} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {head} from 'lodash-es'
import React from 'react'

import {companies} from '@/components/job-huntly/mock/companies'

import styles from './CompanySwitch.module.scss'

function MenuTarget() {
  const company = head(companies)!
  return (
    <Menu.Target>
      <Group className={styles.target} gap={0}>
        <Avatar component={company.logo} radius='sm' size={rem(48)} />
        <Stack gap={0} ml='md'>
          <Text c='neutrals.5'>Company</Text>

          <Group gap='xs'>
            <Text fw='600' size='xl'>
              {company.name}
            </Text>

            <Box
              c='black'
              className={clsx('icon-size-md', styles.chevron)}
              component={CaretDown}
              weight='bold'
            />
          </Group>
        </Stack>
      </Group>
    </Menu.Target>
  )
}

function MenuDropdown() {
  return (
    <Menu.Dropdown>
      {companies.map((company) => {
        return (
          <Menu.Item
            key={company.id}
            leftSection={
              <Avatar component={company.logo} radius='xs' size='xs' />
            }
          >
            {company.name}
          </Menu.Item>
        )
      })}
    </Menu.Dropdown>
  )
}

export function CompanySwitch() {
  return (
    <Menu position='bottom-end' shadow='md'>
      <MenuTarget />
      <MenuDropdown />
    </Menu>
  )
}

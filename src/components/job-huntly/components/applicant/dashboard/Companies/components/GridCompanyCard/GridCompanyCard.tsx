import {
  Avatar,
  Badge,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {capitalize} from 'lodash-es'
import React from 'react'

import type {Company} from '@/components/job-huntly/mock/companies'

interface GridCompanyCardProps extends Company {}

export function GridCompanyCard(company: GridCompanyCardProps) {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Group align='flex-start' justify='space-between'>
          <Avatar component={company.logo} radius={0} size={rem(80)} />

          <Badge
            bg='neutrals.0'
            color='primary'
            fw='400'
            py='md'
            radius={0}
            size='lg'
            variant='light'
          >
            {company.jobsCount} Jobs
          </Badge>
        </Group>

        <Title order={4}>{company.name}</Title>
        <Text c='neutrals.5' lineClamp={3}>
          {company.description}
        </Text>

        <Group>
          {company.categories.map((category) => {
            return (
              <Badge
                key={category.label}
                color={category.color}
                fw='600'
                py='md'
                size='lg'
                variant='light'
              >
                {capitalize(category.label)}
              </Badge>
            )
          })}
        </Group>
      </Stack>
    </Paper>
  )
}

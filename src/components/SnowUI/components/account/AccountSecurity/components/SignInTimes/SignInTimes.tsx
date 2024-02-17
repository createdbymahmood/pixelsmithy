import {
  Box,
  Card,
  Divider,
  Group,
  rem,
  Skeleton,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core'
import {head} from 'lodash-es'
import {Fragment} from 'react'

import styles from './SignInTimes.module.scss'

const tabs = [
  {
    title: '12 Hours',
    element: (
      <Fragment>
        <Stats />
        <AgentsChart />
      </Fragment>
    ),
  },
  {
    title: 'Day',
    element: (
      <Fragment>
        <Stats />
        <AgentsChart />
      </Fragment>
    ),
  },
  {
    title: 'Week',
    element: (
      <Fragment>
        <Stats />
        <AgentsChart />
      </Fragment>
    ),
  },
]

function Header() {
  const list = tabs.map((tab) => {
    return (
      <Tabs.Tab key={tab.title} size='xs' value={tab.title}>
        {tab.title}
      </Tabs.Tab>
    )
  })

  return (
    <Group align='baseline' justify='space-between'>
      <Title order={5}>Sign in times</Title>
      <Tabs.List>{list}</Tabs.List>
    </Group>
  )
}

function Body() {
  return (
    <Fragment>
      {tabs.map((tab) => {
        return (
          <Tabs.Panel key={tab.title} value={tab.title}>
            <Stack>{tab.element}</Stack>
          </Tabs.Panel>
        )
      })}
    </Fragment>
  )
}

const defaultActiveTab = head(tabs)!

function Stats() {
  return (
    <Card bg='gray.1'>
      <Group gap='lg'>
        <Stack gap={rem(5)}>
          <Text size='sm'>User</Text>
          <Title order={4}>36,899</Title>
        </Stack>

        <Divider orientation='vertical' />

        <Stack gap={rem(5)}>
          <Text size='sm'>Admin</Text>
          <Title order={4}>75</Title>
        </Stack>
        <Divider orientation='vertical' />

        <Stack gap={rem(5)}>
          <Text size='sm'>Failed</Text>
          <Title order={4}>291</Title>
        </Stack>
      </Group>
    </Card>
  )
}

function AgentsChart() {
  return (
    <Stack>
      <Group gap='md'>
        <Title order={5}>Agents Client</Title>
        <Text c='dimmed' size='sm'>
          Clients Chart
        </Text>
      </Group>

      <Skeleton h={rem(152)} radius='lg' />
    </Stack>
  )
}

export function SignInTimes() {
  return (
    <Card>
      <Tabs
        classNames={{tab: styles.tab, list: styles.list}}
        defaultValue={defaultActiveTab.title}
      >
        <Stack>
          <Header />
          <Body />
        </Stack>
      </Tabs>
    </Card>
  )
}

import {Avatar, Box, Card, Group, rem, Stack, Text} from '@mantine/core'
import {entries, groupBy, map} from 'lodash-es'
import {useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {SearchInput} from '@/components/Roscent'

import styles from './SideUsersList.module.scss'

const rawUsers = [
  'Andi Lane',
  'ByeWind',
  'Bruce Wayne',
  'Drew Cano',
  'Emma Smith',
  'John Smith',
  'Kate Morrison',
  'Koray Okumus',
  'Michael Brown',
  'Melody Macy',
  'Natali Craig',
  'Orlando Diggs',
]

interface UsersProps {
  queryString: string | null
}

interface UseUsersStateParams extends UsersProps {}

function useUsersState({queryString}: UseUsersStateParams) {
  const filteredUsers = rawUsers.filter((user) => {
    if (!queryString) return true
    return user.toLowerCase().includes(queryString.toLowerCase())
  })
  const groupedUsers = groupBy(filteredUsers, (user) => user[0].toUpperCase())
  return {groupedUsers}
}

function Users({queryString}: UsersProps) {
  const {groupedUsers} = useUsersState({queryString})
  const content = map(entries(groupedUsers), ([letter, users]) => {
    return (
      <Stack key={letter} gap='sm'>
        <Text c='dimmed' size='xs'>
          {letter}
        </Text>

        <Stack gap='sm'>
          {users.map((user) => {
            return (
              <Group key={user}>
                <Avatar size={24} />
                <Text size='sm'>{user}</Text>
              </Group>
            )
          })}
        </Stack>
      </Stack>
    )
  })
  return (
    <Stack gap='lg' p='md' pt={0}>
      {content}
    </Stack>
  )
}

export function SideUsersList() {
  const [queryString, setQueryString] = useState<string | null>(null)

  return (
    <Card className='shrink-0' h='100%' p={0} w={rem(208)}>
      <Stack h='100%'>
        <Box pt='md' px='md'>
          <SearchInput
            classNames={{input: styles.searchInput}}
            w='100%'
            onChange={(e) => setQueryString(e.target.value)}
          />
        </Box>

        <PerfectScrollbar>
          <Users queryString={queryString} />
        </PerfectScrollbar>
      </Stack>
    </Card>
  )
}

import {faker} from '@faker-js/faker'
import {
  Button,
  Card,
  Group,
  rem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core'
import {EnvelopeSimple} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import Link from 'next/link'

import {PageHeader} from '@/components/DashStack/components'
import {urls} from '@/constants'

function Header() {
  return (
    <Group justify='space-between'>
      <PageHeader>Team</PageHeader>
      <Button
        color='primary.4'
        component={Link}
        href={urls.DashStack.dashboard.contacts.add}
        radius='md'
        size='md'
      >
        Add New Member
      </Button>
    </Group>
  )
}
interface Contact {
  name: string
  email: string
  role: string
}

const contacts: Contact[] = range(0, 9).map(() => {
  return {
    name: faker.person.firstName(),
    role: faker.person.jobType(),
    email: faker.internet.email({allowSpecialCharacters: false}),
  }
})

interface ContactCardProps extends Contact {}

function ContactCard({email, name, role}: ContactCardProps) {
  return (
    <Card>
      <Stack align='center' gap={0}>
        <Skeleton h={rem(110)} mt={rem(46)} radius='md' w={rem(110)} circle />

        <Text fw='700' mt='md'>
          {name}
        </Text>

        <Text c='dimmed' fw='600' mt={rem(4)}>
          {role}
        </Text>

        <Text c='dimmed' mt={rem(9)}>
          {email}
        </Text>
      </Stack>
    </Card>
  )
}

function TeamMembersList() {
  const content = contacts.map((contact) => {
    return <ContactCard {...contact} key={contact.name} />
  })

  return <SimpleGrid cols={3}>{content}</SimpleGrid>
}

export function Team() {
  return (
    <Stack gap='md' pb='md'>
      <Header />
      <TeamMembersList />
    </Stack>
  )
}

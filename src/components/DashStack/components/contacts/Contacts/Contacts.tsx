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

import {PageHeader} from '@/components/DashStack/components'

function Header() {
  return (
    <Group justify='space-between'>
      <PageHeader>Contacts</PageHeader>
      <Button color='primary.4' size='md'>
        Add new contact
      </Button>
    </Group>
  )
}
interface Contact {
  name: string
  email: string
}

const contacts: Contact[] = range(0, 9).map(() => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }
})

interface ContactCardProps extends Contact {}

function ContactCard({email, name}: ContactCardProps) {
  return (
    <Card>
      <Stack align='center' gap={0}>
        <Skeleton h={rem(276)} radius='md' />

        <Text fw='700' mt='sm'>
          {name}
        </Text>

        <Text c='dimmed' mt={rem(4)}>
          {email}
        </Text>

        <Button
          c='gray.7'
          leftSection={<EnvelopeSimple className='icon-size-md' />}
          mt={rem(21)}
          radius='md'
          variant='default'
        >
          Message
        </Button>
      </Stack>
    </Card>
  )
}

function ContactsList() {
  const content = contacts.map((contact) => {
    return <ContactCard {...contact} key={contact.name} />
  })

  return <SimpleGrid cols={3}>{content}</SimpleGrid>
}

export function Contacts() {
  return (
    <Stack gap='md' pb='md'>
      <Header />
      <ContactsList />
    </Stack>
  )
}

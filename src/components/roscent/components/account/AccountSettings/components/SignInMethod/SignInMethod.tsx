import {
  Alert,
  Button,
  Card,
  Group,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {ShieldCheck} from '@phosphor-icons/react/dist/ssr'

import {ProfileDetailsSecttingsSection} from '../ProfileDetailsSettings'
import inputStyles from '../ProfileDetailsSettings/ProfileDetailsSettings.module.scss'

function Settings() {
  return (
    <SimpleGrid cols={{xs: 1, md: 2}}>
      <ProfileDetailsSecttingsSection title='Email Address'>
        <Input
          classNames={{input: inputStyles.input}}
          defaultValue='byewind@twitter.com'
          placeholder='eg: example@gmial.com'
        />
      </ProfileDetailsSecttingsSection>

      <ProfileDetailsSecttingsSection title='Password'>
        <Input
          classNames={{input: inputStyles.input}}
          defaultValue='1234567890'
          type='password'
        />
      </ProfileDetailsSecttingsSection>
    </SimpleGrid>
  )
}

function Header() {
  return <Title order={5}>Sign-in Method</Title>
}

function SecureAccountAlert() {
  const title = (
    <Group align='flex-start' justify='space-between' w='100%'>
      <Text size='sm'>Secure Your Account</Text>
      <Button size='xs' variant='light'>
        Enable
      </Button>
    </Group>
  )

  return (
    <Alert
      bg='indigo.0'
      icon={<ShieldCheck size={20} />}
      styles={{
        label: {
          width: '100%',
        },
      }}
      title={title}
    >
      Two-factor authentication adds an extra layer of security to your account.
      To log in, in addition you'll need to provide a 6 digit code.
    </Alert>
  )
}

export function SignInMethod() {
  return (
    <Card>
      <Stack>
        <Header />
        <Settings />
        <SecureAccountAlert />
      </Stack>
    </Card>
  )
}

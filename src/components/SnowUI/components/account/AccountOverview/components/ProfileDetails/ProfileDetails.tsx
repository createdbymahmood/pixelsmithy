import {
  Alert,
  Badge,
  Card,
  Group,
  rem,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core'
import {Info} from '@phosphor-icons/react/dist/ssr'

import styles from './ProfileDetails.module.scss'

function PaymentMethodAlert() {
  return (
    <Alert
      bg='indigo.0'
      classNames={{
        icon: styles.alertIcon,
        root: styles.alertRoot,
        message: styles.alertMessage,
        title: styles.alertTitle,
        body: styles.alertBody,
      }}
      icon={<Info size={20} />}
      title='We need your attention!'
    >
      Your payment was declined. To start using tools, please Add Payment
      Method.
    </Alert>
  )
}

function Header() {
  return (
    <Group align='baseline' gap={rem(5)}>
      <Title order={5}>Profile Details</Title>
      <Text c='dimmed' className={styles.edit} size='xs'>
        Edit Profile
      </Text>
    </Group>
  )
}

function Details() {
  const elements = [
    {key: 'Company', value: 'Snow UI'},
    {key: 'Contact phone', value: '+852 19850622', isVerified: true},
    {key: 'Company Site', value: 'snowui.byewind.com'},
    {key: 'Country', value: 'United States'},
    {key: 'Communication', value: 'Email, Phone'},
    {key: 'Allow Changes', value: 'Yes'},
  ]

  const content = elements.map((element) => {
    return (
      <Table.Tr key={element.key}>
        <Table.Td>
          <Text c='dimmed' size='xs'>
            {element.key}
          </Text>
        </Table.Td>

        <Table.Td>
          <Group gap='xs'>
            <Text size='xs'>{element.value}</Text>
            {element.isVerified ? (
              <Badge color='green' size='sm'>
                Verified
              </Badge>
            ) : null}
          </Group>
        </Table.Td>
      </Table.Tr>
    )
  })
  return (
    <Table horizontalSpacing={0}>
      <Table.Tbody>{content}</Table.Tbody>
    </Table>
  )
}

export function ProfileDetails() {
  return (
    <Card>
      <Stack>
        <Header />
        <Details />
        <PaymentMethodAlert />
      </Stack>
    </Card>
  )
}

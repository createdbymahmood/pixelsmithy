import {
  Alert,
  Button,
  Card,
  CloseButton,
  CopyButton,
  Divider,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  Check,
  ClipboardText,
  CurrencyCircleDollar,
} from '@phosphor-icons/react/dist/ssr'
import {useState} from 'react'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Earnings</Title>
      <Button ml='auto' size='xs' variant='light'>
        Withdraw Earnings
      </Button>
    </Group>
  )
}

function NetEarnings() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Net Earnings</Text>
      <Group gap='sm'>
        <Title order={4}>$6,840</Title>
      </Group>
    </Stack>
  )
}

function Balance() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Balance</Text>
      <Group gap='sm'>
        <Title order={4}>$8,530</Title>
      </Group>
    </Stack>
  )
}

function AverageDealSize() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Fees</Text>
      <Group gap='sm'>
        <Title order={4}>$2,600</Title>
      </Group>
    </Stack>
  )
}

function ReferralSignups() {
  return (
    <Stack gap={rem(5)}>
      <Text size='sm'>Referral Signups</Text>
      <Group gap='sm'>
        <Title order={4}>$783</Title>
      </Group>
    </Stack>
  )
}

function ReferralStats() {
  return (
    <Group justify='space-between'>
      <Stack>
        <Group gap='xl'>
          <NetEarnings />
          <Divider orientation='vertical' />
          <Balance />
          <Divider orientation='vertical' />
          <AverageDealSize />
          <Divider orientation='vertical' />
          <ReferralSignups />
        </Group>
      </Stack>
    </Group>
  )
}

function ReferralLink() {
  const link = 'https://byewind.gumroad.com/l/SnowDashboardUIKit'

  return (
    <Stack>
      <Title order={5}>Your Referral Link</Title>
      <CopyButton value={link}>
        {({copied, copy}) => {
          const Icon = copied ? Check : ClipboardText
          const rightSection = (
            <Icon className='icon-size-normal cursor-pointer' onClick={copy} />
          )

          return (
            <Input
              defaultValue={link}
              rightSection={rightSection}
              rightSectionPointerEvents='all'
              value={link}
              w='100%'
            />
          )
        }}
      </CopyButton>

      <Text c='dimmed' size='sm'>
        Plan your blog post by choosing a topic, creating an outline conduct
        research, and checking facts.
      </Text>
    </Stack>
  )
}

function HowTo() {
  return (
    <Group justify='space-between'>
      <Stack gap={0}>
        <Title order={5}>How to use Referral Program</Title>
        <Text c='dimmed' size='sm'>
          Use images to enhance your post, improve its flow, add humor and
          explain complex topics.
        </Text>
      </Stack>

      <Button size='xs' variant='light'>
        Get Started
      </Button>
    </Group>
  )
}

function WithdrawalAlert() {
  return (
    <Alert
      bg='gray.1'
      icon={<CurrencyCircleDollar size={20} style={{marginTop: rem(6)}} />}
      radius='md'
      styles={{
        label: {
          width: '100%',
        },
      }}
      title={
        <Group justify='space-between'>
          <Text size='sm'>Withdraw Your Money to a Bank Account</Text>

          <Button bg='gray.3' size='xs' variant='light'>
            Withdraw Money
          </Button>
        </Group>
      }
    >
      Withdraw money securily to your bank account. Commision is $25 per
      transaction under $50,000.
    </Alert>
  )
}

export function ReferralProgram() {
  return (
    <Card>
      <Stack>
        <Header />
        <ReferralStats />
        <Divider />
        <ReferralLink />
        <Divider />
        <HowTo />
        <WithdrawalAlert />
      </Stack>
    </Card>
  )
}

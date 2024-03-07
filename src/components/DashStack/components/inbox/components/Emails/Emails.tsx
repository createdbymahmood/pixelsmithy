import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Input,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {
  CaretLeft,
  CaretRight,
  Download,
  Info,
  MagnifyingGlass,
  Star,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import {range} from 'lodash-es'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './Emails.module.scss'

function Header() {
  const searchInputLeftSection = (
    <MagnifyingGlass className='icon-size-sm' weight='bold' />
  )

  return (
    <Group justify='space-between'>
      <Input
        classNames={{input: styles.searchInput}}
        leftSection={searchInputLeftSection}
        maw={rem(332)}
        placeholder='Search mail'
        radius='lg'
        w='100%'
      />

      <Button.Group>
        <Button px='sm' radius={rem(12)} size='md' variant='default'>
          <Download className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius={rem(12)} size='md' variant='default'>
          <Info className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius={rem(12)} size='md' variant='default'>
          <Trash className='icon-size-md' weight='fill' />
        </Button>
      </Button.Group>
    </Group>
  )
}

function EmailListItem() {
  return (
    <Group gap='sm' wrap='nowrap'>
      <Checkbox />
      <Box c='gray.5' className='icon-size-md' component={Star} />
      <Text fw='600' lineClamp={1} size='sm'>
        Jullu Jalal
      </Text>
      <Badge color='pink' radius='sm' variant='light'>
        Firends
      </Badge>

      <Text c='gray.8' fw='600' lineClamp={1} size='sm'>
        Our Bachelor of Commerce program is ACBSP-accredited.
      </Text>
      <Text lineClamp={1} ml='auto' size='sm'>
        8:38 AM
      </Text>
    </Group>
  )
}

function EmailList() {
  return (
    <Stack>
      {range(0, 10).map((index) => (
        <EmailListItem key={index} />
      ))}
    </Stack>
  )
}

function Content() {
  return (
    <Box h='100%'>
      <EmailList />
    </Box>
  )
}

function Footer() {
  return (
    <Group justify='space-between'>
      <Text c='gray.8' size='sm'>
        Showing 1-12 of 1,253
      </Text>

      <Button.Group>
        <Button px='sm' py={0} radius='md' size='sm' variant='default'>
          <CaretLeft className='icon-size-sm' weight='bold' />
        </Button>

        <Button px='sm' py={0} radius='md' size='sm' variant='default'>
          <CaretRight className='icon-size-sm' weight='bold' />
        </Button>
      </Button.Group>
    </Group>
  )
}

export function Emails() {
  return (
    <Card h='100%' p='md' w='100%'>
      <Stack h='100%'>
        <Header />

        <PerfectScrollbar>
          <Content />
        </PerfectScrollbar>

        <Footer />
      </Stack>
    </Card>
  )
}

import {Box, Button, Card, Group, Input, rem, Stack, Text} from '@mantine/core'
import {
  CaretLeft,
  CaretRight,
  Download,
  Info,
  MagnifyingGlass,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
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
        <Button px='sm' radius='md' size='md' variant='default'>
          <Download className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius='md' size='md' variant='default'>
          <Info className='icon-size-md' weight='fill' />
        </Button>

        <Button px='sm' radius='md' size='md' variant='default'>
          <Trash className='icon-size-md' weight='fill' />
        </Button>
      </Button.Group>
    </Group>
  )
}

function Content() {
  return <Box h='100%'>Salam</Box>
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
    <Card h='100%' w='100%'>
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

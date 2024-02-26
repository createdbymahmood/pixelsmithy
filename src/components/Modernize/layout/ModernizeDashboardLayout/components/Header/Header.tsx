import {Box, Group, Input, Title} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import styles from './Header.module.scss'

function SearchInput() {
  const leftSection = <MagnifyingGlass className='icon-size-md' />
  return (
    <Input
      classNames={{input: styles.searchInput}}
      leftSection={leftSection}
      placeholder='Search...'
      size='sm'
    />
  )
}

export function Header() {
  return (
    <Group bg='white' className={styles.header} gap={0} wrap='nowrap'>
      <Group className={styles.logo} gap='xs'>
        <Image
          alt='Logo'
          height={38}
          src='/assets/modernize/icons/logo.svg'
          width={41.3}
        />
        <Title order={6}>Modernize</Title>
      </Group>

      <Box px='sm'>
        <SearchInput />
      </Box>
    </Group>
  )
}

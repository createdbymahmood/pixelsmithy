import {
  Autocomplete,
  Card,
  Input,
  rem,
  SimpleGrid,
  Stack,
  Switch,
  TagsInput,
  Text,
  Title,
} from '@mantine/core'
import {CaretUpDown} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'
import {useState} from 'react'

import styles from './ProfileDetailsSettings.module.scss'

export function ProfileDetailsSecttingsSection(props: {
  children: ReactNode
  title?: string
}) {
  return (
    <Stack bg='white' className={styles.section}>
      <Stack gap={rem(3)}>
        {props.title ? (
          <Text c='dimmed' size='xs'>
            {props.title}
          </Text>
        ) : null}
        {props.children}
      </Stack>
    </Stack>
  )
}

function FirstName() {
  return (
    <ProfileDetailsSecttingsSection>
      <Input
        classNames={{input: styles.input}}
        defaultValue='ByeWind'
        placeholder='First Name'
      />
    </ProfileDetailsSecttingsSection>
  )
}

function LastName() {
  return (
    <ProfileDetailsSecttingsSection>
      <Input classNames={{input: styles.input}} placeholder='Last Name' />
    </ProfileDetailsSecttingsSection>
  )
}

function ContactPhone() {
  return (
    <ProfileDetailsSecttingsSection title='Contact Phone'>
      <Input
        classNames={{input: styles.input}}
        defaultValue='+85219850622'
        placeholder='Contact Phone'
        size='sm'
      />
    </ProfileDetailsSecttingsSection>
  )
}

function TitleTags() {
  return (
    <ProfileDetailsSecttingsSection title='Title'>
      <TagsInput
        classNames={{input: styles.input}}
        defaultValue={['Lite Item', 'Tag']}
        placeholder='Enter tag'
      />
    </ProfileDetailsSecttingsSection>
  )
}

function CompanyName() {
  return (
    <ProfileDetailsSecttingsSection title='Company Name'>
      <Input
        classNames={{input: styles.input}}
        defaultValue='Snow UI'
        placeholder='eg: Google'
      />
    </ProfileDetailsSecttingsSection>
  )
}

function CompanySite() {
  return (
    <ProfileDetailsSecttingsSection title='Company Site'>
      <Input
        classNames={{input: styles.input}}
        defaultValue='snowui.byewind.com'
        placeholder='eg: www.example.com'
      />
    </ProfileDetailsSecttingsSection>
  )
}

function Country() {
  return (
    <ProfileDetailsSecttingsSection title='Country'>
      <Autocomplete
        classNames={{input: styles.input, root: styles.input}}
        data={['US', 'Canada', 'Germany', 'Austria']}
        defaultValue='US'
        p={0}
        placeholder=''
        rightSection={<CaretUpDown className='icon-size-sm' />}
      />
    </ProfileDetailsSecttingsSection>
  )
}

function Language() {
  return (
    <ProfileDetailsSecttingsSection title='Language'>
      <Autocomplete
        classNames={{input: styles.input, root: styles.input}}
        data={['EN', 'DE']}
        defaultValue='DE'
        p={0}
        placeholder=''
        rightSection={<CaretUpDown className='icon-size-sm' />}
      />
    </ProfileDetailsSecttingsSection>
  )
}

function Status() {
  const [checked, setChecked] = useState(true)
  const label = checked ? 'Active' : 'Inactive'

  return (
    <ProfileDetailsSecttingsSection title='Status'>
      <Switch
        checked={checked}
        classNames={{label: styles.switchLabel}}
        label={label}
        mt='xs'
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    </ProfileDetailsSecttingsSection>
  )
}

export function ProfileDetailsSettings() {
  return (
    <Card>
      <Stack>
        <Title order={5}>Profile Details</Title>
        <SimpleGrid cols={2} spacing='lg'>
          <FirstName />
          <LastName />
          <ContactPhone />
          <TitleTags />
          <CompanyName />
          <CompanySite />
          <Country />
          <Language />
        </SimpleGrid>
        <Status />
      </Stack>
    </Card>
  )
}

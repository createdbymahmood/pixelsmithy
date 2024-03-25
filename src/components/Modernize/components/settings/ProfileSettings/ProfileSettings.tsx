'use client'

import {
  Autocomplete,
  Button,
  Card,
  Divider,
  Group,
  Input,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import {Dropzone, IMAGE_MIME_TYPE} from '@mantine/dropzone'
import {FormViewSection} from '@modernize/components/common'

function Actions() {
  return (
    <Group ml='auto'>
      <Button ml='auto' variant='default'>
        Cancel
      </Button>
      <Button>Save</Button>
    </Group>
  )
}

function ProfileDetails() {
  return (
    <FormViewSection
      description='Enter your profile information'
      title='Profile Details'
    >
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        maxSize={5 * 1024 ** 2}
        p={rem(28)}
        onDrop={(_files) => console.log('accepted files', _files)}
        onReject={(_files) => console.log('rejected files', _files)}
      >
        <Stack align='center' gap={rem(12)}>
          <Button variant='default'>Add File</Button>
          <Text c='general.5' size='sm'>
            Or drag and drop files
          </Text>
        </Stack>
      </Dropzone>

      <SimpleGrid cols={2} spacing={rem(24)}>
        <Input.Wrapper label='First Name'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Last Name'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Email Address'>
          <Input />
        </Input.Wrapper>

        <Input.Wrapper label='Phone Number'>
          <Input />
        </Input.Wrapper>
      </SimpleGrid>
    </FormViewSection>
  )
}

function RegionalSettings() {
  return (
    <FormViewSection
      description='Set your language and timezone'
      title='Regional Settings'
    >
      <Group gap={rem(24)} wrap='nowrap'>
        <Autocomplete data={['English']} defaultValue='English' w='100%' />
        <Autocomplete data={['GMT +02:00']} value='GMT +02:00' w='100%' />
      </Group>
    </FormViewSection>
  )
}

export function ProfileSettings() {
  return (
    <Stack gap={rem(30)}>
      <Card pt={rem(28)} px={rem(28)}>
        <Stack gap={rem(30)}>
          <ProfileDetails />
          <Divider />
          <RegionalSettings />
        </Stack>
      </Card>

      <Divider />
      <Actions />
    </Stack>
  )
}
